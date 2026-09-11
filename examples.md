# Examples

Two examples, both real. Nothing below was written for illustration — every block
is output this folder produced against Robert Half Inc. on 2026-09-10, trimmed
for length and not otherwise altered. The full reports and the evidence record
ship in `runs/`.

---

## Example 1 — a failure you can check

The obligation: §20-871(a)(2) requires a summary of the most recent bias audit,
and the distribution date of the tool it applies to, to be publicly available on
the employer's website.

```
id:         F-02
obligation: SUMMARY-PUBLIC
verdict:    FAIL (held — REF-01)
severity:   ACCRUING
provision:  admin-20-871-requirements.md:L24
quote:      as well as the distribution date of the tool to which such audit
            applies has been made publicly available on the website of the
            employer or employment agency prior to the use of such tool.
searched:   site:roberthalf.com "bias audit"  (2026-09-10, 08:21)
            site:roberthalf.com "automated employment decision"  (2026-09-10, 08:23)
            site:roberthalf.com AEDT  (2026-09-10, 08:25)
            site:careers.roberthalf.com "bias audit"  (2026-09-10, 09:18)
            site:careers.roberthalf.com "automated employment decision"  (2026-09-10, 09:20)
            site:careers.roberthalf.com AEDT  (2026-09-10, 09:22)
            [+ six page URLs and two footers, all with times]
observed:   No summary of bias-audit results was located at any of the twelve
            locations above, and no distribution date for any tool. The
            Government Notice page, the only page on either footer whose label
            suggests a regulatory disclosure, is about Service Contract Act wage
            provisions and links to U.S. DOL form WH1313.
finding:    The material §20-871(a)(2) requires to be publicly available was not
            found at the locations searched on 2026-09-10. Absence on a large
            site cannot be proven; this records where the operator looked and
            what was there. Held under REF-01. REF-03 fires on this verdict.
```

**What to notice.**

**This block carries a defect, and it is left here on purpose. Do not copy its
citation.**

The `quote` is verbatim from `reference/admin-20-871-requirements.md` and it does
begin on line 24. But §20-871(a)(2) begins one line earlier, at L23, with "A
summary of the results of the most recent bias audit of such tool" — and
`provisions.md` indexes `SUMMARY-PUBLIC` at L23. The fragment quoted here starts
at the distribution-date clause, which drops the words that create the obligation
the finding is judging.

Two checks in `verify.js` catch this, and they are independent:

- `ANCHOR` — a quote must begin on the line it cites, not merely appear somewhere
  in the file. This block passes `ANCHOR`.
- `INDEX` — the line a finding cites must be the line `provisions.md` resolves
  that obligation to. This block fails `INDEX`.

Run B carries this defect and is not amended. The board is not cleaned by editing
history; see `TESTING.md`. **Write your findings the other way: cite the line
`provisions.md` names, and begin the quote there.**
`runs/report-e-compliant-fixture.md` shows every one of the eleven done
correctly.

The `searched` field names twelve locations with times. A finding of absence
with no search record is not a finding.

The `finding` says the material was not found at the locations searched. It does
not say Robert Half violated the law. That distinction holds throughout.

`FAIL (held — REF-01)` is not a verdict yet. See Example 2.

---

## Example 2 — the auditor refusing to decide

Local Law 144 only applies if the tool is an AEDT, and that turns on §5-300:
whether an employer relies solely on the tool's output, weights it above every
other criterion, or uses it to overrule human conclusions.

That is a fact about how a company runs its process. It is not on any web page.
So the auditor stops:

```
REF-01  scope determination                                        BLOCKING
provision: AEDT-DEF-SUBST  (rcny-5-300-definitions.md:L23)
quote:     i.   to rely solely on a simplified output (score, tag,
           classification, ranking, etc.), with no other factors considered; or
           ii.   to use a simplified output as one of a set of criteria where
           the simplified output is weighted more than any other criterion in
           the set; or iii.   to use a simplified output to overrule conclusions
           derived from other factors including human decision-making.
question:  Does Robert Half rely solely on the output of the matching software
           described at Terms of Use §17.1, weight it above every other
           criterion, or use it to overrule a recruiter's conclusion, when
           deciding which candidates are advanced for New York City positions?
evidence:  Recruiter operating instructions, the internal submittal policy, or
           the applicant-tracking configuration.
once answered, if YES →  The tool is an AEDT. All eleven obligations become live
           and are adjudicated on the findings already gathered.
once answered, if NO  →  Local Law 144 does not apply. Every obligation
           resolves NOT APPLICABLE.
status:    OPEN
```

**What to notice.**

The question names one fact a person can look up. "Is this compliant?" is not a
question; it is the thing being determined.

Both outcomes are committed before the answer arrives. When a human answers, the
verdict follows. Nothing is reopened.

While `REF-01` is `OPEN`, the report's overall state is
`AWAITING HUMAN DETERMINATION`. That is not a pass, and the report says so. Eleven
obligations were checked and recorded; none of them has a live verdict.

The second branch matters as much as the first. An auditor that can only find
problems is a complaint generator. This one names, in advance, the fact that
would clear the employer.

---

## What a full report contains

Eleven obligations, every one reported. Seven Bound Referrals. A verdict table
mapping each obligation to the referrals governing it. A statement of what was
not audited and what was not searched.

The Robert Half report ran to four held FAILs, one held NOT APPLICABLE, and six
REFERRED, with an overall state of `AWAITING HUMAN DETERMINATION`. No passes —
not because passes are not reported, but because this subject published nothing
that satisfied an obligation, and a pass is not something to award for absence.
`runs/report-e-compliant-fixture.md` is the same eleven obligations against a
compliant subject: eleven PASS, each citing the same provisions.

---

## Two runs, and why both ship

**Run A** was given seven documents and no search record — no URLs for the
footers, no per-term counts, no times. It produced findings and added a
Search-record integrity note limiting every absence finding to those seven
documents and nothing wider.

**Run B** was given the full evidence record: both hosts, six site searches with
times, per-term counts, twelve locations. Findings covered the same ground and
went further, and the report added a Bounds section noting that three of five
staffing areas were unsampled and that three search terms had been added
mid-screening.

Both ship because the pair shows the same discipline on a thin record and a full
one. The auditor was more careful with more evidence, not less.
