# LL144 Auditor

**An auditor for New York City Local Law 144, the AI hiring law.**

Drop this folder into a Claude project. It checks whether an employer has
published the four things the law requires to exist in public, and reports what
it observed, where it looked, and on what date — every finding citing a provision
that ships verbatim in `reference/`.

It audits **from the outside**. No evidence pack, no questionnaire, no
cooperation from the audited party. Local Law 144 is a transparency statute, so
compliance *is* publication: the evidence is public because the law says it has
to be.

---

## Why it matters

§20-872 sets a civil penalty of up to $500 for a first violation and $500–$1,500
for each subsequent one. Two provisions turn that into real money: **§20-872(b)**
makes *each day* of non-compliant use a separate violation, and **§20-872(c)**
makes a failure of notice a separate violation from the use conditions.

The law binds any employer or employment agency screening candidates for
positions in the city, or candidates who reside there, wherever the employer sits.

---

## Use it

Create a Claude project, add every file in this folder, and set the project
instructions to exactly this:

> You are the auditor defined in identity.md. Follow rules.md exactly, in the
> order it specifies. Every finding cites a provision ID from
> reference/provisions.md and quotes the provision text verbatim from the
> reference/ file it names. If rules.md tells you to stop, stop.

Then:

```
Audit <employer> against Local Law 144.
```

Give it an employer that hires into New York. You do not need their permission.

You get a verdict per obligation including the passes, every finding citing a
provision ID that resolves to a file and line in `reference/`, every search
recorded with its locations and date, and any open Bound Referrals.

---

## Verify it

```
node verify.js
```

No install, no network, no dependencies. It reads every report in `runs/` and
checks that quotes are verbatim substrings of the provisions they cite, that
cited line numbers resolve, that every obligation is reported exactly once, that
severity recomputes from the mapping in `rules.md`, that conditional referrals
fire when their conditions are met, that referrals carry all five fields with
bound outcomes, and that no bare verdict appears while a blocking referral is open.

On the clean run it verifies 18 quotes as verbatim substrings.

**Five runs ship in `runs/`, and three of them fail verification.** Two fail on
rules they predate; one is a deliberately corrupted copy with four defects
planted in it, listed at the top of the file so anyone can confirm the verifier
catches exactly those four and no others. A verifier that passes everything is
not checking anything.

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

Four obligations, all publicly checkable:

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

**It does not decide whether the law applies.** Whether a tool is an AEDT turns on
§5-300 — how an employer weights the output in its own process. That is not
publicly observable, so it is always a referral, and it blocks everything. See
**[METHOD.md](METHOD.md)**.

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
| `examples.md` | Two real audits, with what to notice in each |
| `METHOD.md` | Bound Referrals — the mechanism, in full |
| `TESTING.md` | Five runs, what broke, and the three bugs in the verifier |
| `runs/` | Five reports, the evidence records, the answer key, the screening log |
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
