#!/usr/bin/env node
'use strict';

/*
 * resolve.js — answer a Bound Referral and compute what follows.
 *
 *   node resolve.js runs/report-b-full-record.md REF-01=YES
 *   node resolve.js runs/report-b-full-record.md REF-01=NO
 *   node resolve.js runs/report-b-full-record.md REF-01=YES REF-02=NO
 *
 * No dependencies. No network. No model. No judgement.
 *
 * WHAT THIS IS FOR
 *
 * rules.md claims that a referral's outcomes are committed before the answer
 * arrives, "so a human supplies one input rather than re-opening the
 * judgement." That claim had never been tested. Every published run ends at
 * AWAITING HUMAN DETERMINATION; the second half of the mechanism — the answer
 * arrives, the verdict follows — had never executed.
 *
 * This script executes it, mechanically. It reads the branches exactly as the
 * report wrote them, applies the answer, and prints the resolved verdicts. It
 * does not read the evidence, does not reason about the law, and cannot reach a
 * verdict that the report did not commit to in advance.
 *
 * That is the point. Run this, then ask the auditor the same question in a
 * fresh chat, and compare. If the two agree, the pre-commitment is real and
 * provable. If they diverge, the auditor re-judged rather than applying what it
 * promised — which is a defect in the gate, and worth more published than
 * hidden.
 *
 * WHAT IT REFUSES TO DO
 *
 * If a branch is phrased in a way this script cannot apply without
 * interpreting it, it says so and resolves nothing for that obligation. A
 * resolver that guesses at an ambiguous branch is doing the judging the branch
 * was supposed to have already done.
 */

const fs = require('fs');
const path = require('path');

const VERDICTS = ['PASS', 'FAIL', 'NOT APPLICABLE', 'REFERRED'];

const norm = s => s.replace(/\s+/g, ' ').trim();

// ------------------------------------------------------------------ parsing

function parseFields(body) {
  const out = {};
  let key = null;
  for (const line of body.split('\n')) {
    const m = line.match(/^([a-z][a-z_ ]*?):\s?(.*)$/);
    if (m && !/^\s/.test(line)) { key = m[1].trim(); out[key] = m[2]; }
    else if (key && line.trim()) out[key] += '\n' + line.trim();
  }
  return out;
}

function parse(src) {
  const findings = [], referrals = [];
  for (const m of src.matchAll(/```\n([\s\S]*?)```/g)) {
    const body = m[1];
    if (/^\s*id:\s/m.test(body)) {
      findings.push(parseFields(body));
    } else if (/^REF-\d+/m.test(body)) {
      const r = parseFields(body);
      const head = body.match(/^(REF-\d+)\s+(.*)$/m);
      if (head) { r.id = head[1]; r.label = head[2].replace(/BLOCKING|CONDITIONAL.*/g, '').trim(); }
      r.blocking = /BLOCKING/.test(body);
      r.branches = [];
      for (let chunk of body.split(/^once answered, if /m).slice(1)) {
        chunk = chunk.split(/^status:/m)[0];
        const a = chunk.indexOf('\u2192');
        if (a === -1) continue;
        r.branches.push({ cond: norm(chunk.slice(0, a)), outcome: norm(chunk.slice(a + 1)) });
      }
      referrals.push(r);
    }
  }
  return { findings, referrals };
}

/* Match a supplied answer to one of the branches as written. */
function pickBranch(referral, answer) {
  const a = answer.toUpperCase();
  for (const b of referral.branches) {
    const c = b.cond.toUpperCase();
    if (a === 'YES' && /^YES\b/.test(c)) return b;
    if (a === 'NO' && /^NO\b/.test(c)) return b;
    if (c.includes(a)) return b;
  }
  return null;
}

/* Read a branch outcome into an applicable instruction.
   Four shapes are applicable without interpretation, in this order:
     (a) per-finding — the branch names finding IDs and the verdict each takes
     (b) universal   — one verdict for every obligation
     (c) held        — each finding's own held verdict becomes live
     (d) deferring   — the remaining referrals govern
   Anything else is reported as not mechanically applicable rather than
   guessed at. A resolver that interprets an ambiguous branch is doing the
   judging the branch was supposed to have already done. */
