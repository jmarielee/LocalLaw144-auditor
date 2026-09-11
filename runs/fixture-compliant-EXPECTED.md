# Expected result — compliant fixture

**Written before the fixture was audited.** This is the answer key. The point of
recording it first is that a fixture graded after the fact grades nothing: if the
expectation is written once the report is in hand, any result looks like the
expected one.

Fixture: `fixture-compliant-evidence.md` — Meridian Talent Partners LLC, a
synthetic employer that does not exist, built to comply.

---

## Expected overall state

`AWAITING HUMAN DETERMINATION`, with `REF-01` open.

**This is expected even though the fixture complies**, and it is the point worth
understanding. Whether MeridianMatch is an AEDT turns on the §5-300 prongs —
whether its output is relied on solely, weighted above every other criterion, or
used to overrule human conclusions. That is a fact about how Meridian runs its
process. Publishing a bias audit does not establish it; an employer can publish
one out of caution without the law applying.

So the scope referral opens here exactly as it does against a non-complier. What
changes is everything beneath it.

## Expected obligation verdicts

All eleven held under `REF-01`, resolving on `REF-01 = YES`:

| Obligation | Expected | Why |
| --- | --- | --- |
| `AUDIT-CURRENCY` | PASS | Audit dated 2026-04-15; postings state use from 2026-08-28 onward, inside one year |
| `SUMMARY-PUBLIC` | PASS | Summary and distribution date both on the public site, no sign-in |
| `SUMMARY-LOCATION` | PASS | On `/careers`, linked from the footer of every page under it |
| `SUMMARY-CONTENT` | PASS | All seven §5-303(a)(1) elements plus the §5-303(a)(2) distribution date |
| `SUMMARY-LINK` | NOT APPLICABLE | Content is on the page itself; the §5-303(b) permission is unused |
| `NOTICE-USE` | PASS | Notice in the posting under §5-304(b)(2), naming the tool and the assessment |
| `NOTICE-QUALS` | PASS | Qualifications and characteristics the tool assesses are enumerated |
| `NOTICE-ALT` | PASS | Instructions for an alternative process and accommodation, with two channels |
| `NOTICE-METHOD` | PASS | Method (2), job posting, satisfied and observable |
| `DATA-WEBPOST` | PASS | Retention policy, data types, sources and written-request instructions all on the employment section |
| `DATA-DISCLOSURE` | PASS | Website-disclosure limb satisfied, so the written-request limb is not reached |

**Nine PASS, one NOT APPLICABLE, one PASS on the alternative limb. Zero FAIL.**

## Expected referrals

**`REF-01` — scope. Open.** As above.

**`REF-03` — must NOT fire.** Its condition is `SUMMARY-PUBLIC = FAIL`, and
`SUMMARY-PUBLIC` passes. A conditional referral that fires when its condition is
not met is as much a defect as one that fails to fire when it is. The three real
runs test the firing case; this fixture is the only test of the dormant case.

**`REF-06` — notice timing. Should NOT be needed.** Against Robert Half, timing
was unobservable and became a referral. Here each posting states its own posting
date and the date use begins, and the interval is ten business days, so timing is
determinable from the page. If the auditor opens a timing referral anyway, it is
failing to read evidence that is present.

**No referral on `DATA-DISCLOSURE`.** §20-871(b)(3) applies only *if not
disclosed on the website*. It is disclosed, so the written-request limb is never
reached and `REF-05` should not appear.

## What a wrong result would mean

| If the auditor... | The defect is |
| --- | --- |
| Returns any FAIL | It cannot recognise compliance — the PASS path is broken |
| Resolves `REF-01` because a summary exists | The scope gate leaks; publication is being read as a §5-300 determination |
| Fires `REF-03` | Conditional referrals fire regardless of their condition |
| Opens a timing referral | It is not reading dates present on the page |
| Judges the impact ratios | It is enforcing a threshold the law does not set |
| Reports fewer than eleven obligations | Coverage is incomplete |

## What this fixture does not test

