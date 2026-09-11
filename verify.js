#!/usr/bin/env node
'use strict';

/*
 * verify.js — checks an LL144 audit report against this folder.
 *
 *   node verify.js                    verify every report in runs/
 *   node verify.js path/to/report.md  verify one report
 *
 * No dependencies. No network. Node 14+.
 *
 * What it checks, and why each one exists:
 *
 *   1  QUOTE      Every quote is a verbatim substring of the reference file it
 *                 cites. A citation whose text does not appear where it says is
 *                 the failure this whole folder exists to refuse.
 *   2  LINE       Every cited line number lands inside its file and on a
 *                 non-empty line.
 *   3  ANCHOR     Every quote begins on the line it cites, not merely
 *                 somewhere in the file. QUOTE and LINE are independent
 *                 checks; a finding can cite a line its quote does not
 *                 appear on and still pass both. This closes that gap.
 *   4  COVERAGE   Every audited obligation in reference/provisions.md appears
 *                 exactly once. A skipped obligation looks exactly like
 *                 thoroughness unless something counts them.
 *   5  SEVERITY   Every severity recomputes from the mapping in rules.md.
 *                 Severity is read off §20-872, not assigned by judgement.
 *   6  REF-03     If SUMMARY-PUBLIC is FAIL, the conditional referral REF-03
 *                 must be present. A conditional whose condition is met and
 *                 which was not written is a skipped step.
 *   7  REFERRAL   Every referral carries all five fields, and every branch
 *                 either names a legal verdict or enumerates one for every
 *                 combination of another referral's answers.
 *   8  GATE       No bare verdict while a blocking referral is open. A held
 *                 verdict is written "FAIL (held — REF-01)".
 *
 *   The REFERRAL check also enforces cross-referral consistency: a branch may
 *   not assign a verdict to an obligation another open referral governs unless
 *   it enumerates against that referral's answers. Added after the resolution
 *   test caught report-b's REF-01 doing exactly that. See TESTING.md.
 *
 * Exit code 0 if every report passes, 1 otherwise.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const REF = path.join(ROOT, 'reference');
const RUNS = path.join(ROOT, 'runs');

const VERDICTS = ['PASS', 'FAIL', 'NOT APPLICABLE', 'REFERRED'];
const SEVERITIES = ['ACCRUING', 'DISCRETE', '—', '-', ''];

/* Severity mapping — mirrors the table in rules.md.
   Obligations under §20-871(a) accrue daily per §20-872(b).
   Obligations under §20-871(b) are discrete per §20-872(c). */
const SEVERITY_MAP = {
  'AUDIT-CURRENCY':   'ACCRUING',
  'SUMMARY-PUBLIC':   'ACCRUING',
  'SUMMARY-LOCATION': 'ACCRUING',
  'SUMMARY-CONTENT':  'ACCRUING',
  'SUMMARY-LINK':     'ACCRUING',
  'NOTICE-USE':       'DISCRETE',
  'NOTICE-QUALS':     'DISCRETE',
  'NOTICE-ALT':       'DISCRETE',
  'NOTICE-METHOD':    'DISCRETE',
  'DATA-DISCLOSURE':  'DISCRETE',
  'DATA-WEBPOST':     'DISCRETE',
};

// ---------------------------------------------------------------- utilities