function applyBranch(outcome) {
  const o = outcome.replace(/\s+/g, ' ');

  // (a) per-finding assignments: "F-02, F-03 and F-11 become FAIL"
  const perFinding = {};
  let sawPerFinding = false;
  const re = /((?:F-\d+(?:\s*,\s*|\s+and\s+)?)+)\s*(?:become|becomes|resolve|resolves|takes?)\s+(NOT APPLICABLE|PASS|FAIL|REFERRED)/gi;
  let m;
  while ((m = re.exec(o)) !== null) {
    const verdict = m[2].toUpperCase();
    for (const id of m[1].match(/F-\d+/g) || []) { perFinding[id] = verdict; sawPerFinding = true; }
  }
  if (sawPerFinding) {
    const deferRest = /remaining referrals? govern|referrals? govern the rest|govern the rest/i.test(o);
    return { kind: 'perFinding', map: perFinding, deferRest };
  }

  // (c) held — check before universal, since "all obligations become live" also
  // contains "all"
  if (/held verdict|become live|becomes live|adjudicated on the findings|takes the held/i.test(o)) {
    return { kind: 'held' };
  }

  // (b) universal
  const uni = ['NOT APPLICABLE', 'PASS', 'FAIL', 'REFERRED'].find(v =>
    new RegExp(`(every|all)\\b[^.]{0,60}\\b${v}\\b`, 'i').test(o));
  if (uni) return { kind: 'universal', verdict: uni };

  return { kind: 'unapplicable' };
}

function liveVerdict(f) {
  const v = (f.verdict || '').trim();
  const m = v.match(/^(PASS|FAIL|NOT APPLICABLE|REFERRED)/);
  return m ? m[1] : v;
}

// -------------------------------------------------------------------- main

