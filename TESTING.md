# What was tested, and what broke

Five runs, all five published in `runs/`. Three against a real employer, one
against a synthetic fixture built to comply, one deliberately corrupted.

| Run | Conditions | Result |
| --- | --- | --- |
| A | Thin evidence: pages pasted in, no search record, no URLs, no times | Findings produced; the auditor wrote its own Search-record integrity note limiting every absence finding to the seven documents supplied |
| B | Full evidence record, fresh chat, nothing preceding it | Passes all seven verifier checks |
| C | Full evidence record, but run in the chat containing Run A's report | **Discounted.** Not a clean test of the folder; published labelled |
| D | Not a run. A copy of B with four defects planted in it | Fails on exactly those four, and nothing else |
| E | Synthetic employer built to comply, fresh chat | Nine PASS, one NOT APPLICABLE, one PASS, zero FAIL; passes verification |

**No fabrications.** Every checkable detail in Run A — URLs, document dates,
quoted page text, the location string on the corporate requisition — was checked
against source by hand. All of it traced to material actually supplied or
actually on the page. Nothing was invented.

**Four things broke, and each became a rule.** None of them was foreseen at the
desk; every one came from running the thing.

1. **A combined-term search returned a false zero.** `automated, bias, New York,
   AEDT` entered as one find-on-page string returned 0/0. Browser find has no OR
   operator. → one term per search, count recorded per term.

2. **A quote was attributed to the wrong document.** A passage about proprietary
   AI matching software was first logged against the Privacy Notice; it is in the
   Terms of Use, and the Privacy Notice does not contain the phrase at all. →
   never cite a quote to a document you have not confirmed contains it.

3. **A fixed term set missed the most significant sentence.** On the Terms of Use
   the term list returned one hit and four zeros. The sentence that matters most
   for scope — "Your Candidate Information may be viewed by Customers on the
   Sites according to Robert Half's matching algorithm" — contains none of the
   terms, and was found by reading. → a term set narrows a page for reading; it
   does not replace reading it.

4. **The auditor found a gap in its own rules.** On the clean run it hit an
   obligation determined by two facts held by two different referrals, which the
   branch format could not express. It enumerated the verdict under every
   combination and flagged the construction for review rather than breaking the
   rule silently. → the dependent-branch rule in `rules.md`.

---

## The PASS path, and the answer key the auditor beat

The three real runs produced no PASS on any obligation — the employer audited had
published nothing. An auditor whose PASS path has never executed is an auditor
whose PASS path is untested, so `runs/fixture-compliant-evidence.md` is a
synthetic employer, Meridian Talent Partners LLC, built to comply. It does not
exist, and the file says so three times.

The expected result was written **before** the audit ran, in
`fixture-compliant-EXPECTED.md`. A fixture graded after the fact grades nothing.

The auditor produced nine PASS, one NOT APPLICABLE, one PASS, zero FAIL, and the
four things the fixture existed to test all held: the scope referral stayed open
despite full compliance, the conditional referral stayed correctly dormant, no
referral opened on the data-disclosure limb that was satisfied, and the impact
ratios were not evaluated.

**It also beat the prediction, and the prediction was not amended.** The answer
key said no timing referral would open, because the postings state their own
posting dates and first-use dates ten business days apart. The auditor opened one
anyway:

> The postings state their own posting dates and assert a first-use date ten
> business days later. That is the employer's account of its own conduct, not an
> observable fact about it... A stated intention not to use a tool before a date
> is not a record of not having used it.

That is correct and the prediction was not. The fixture was written to comply,
and the prediction then treated the fixture's own assertion of compliance as
evidence of it — the exact credulity this auditor exists to refuse. The
divergence is recorded in an addendum beneath the original predictions, which
stand as written.

---

## Planted defects

`runs/report-d-tampered.md` is a copy of Run B with four defects planted in it on
purpose, each one a different class:

| | Defect | Check that catches it |
| --- | --- | --- |
| 1 | One word changed inside a quotation of the statute — "publicly available" became "publicly accessible" | `QUOTE` |
| 2 | A severity flipped from `ACCRUING` to `DISCRETE` | `SEVERITY` |
| 3 | A referral's entire `quote:` field deleted | `REFERRAL` |
| 4 | A whole obligation's finding block removed | `COVERAGE` |

The verifier reports exactly those four and nothing else. The other fifteen
quotes, six referrals and three severities in the same file still verify clean,
so the file is not simply failing wholesale because something in it is wrong.

The four defects are listed at the top of the file, with instructions to diff it
against `report-b-full-record.md`. Anyone can plant them again.

---

## Three bugs in the verifier, all found by running it

**Two on its first run.** A branch condition that wrapped across lines and could
not be parsed, and a `CONCLUSION` check that flagged the sentence *disclaiming* a
legal conclusion. The second is a false positive on a correct refusal, which for
a compliance tool is the worst failure class there is.

**One after the compliant fixture.** The gate check only ran when it found a
referral marked `BLOCKING`. Run E's scope referral omitted the marker, so the
check was skipped — and the report printed as nearly clean with no `GATE` line at
all. A missing check looked exactly like a passed one.

That third bug produced a rule: `rules.md` now requires the `BLOCKING` marker on
any referral that blocks, and the verifier fails loudly when a report carries
held verdicts but marks no referral blocking. All three bugs were false
negatives — the verifier going quiet rather than shouting wrongly. Both of the
first two, and this one, are fixed.

---

## The claim that had never been tested

`rules.md` says a referral's outcomes are committed before the answer arrives,
"so a human supplies one input rather than re-opening the judgement." Every
published run ends at `AWAITING HUMAN DETERMINATION`. The second half of the
mechanism — the answer arrives, the verdict follows — had never executed.

`resolve.js` executes it. It reads the branches as written, applies an answer,
and prints the resolved verdicts, with no model, no network and no access to the
evidence.

On Run B: `REF-01=YES` resolves to four FAIL, one NOT APPLICABLE, and six
obligations still governed by their own referrals. `REF-01=NO` resolves all
eleven to NOT APPLICABLE. Both outcomes were fixed in the report's text before
either answer existed.

Writing the resolver surfaced one more thing worth recording: the report's
branch was *more* determinate than the first version of the script assumed. It
did not say "everything fails" — it named F-02, F-03, F-04 and F-11 as FAIL, F-05
as NOT APPLICABLE, and deferred the remainder to the referrals governing them.
The first parser flattened that into eleven FAILs. That was a bug in the
resolver, not in the report.

---