It contains no partial compliance — nothing is present-but-deficient. A summary
missing two of seven elements would test `SUMMARY-CONTENT` element by element,
and that case is untested here.

It is synthetic, so it proves the auditor can pass a compliant artifact. It does
not prove any real employer's artifact would pass.

---

# Addendum — result, recorded after the run

**Nothing above this line was changed after the audit was run.** The predictions
stand as written, including the two the auditor did not match. Editing a
prediction to fit a result is how a test becomes a demonstration.

Report: `report-e-compliant-fixture.md`, run 2026-09-11 in a fresh chat with the
fixture attached and nothing else.

## What matched

Eleven obligations reported, every one held under `REF-01`, zero FAIL. The four
things this fixture existed to test all held:

- **`REF-01` stayed open despite full compliance.** Publishing a bias audit did
  not leak into a scope determination. The auditor recorded that the transparency
  page describes the tool as ranking candidates, noted that ranking is a
  simplified output under `AEDT-DEF-OUTPUT`, and then said explicitly that this
  is not the question the prongs ask.
- **`REF-03` stayed dormant**, with its reasoning stated rather than left as
  silence: the firing condition is `SUMMARY-PUBLIC = FAIL` and the held verdict
  is PASS, so there is nothing to refer.
- **No referral on `DATA-DISCLOSURE`.** The auditor read the conditional
  structure of §20-871(b)(3) correctly — the on-request duty is conditioned on
  the categories not being disclosed on the website, and it cited the line where
  that condition sits.
- **The impact ratios were not evaluated.** Stated twice, once in the finding and
  once in a note beneath it.

## Divergence 1 — the auditor was right and the prediction was wrong

**Predicted:** no timing referral. The postings state their own posting dates and
their first-use dates, ten business days apart, so timing appeared determinable
from the page.

**Result:** `REF-02` opened on timing. The auditor's reason:

> The postings state their own posting dates and assert a first-use date ten
> business days later. That is the employer's account of its own conduct, not an
> observable fact about it, and it does not close `REF-02`. A stated intention not
> to use a tool before a date is not a record of not having used it.

That is correct and the prediction was not. The fixture was written to comply,
and the prediction then treated the fixture's own assertion of compliance as
evidence of it — the exact credulity this auditor exists to refuse. A page
promising not to use a tool before a date is a promise; the §20-871(b)(1) duty is
about what was done.

The prediction has not been amended. The auditor beat the answer key here, and
that is worth more on the record than a match would have been.

## Divergence 2 — arguable, and exposed rather than buried

**Predicted:** `SUMMARY-LINK` = NOT APPLICABLE, on the reasoning that the content
sits on the page itself so the §5-303(b) hyperlink permission is unused.

**Result:** PASS.

The prediction was inconsistent with the fixture. The summary is reached from a
footer link, so §5-303(b) is engaged, and the auditor was right to reach it.

The PASS itself is arguable and the auditor said so. §5-303(b) requires the link
be "clearly identified as a link to results of the bias audit." The label is
"NYC AEDT Transparency", which does not contain the words "bias audit". The
auditor quoted the exact label, noted what it does and does not say, reached PASS
on the ground that it names the statutory subject matter rather than a generic
legal heading, and wrote:

> Recorded here in full because the label's exact wording, not this auditor's
> reading of it, is what a reviewer will want to check.

A stricter reading of §5-303(b) would make this a referral rather than a PASS.
The finding is constructed so that a reviewer taking the stricter reading has
everything needed to overturn it without re-doing the work. That is the intended
behaviour on a judgement call: reach a verdict, and expose the hinge.

## What this run does and does not establish

**Does:** the PASS path executes. Nine obligations passed. The scope gate holds
under compliance as well as under absence. The conditional referral is correctly
dormant when its condition is unmet — a case the three real runs could not test,
since `SUMMARY-PUBLIC` failed in all of them.

**Does not:** prove any real employer's artifact would pass. The fixture is
synthetic and was built to comply. It also contains no partial compliance:
nothing is present-but-deficient, so `SUMMARY-CONTENT` was never exercised
element by element against a summary missing some of the seven.