function main() {
  const [file, ...answers] = process.argv.slice(2);
  if (!file || !answers.length) {
    console.log('usage: node resolve.js <report.md> REF-01=YES [REF-02=NO ...]');
    process.exit(1);
  }

  const src = fs.readFileSync(file, 'utf8');
  const { findings, referrals } = parse(src);

  const given = {};
  for (const a of answers) {
    const m = a.match(/^(REF-\d+)=(.+)$/i);
    if (!m) { console.log(`cannot read answer "${a}" — use the form REF-01=YES`); process.exit(1); }
    given[m[1].toUpperCase()] = m[2].toUpperCase();
  }

  console.log('LL144 auditor — referral resolution');
  console.log('='.repeat(74));
  console.log(`report:  ${path.basename(file)}`);
  console.log(`answers: ${Object.entries(given).map(([k, v]) => `${k}=${v}`).join('  ')}`);
  console.log('');
  console.log('This applies the branches as the report wrote them. It does not read the');
  console.log('evidence and cannot reach a verdict the report did not commit to.');
  console.log('');

  // --- which branches were selected --------------------------------------
  const applied = {};
  for (const [id, ans] of Object.entries(given)) {
    const r = referrals.find(x => x.id === id);
    if (!r) { console.log(`  ${id} is not a referral in this report.`); continue; }
    const b = pickBranch(r, ans);
    if (!b) { console.log(`  ${id}: no branch matches the answer "${ans}".`); continue; }
    applied[id] = { referral: r, branch: b, action: applyBranch(b.outcome, findings) };
    console.log(`  ${id} (${r.label})${r.blocking ? '  [BLOCKING]' : ''}`);
    console.log(`     answered: ${ans}`);
    console.log(`     branch as written: ${b.outcome.slice(0, 160)}${b.outcome.length > 160 ? '…' : ''}`);
    console.log('');
  }

  // --- unanswered referrals ----------------------------------------------
  const open = referrals.filter(r => !given[r.id] && /OPEN/i.test(r.status || ''));
  const blockingOpen = open.filter(r => r.blocking);

  console.log('-'.repeat(74));
  console.log('RESOLVED VERDICTS');
  console.log('-'.repeat(74));
  console.log('');

  const blocking = Object.values(applied).find(a => a.referral.blocking);
  let notes = [];

  const rows = findings.map(f => {
    const ob = (f.obligation || '').trim();
    const id = (f.id || '').trim();
    const held = liveVerdict(f);
    const act = blocking ? blocking.action : null;
    let resolved;

    const otherRefs = () => {
      const refs = ((f.verdict || '').match(/REF-\d+/g) || [])
        .filter(x => !blocking || x !== blocking.referral.id);
      const unanswered = refs.filter(x => !given[x]);
      if (unanswered.length) return `REFERRED (${unanswered.join(', ')})`;
      for (const x of refs) {
        const a = applied[x];
        if (!a) continue;
        if (a.action.kind === 'perFinding' && a.action.map[id]) return a.action.map[id];
        if (a.action.kind === 'universal') return a.action.verdict;
        if (a.action.kind === 'held') return held;
      }
      return refs.length ? 'UNRESOLVED — branch not mechanically applicable' : held;
    };

    if (blockingOpen.length) {
      resolved = `REFERRED (${blockingOpen.map(r => r.id).join(', ')} still open)`;
    } else if (!act) {
      resolved = held;
    } else if (act.kind === 'perFinding') {
      if (act.map[id]) resolved = act.map[id];
      else if (act.deferRest) resolved = otherRefs();
      else { resolved = 'UNRESOLVED — branch names no outcome for this finding'; notes.push(`${ob} (${id}): ${blocking.referral.id}'s branch names outcomes for other findings but not this one.`); }
    } else if (act.kind === 'universal') {
      resolved = act.verdict;
    } else if (act.kind === 'held') {
      resolved = held === 'REFERRED' ? otherRefs() : held;
    } else {
      resolved = 'UNRESOLVED — branch not mechanically applicable';
      notes.push(`${ob}: ${blocking.referral.id}'s branch could not be applied without interpreting it.`);
    }

    return { ob, held: (f.verdict || '').trim(), sev: (f.severity || '').trim(), resolved };
  });

  const w = Math.max(...rows.map(r => r.ob.length), 12);
  console.log(`  ${'OBLIGATION'.padEnd(w)}  ${'AS WRITTEN'.padEnd(26)}  RESOLVED`);
  console.log(`  ${'-'.repeat(w)}  ${'-'.repeat(26)}  ${'-'.repeat(24)}`);
  for (const r of rows) {
    console.log(`  ${r.ob.padEnd(w)}  ${r.held.slice(0, 26).padEnd(26)}  ${r.resolved}`);
  }

  // --- tallies ------------------------------------------------------------
  const tally = {};
  for (const r of rows) {
    const k = r.resolved.split(' (')[0];
    tally[k] = (tally[k] || 0) + 1;
  }
  console.log('');
  console.log('  ' + Object.entries(tally).map(([k, v]) => `${v} ${k}`).join(' · '));

  // --- severity on resolved FAILs ----------------------------------------
  const fails = rows.filter(r => r.resolved.startsWith('FAIL'));
  if (fails.length) {
    console.log('');
    console.log('  Severity as recorded in the report. verify.js is what checks these');
    console.log('  against the rules.md mapping, which is read off §20-872:');
    for (const f of fails) console.log(`    ${f.ob.padEnd(w)}  ${f.sev || '(none recorded)'}`);
  }

  if (notes.length) {
    console.log('');
    for (const n of new Set(notes)) console.log(`  NOTE  ${n}`);
  }

  console.log('');
  console.log('='.repeat(74));
  if (blockingOpen.length) {
    console.log(`Nothing resolves: ${blockingOpen.map(r => r.id).join(', ')} is blocking and unanswered.`);
  } else {
    console.log('Resolution complete. Every verdict above was committed in the report');
    console.log('before the answer was supplied. To check that, read the branch text');
    console.log('printed at the top against the resolved column.');
  }
}

main();
