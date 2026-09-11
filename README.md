# LL144 Auditor

**An auditor for New York City Local Law 144, the AI hiring law.**

Drop this folder into a Claude project. It checks an employer’s public-facing Local Law 144 disclosures against the law and DCWP rules, and reports what it found, where it looked, and on what date. Every finding cites a provision that ships verbatim in `reference/`.

It audits **from the outside,** using only publicly available evidence. Where the law allows something that cannot be verified from the public record, the auditor does not guess. It refers the question for human determination.


---

## Read this before you run it

**On a real employer, this auditor returns no verdict. That is the result, not a
limitation.**

Whether Local Law 144 applies at all turns on `AEDT-DEF-SUBST` — the three prongs
of "substantially assist or replace discretionary decision making." Each one asks
how an employer weights a tool's output inside its own hiring process. That is a
fact about deployment, not about software, and nobody outside the company can
observe it. Any auditor that hands you a confident verdict off a public record
has guessed at it.

This one refuses to. It opens `REF-01`, commits both answers in advance, and
holds every obligation behind it. The report reads `AWAITING HUMAN
DETERMINATION`, and one human answer resolves it:

```
node resolve.js runs/report-b-full-record.md REF-01=YES
node resolve.js runs/report-b-full-record.md REF-01=NO
```

Both outcomes were written before the answer arrived. See **[METHOD.md](METHOD.md)**.

`runs/report-e-compliant-fixture.md` shows the pass path end to end, against a
constructed compliant subject — no cooperating real employer was available, and
a fixture is the honest way to demonstrate a clean run rather than manufacture
one.

---

## Why it matters

§20-872 sets a civil penalty of up to $500 for a first violation and $500–$1,500
for each subsequent one. Two provisions turn that into real money: **§20-872(b)**
makes *each day* of non-compliant use a separate violation, and **§20-872(c)**
makes a failure of notice a separate violation from the use conditions.

The law covers AEDT screening for employment or promotion within New York City. Its notice requirements apply to covered candidates and employees who reside in the city.

---

## Use it

Create a Claude project and add these four:

```
identity.md
rules.md
examples.md
reference/
```

Those are the auditor. Everything else in this repo — `runs/`, `TESTING.md`,
`METHOD.md`, `verify.js`, `resolve.js` — is evidence for a reader and should stay
out of the project, both to keep the context budget for the standard and so the
model has no completed report to imitate.

Set the project instructions to exactly this:

> You are the auditor defined in identity.md. Follow rules.md exactly, in the
> order it specifies. Every finding cites a provision ID from
> reference/provisions.md and quotes the provision text verbatim from the
> reference/ file it names. If rules.md tells you to stop, stop.

Then:

```
Audit <employer> against Local Law 144.
```

Give it an employer that hires into New York. You do not need their permission.

You get a finding per obligation, each citing a provision ID that resolves to a
file and line in `reference/`, each recording what was searched, where, and on
what date. Verdicts are held while `REF-01` is open — see above.

---

## Verify it

```
node verify.js
```

No install, no network, no dependencies. It reads every report in `runs/` and
checks that quotes are verbatim substrings of the reference file they cite, that
cited line numbers land inside the file on a non-empty line, that **every quote
begins on the line it cites** rather than merely occurring somewhere in the file,
that **every finding cites the line `reference/provisions.md` names for its
obligation**, that every obligation is reported exactly once, that severity
matches the mapping table it reads out of `rules.md` at run time, that a
conditional referral fires when its condition is met, that referrals carry all
five fields with bound outcomes, and that no bare verdict appears while a
blocking referral is open.

Run B verifies 18 quotes. Run E, the fixture, verifies 13 and anchors all 13 to
their cited line.

**Every report declares in its own header whether it should pass or fail, and
the verifier judges it against that declaration**, not against passing alone:

```
runs/report-a-thin-record.md        FAIL:18 (expected fail:18)  as declared
runs/report-b-full-record.md        FAIL:11 (expected fail:11)  as declared
runs/report-c-contaminated.md       FAIL:18 (expected fail:18)  as declared
runs/report-d-tampered.md           FAIL:16 (expected fail:16)  as declared
runs/report-e-compliant-fixture.md  PASS    (expected pass)     as declared
runs/report-f-accenture.md PASS (expected pass) as declared

6 of 6 reports behaved as documented.
```

A declaration carries a **count**, not just a direction. `expect: fail (11)` means
eleven known defects, and the board goes red if it finds ten or twelve. Without
the count, a report documented to fail absorbs any number of new ones — which it
did, until submission day. See `TESTING.md`.