const norm = s => s
  .replace(/[\u2018\u2019]/g, "'")
  .replace(/[\u201C\u201D]/g, '"')
  .replace(/[\u2013\u2014]/g, '-')
  .replace(/\u00a0/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

function readRef(file) {
  const p = path.join(REF, file);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}

/* Pull the audited obligation IDs out of provisions.md. Rows look like:
   | `SUMMARY-PUBLIC` | description | `file.md:L24` | */
function auditedObligations() {
  const src = readRef('provisions.md');
  if (!src) throw new Error('reference/provisions.md not found');
  const section = src.split(/^## /m).find(s => /^Audited obligations/i.test(s));
  if (!section) throw new Error('provisions.md: no "Audited obligations" section');
  const ids = [];
  for (const m of section.matchAll(/^\|\s*`([A-Z0-9-]+)`\s*\|/gm)) ids.push(m[1]);
  return ids;
}

// ------------------------------------------------------------------ parsing

/* Findings and referrals both live in fenced blocks. Findings start with
   "id:", referrals with "REF-nn". */
function parseBlocks(src) {
  const findings = [];
  const referrals = [];
  for (const m of src.matchAll(/```\n([\s\S]*?)```/g)) {
    const body = m[1];
    if (/^\s*id:\s/m.test(body)) findings.push(parseFields(body));
    else if (/^REF-\d+/m.test(body)) referrals.push(parseReferral(body));
  }
  return { findings, referrals };
}

/* Fields are "key: value", continued by indented lines. */
function parseFields(body) {
  const out = {};
  let key = null;
  for (const line of body.split('\n')) {
    const m = line.match(/^([a-z][a-z_ ]*?):\s?(.*)$/);
    if (m && !/^\s/.test(line)) {
      key = m[1].trim();
      out[key] = m[2];
    } else if (key && line.trim()) {
      out[key] += '\n' + line.trim();
    }
  }
  return out;
}

function parseReferral(body) {
  const r = parseFields(body);
  const head = body.match(/^(REF-\d+)\s+(.*)$/m);
  if (head) { r.id = head[1]; r.label = head[2].trim(); }
  r.blocking = /BLOCKING/.test(body);
  r.branches = [];
  // Split on the branch marker, then cut each chunk at its first arrow. A
  // condition may wrap across lines, so it is not newline-bounded.
  const chunks = body.split(/^once answered, if /m).slice(1);
  for (let chunk of chunks) {
    chunk = chunk.split(/^status:/m)[0];
    const arrow = chunk.indexOf('\u2192');
    if (arrow === -1) { r.branches.push({ cond: norm(chunk).slice(0, 60), outcome: '' }); continue; }
    r.branches.push({
      cond: norm(chunk.slice(0, arrow)),
      outcome: norm(chunk.slice(arrow + 1)),
    });
  }
  return r;
}

// ------------------------------------------------------------------- checks

function verify(reportPath) {
  const src = fs.readFileSync(reportPath, 'utf8');
  const { findings, referrals } = parseBlocks(src);
  const expectM = src.match(/^expect:\s*(pass|fail)\s*(?:—|-)?\s*(.*)$/mi);
  const expect = expectM ? { status: expectM[1].toLowerCase(), why: expectM[2].trim() } : null;
  const fail = [];
  const pass = [];

  if (!findings.length) fail.push(['PARSE', 'no finding blocks found — report does not follow the rules.md block format']);

  // --- 1 & 2: quotes and line numbers -------------------------------------
  let quotesOK = 0;
  let anchorsOK = 0;
  for (const f of [...findings, ...referrals]) {
    if (!f.provision || !f.quote) continue;
    const cite = f.provision.match(/([a-z0-9-]+\.md):L(\d+)/);
    if (!cite) { fail.push(['LINE', `${f.id}: provision "${f.provision.trim()}" is not a file:line citation`]); continue; }
    const [, file, lineStr] = cite;
    const text = readRef(file);
    if (text === null) { fail.push(['QUOTE', `${f.id}: cites ${file}, which is not in reference/`]); continue; }

    const lines = text.split('\n');
    const ln = parseInt(lineStr, 10);
    if (ln < 1 || ln > lines.length) fail.push(['LINE', `${f.id}: cites ${file}:L${ln}, file has ${lines.length} lines`]);
    else if (!lines[ln - 1].trim()) fail.push(['LINE', `${f.id}: cites ${file}:L${ln}, which is blank`]);

    if (norm(text).includes(norm(f.quote))) { quotesOK++; }
    else fail.push(['QUOTE', `${f.id}: quote is not a verbatim substring of ${file}\n        quote: "${norm(f.quote).slice(0, 90)}..."`]);

    // --- 3: anchor — the quote must begin on the line it cites -------------
    if (ln >= 1 && ln <= lines.length) {
      const q = norm(f.quote);
      const A = norm(lines.slice(ln - 1).join('\n'));
      const B = ln < lines.length ? norm(lines.slice(ln).join('\n')) : '';
      if (q && A.includes(q) && !B.includes(q)) {
        anchorsOK++;
      } else if (q) {
        let actual = null;
        for (let k = lines.length; k >= 1; k--) {
          if (norm(lines.slice(k - 1).join('\n')).includes(q)) { actual = k; break; }
        }
        const where = actual ? `the quote begins at ${file}:L${actual}` : `the quote does not begin on any line of ${file}`;
        fail.push(['ANCHOR', `${f.id}: cites ${file}:L${ln}, but ${where}`]);
      }
    }
  }
  if (quotesOK) pass.push(`QUOTE     ${quotesOK} quote(s) verified verbatim against reference/`);
  if (anchorsOK) pass.push(`ANCHOR    ${anchorsOK} quote(s) verified to begin on the line they cite`);

  // --- 3: coverage --------------------------------------------------------
  const required = auditedObligations();
  const seen = findings.map(f => (f.obligation || '').trim());
  for (const ob of required) {
    const n = seen.filter(s => s === ob).length;
    if (n === 0) fail.push(['COVERAGE', `${ob} is audited in provisions.md but absent from this report`]);
    else if (n > 1) fail.push(['COVERAGE', `${ob} appears ${n} times; each obligation is reported once`]);
  }
  for (const s of seen) if (s && !required.includes(s)) fail.push(['COVERAGE', `${s} is reported but is not an audited obligation in provisions.md`]);
  if (!fail.some(f => f[0] === 'COVERAGE')) pass.push(`COVERAGE  all ${required.length} audited obligations reported exactly once`);

  // --- 4: severity --------------------------------------------------------
  let sevOK = 0;
  for (const f of findings) {
    const ob = (f.obligation || '').trim();
    const sev = (f.severity || '').trim();
    const verdict = (f.verdict || '').trim();
    const isFail = /^FAIL/.test(verdict);
    if (isFail) {
      const expect = SEVERITY_MAP[ob];
      if (!expect) continue;
      if (sev !== expect) fail.push(['SEVERITY', `${f.id} (${ob}): severity "${sev}", mapping in rules.md gives "${expect}"`]);
      else sevOK++;
    } else if (!SEVERITIES.includes(sev)) {
      fail.push(['SEVERITY', `${f.id} (${ob}): verdict ${verdict} carries severity "${sev}"; severity attaches to FAIL only`]);
    }
  }
  if (sevOK) pass.push(`SEVERITY  ${sevOK} severity value(s) recomputed from the rules.md mapping`);

  // --- 5: REF-03 conditional ----------------------------------------------
  const summaryPublic = findings.find(f => (f.obligation || '').trim() === 'SUMMARY-PUBLIC');
  if (summaryPublic && /^FAIL/.test((summaryPublic.verdict || '').trim())) {
    if (referrals.some(r => r.id === 'REF-03')) pass.push('REF-03    conditional fired correctly on SUMMARY-PUBLIC = FAIL');
    else fail.push(['REF-03', 'SUMMARY-PUBLIC is FAIL but REF-03 (duration window) is absent — a conditional whose condition is met must be written']);
  }

  // --- 6: referral shape --------------------------------------------------
  let refOK = 0;
  for (const r of referrals) {
    const missing = ['provision', 'quote', 'question', 'evidence', 'status'].filter(k => !r[k] || !String(r[k]).trim());
    if (missing.length) { fail.push(['REFERRAL', `${r.id}: missing required field(s): ${missing.join(', ')}`]); continue; }
    if (r.branches.length < 2) { fail.push(['REFERRAL', `${r.id}: ${r.branches.length} branch(es); both outcomes must be committed in advance`]); continue; }

    let bad = false;
    for (const b of r.branches) {
      const namesVerdict = VERDICTS.some(v => b.outcome.toUpperCase().includes(v));
      // "takes the held verdict recorded against it" is determinate by reference,
      // but only if every finding actually carries one. Check, don't assume.
      const byReference = /held verdict recorded against it|verdict recorded against it in this report/i.test(b.outcome)
        && findings.length > 0
        && findings.every(f => /\(held/i.test((f.verdict || '')));
      const defersWithEnumeration = /REF-\d+/.test(b.outcome) &&
        (b.outcome.match(new RegExp(VERDICTS.join('|'), 'gi')) || []).length >= 2;
      const vague = /investigate|review further|to be determined|tbd|unclear/i.test(b.outcome);
      if (vague || (!namesVerdict && !defersWithEnumeration && !byReference)) {
        fail.push(['REFERRAL', `${r.id}: branch "if ${b.cond}" does not reach a named verdict\n        outcome: "${b.outcome.slice(0, 90)}..."`]);
        bad = true;
      }
      if (/REF-\d+/.test(b.outcome) && !defersWithEnumeration && !namesVerdict && !byReference) {
        fail.push(['REFERRAL', `${r.id}: branch "if ${b.cond}" defers to another referral without enumerating a verdict for every combination`]);
        bad = true;
      }
    }
    // Cross-referral consistency. A branch may not assign a verdict to an
    // obligation that another referral in this report also governs, unless it
    // enumerates against that referral's answers. Found by running the
    // resolution test: REF-01 in report-b asserts FAIL on two obligations that
    // REF-03 can resolve NOT APPLICABLE, without enumerating against REF-03.
    for (const b of r.branches) {
      const assigned = [];
      for (const m of b.outcome.matchAll(/((?:F-\d+(?:\s*,\s*|\s+and\s+)?)+)\s*(?:become|becomes|resolve|resolves|takes?)\s+(NOT APPLICABLE|PASS|FAIL|REFERRED)/gi)) {
        for (const id of m[1].match(/F-\d+/g) || []) assigned.push(id.toUpperCase());
      }
      if (!assigned.length) continue;
      for (const fid of assigned) {
        const f = findings.find(x => (x.id || '').trim().toUpperCase() === fid);
        if (!f) continue;
        const governedBy = new Set();
        for (const other of referrals) {
          if (other.id === r.id) continue;
          const govs = other.branches.some(ob => new RegExp(`\\b${(f.obligation || '').trim()}\\b`, 'i').test(ob.outcome))
            || new RegExp(`\\b${other.id}\\b`).test(f.verdict || '');
          if (govs && /OPEN/i.test(other.status || '')) governedBy.add(other.id);
        }
        for (const g of governedBy) {
          if (!new RegExp(`\\b${g}\\b`).test(b.outcome)) {
            fail.push(['REFERRAL', `${r.id}: branch "if ${b.cond}" assigns ${fid} (${(f.obligation || '').trim()}) a verdict, but ${g} also governs it and is OPEN. Enumerate against ${g} or leave it REFERRED.`]);
            bad = true;
          }
        }
      }
    }

    if (!bad) refOK++;
  }
  if (refOK) pass.push(`REFERRAL  ${refOK} referral(s) carry all five fields with bound outcomes`);

  // --- 7: the gate --------------------------------------------------------
  const blocking = referrals.filter(r => r.blocking && /OPEN/i.test(r.status || ''));
  const heldFindings = findings.filter(f => /\(held/i.test(f.verdict || ''));
  if (!blocking.length && heldFindings.length) {
    // Held verdicts with no BLOCKING referral is incoherent: something is being
    // held by nothing. Without this the gate check is skipped in silence, which
    // reads as a pass. A missing check must never look like a passed one.
    fail.push(['GATE', `${heldFindings.length} finding(s) carry a held verdict but no referral is marked BLOCKING; the gate cannot be checked. Mark the blocking referral, per rules.md.`]);
  }
  if (!blocking.length && !heldFindings.length && referrals.some(r => /OPEN/i.test(r.status || ''))) {
    fail.push(['GATE', 'referrals are OPEN but no referral is marked BLOCKING and no verdict is held; state which referral blocks, or state that none does']);
  }
  if (blocking.length) {
    const ids = blocking.map(r => r.id).join(', ');
    const bare = findings.filter(f => {
      const v = (f.verdict || '').trim();
      return /^(PASS|FAIL|NOT APPLICABLE)/.test(v) && !/held/i.test(v);
    });
    for (const f of bare) fail.push(['GATE', `${f.id} (${f.obligation}): bare verdict "${(f.verdict || '').trim()}" while ${ids} is OPEN; write it held, e.g. "FAIL (held — ${blocking[0].id})"`]);
    if (!bare.length) pass.push(`GATE      ${ids} open; every verdict written as held`);

    if (!/AWAITING HUMAN DETERMINATION/.test(src)) fail.push(['GATE', `${ids} is OPEN but the report does not state AWAITING HUMAN DETERMINATION`]);
  }

  // --- no legal conclusions -----------------------------------------------
  // A report is required to SAY it draws no conclusion, so the phrase appears
  // in every clean report. Only an unnegated assertion is a failure.
  const NEGATED = /\b(nothing|no conclusion|not|never|neither|cannot|belongs to a tribunal|is not drawn|does not)\b/i;
  const ASSERTS = /\b(is in violation of|has violated|violates \u00a7|is non-compliant with)\b/i;
  for (const line of src.split(/\n/)) {
    // Findings wrap, so test the sentence around the assertion, not the line.
    if (!ASSERTS.test(line)) continue;
    if (NEGATED.test(line)) continue;
    fail.push(['CONCLUSION', `report states a legal conclusion: "${line.trim().slice(0, 90)}..."`]);
  }

  return { fail, pass, expect, findings: findings.length, referrals: referrals.length };
}

// -------------------------------------------------------------------- main

function expectKnown(res) { return res.expect && (res.expect.status === 'pass' || res.expect.status === 'fail'); }

function main() {
  const arg = process.argv[2];
  let reports;
  if (arg) reports = [arg];
  else if (fs.existsSync(RUNS)) reports = fs.readdirSync(RUNS).filter(f => /^report-.*\.md$/.test(f)).map(f => path.join(RUNS, f)).sort();
  else reports = [];

  if (!reports.length) {
    console.log('No reports found. Put reports in runs/ as report-*.md, or pass a path.');
    process.exit(1);
  }

  console.log('LL144 auditor — report verification');
  console.log('='.repeat(70));

  let anyFail = false;
  const summary = [];
  for (const r of reports) {
    console.log(`\n${path.relative(ROOT, r)}`);
    console.log('-'.repeat(70));
    let res;
    try { res = verify(r); }
    catch (e) { console.log(`  ERROR  ${e.message}`); anyFail = true; continue; }

    console.log(`  ${res.findings} findings, ${res.referrals} referrals\n`);
    for (const p of res.pass) console.log(`  ok    ${p}`);
    const actual = res.fail.length ? 'fail' : 'pass';
    if (res.fail.length) {
      console.log('');
      for (const [check, msg] of res.fail) console.log(`  FAIL  [${check}] ${msg}`);
      console.log(`\n  ${res.fail.length} failure(s).`);
    } else {
      console.log('\n  All checks passed.');
    }

    // A report is judged against what it declares, not against pass alone.
    // Several reports here are SUPPOSED to fail: two predate rules, one is
    // deliberately corrupted, one carries a documented defect. What matters is
    // whether each behaved as its own header says it will. A report that passes
    // when the manifest says it should fail is itself a failure — that is what
    // catches a defect quietly edited out to keep a clean board.
    if (!expectKnown(res)) {
      console.log(`\n  NOTE  no expect: line in this report's header; cannot judge against a declaration.`);
      summary.push({ name: path.relative(ROOT, r), actual, expected: '?', ok: false });
      anyFail = true;
    } else if (actual === res.expect.status) {
      console.log(`\n  AS DECLARED  header says expect: ${res.expect.status}${res.expect.why ? ' — ' + res.expect.why : ''}`);
      summary.push({ name: path.relative(ROOT, r), actual, expected: res.expect.status, ok: true });
    } else {
      console.log(`\n  UNEXPECTED   header says expect: ${res.expect.status}, but this report ${actual === 'pass' ? 'passed' : 'failed'}.`);
      if (actual === 'pass') console.log('               A report that passes when it is documented to fail has been edited,\n               or the check that caught it has been weakened.');
      summary.push({ name: path.relative(ROOT, r), actual, expected: res.expect.status, ok: false });
      anyFail = true;
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY — each report against its own declaration\n');
  const w = Math.max(...summary.map(s => s.name.length));
  for (const s of summary) {
    console.log(`  ${s.name.padEnd(w)}  ${s.actual.toUpperCase().padEnd(5)} (expected ${s.expected})  ${s.ok ? 'as declared' : 'UNEXPECTED'}`);
  }
  const okCount = summary.filter(s => s.ok).length;
  console.log('');
  console.log(`  ${okCount} of ${summary.length} reports behaved as documented.`);
  console.log('');
  console.log(anyFail
    ? 'Some reports did not behave as declared. Every failure is printed above.'
    : 'Every report behaved as its header declares. Failures shown above are the\ndocumented ones: two runs predate rules, one is deliberately corrupted, one\ncarries defects the auditor itself found. See TESTING.md.');
  process.exit(anyFail ? 1 : 0);
}

main();