Four of six fail, on purpose. Two predate rules added after they ran, one is a
deliberately corrupted copy carrying four planted defects, and one carries
defects the auditor itself found and refused to edit out — see `TESTING.md`.
Every failure prints in full above the summary.

**A report that behaves differently from its header is itself a failure**,
whichever direction it moves. That is the check that catches a defect quietly
edited out to keep a clean board. A verifier that passes everything is not
checking anything.

Two checks were added on submission day. `ANCHOR`, after a finding was found to
pass while citing a line its quote did not appear on — it immediately found five
citation defects in Run B. `INDEX`, after an outside reviewer found that four
obligations cited a line `provisions.md` did not name for them, in every report,
with the quote then dropping the words that create the obligation. Both sets are
still on the board in the four real runs. `TESTING.md` says why, and what else
that review broke.

---

## Resolve a referral

```
node resolve.js runs/report-b-full-record.md REF-01=YES
node resolve.js runs/report-b-full-record.md REF-01=NO
```

`rules.md` claims a referral's outcomes are committed before the answer arrives,
so a human supplies one input rather than re-opening the judgement. This is the
command that tests the claim.

It reads the branches exactly as the report wrote them, applies the answer, and
prints the resolved verdict for every obligation. No model, no network, no access
to the evidence. It cannot reach a verdict the report did not commit to in
advance — and where a branch cannot be applied without interpreting it, it says
so rather than guessing.

Same report, two answers, two determinate outcomes: YES gives four FAIL, one NOT
APPLICABLE and six still governed by their own referrals; NO gives eleven NOT
APPLICABLE.

---

## What it audits, and what it refuses to

Four obligations, all publicly checkable. Each is checked as several separate
provisions, eleven in total — the full list is the "Audited obligations" table in
`reference/provisions.md`, and every report reports all eleven:

| | Obligation | Provision |
| --- | --- | --- |
| 1 | Bias-audit summary published on the employment section, containing every element the rule enumerates | §20-871(a)(2), §5-303 |
| 2 | Distribution date of the tool the audit applies to | §20-871(a)(2), §5-303(a)(2) |
| 3 | Candidate notice of AEDT use and of the qualifications assessed | §20-871(b)(1)–(2), §5-304(a)–(c) |
| 4 | Data retention policy, data types and sources, written-request instructions | §20-871(b)(3), §5-304(d) |

**It does not perform a bias audit.** §5-301 needs applicant-level demographic
data that is not public. §5-301 and §5-302 ship in `reference/` anyway, so you can
open them and see what was declined.

**It does not judge an impact ratio.** The law requires ratios be calculated and
published; it sets no threshold. A low ratio is not a violation of this law.

**It never concludes anyone broke the law.** It reports what it observed and
where. The conclusion is a tribunal's.

**It does not decide whether the law applies.** See the top of this file.

---

## The standard is in `reference/`

Not a summary. Not a link. Both instruments, verbatim.

| File | What |
| --- | --- |
| `admin-20-870` … `20-874` | The statute — Local Law 144 of 2021, Admin Code Subchapter 25 |
| `rcny-5-300` … `5-304` | The DCWP Final Rule, effective 2023-05-06 |
| `provisions.md` | The index — every citable ID, resolved to file and line |

Each file carries its source URL, retrieval date, and a note that the text is
verbatim with line breaks frozen. Findings cite line numbers, so the files must
not be reflowed.

Both instruments are needed: the statute creates the obligations, the rule defines
the terms they turn on. Neither stands alone — which is also why secondhand
accounts of this law disagree with each other.

---

## The rest of the folder

| | |
| --- | --- |
| `identity.md` | Who the auditor is, what it enforces, what it refuses |
| `rules.md` | The passes, the finding format, severity, the gate |
| `examples.md` | Worked examples, with what to notice in each |
| `METHOD.md` | Bound Referrals — the mechanism, in full |
| `TESTING.md` | Six runs, what broke, and every gap found in the verifier so far |
| `runs/` | Six reports, the evidence records, the answer key, the screening log |
| `verify.js` | The checker |
| `resolve.js` | Answers a referral and computes what follows |

---

## Scope, honestly

Local Law 144 only. Not Title 8, not EEOC guidance, not the Illinois or Colorado
AI hiring statutes, not the EU AI Act.

Not legal advice. Not a conformity assessment. Not a bias audit. Not a
certification. This is a documented comparison of what an employer has published
against what a published law requires them to publish, on a stated date, from
public sources only.

A clean report means the four obligations were checked and found satisfied on that
date. It does not mean an employer is compliant with Local Law 144, and it never
means their hiring is fair.
