# Local Law 144 audit report — Robert Half Inc.
## Resolution pass: REF-01 answered

**Overall state: AWAITING HUMAN DETERMINATION**

That is not a pass. `REF-01` has been answered and is closed. Six Bound Referrals
remain open, and under `rules.md` — "The gate" — the report's overall state is
`AWAITING HUMAN DETERMINATION` while any referral is `OPEN`. No overall verdict
is issued here and none is available.

| | |
| --- | --- |
| Subject | Robert Half Inc. |
| Standard | NYC Admin Code §§ 20-870 to 20-874; 6 RCNY §§ 5-300 to 5-304 (eff. 2023-05-06) |
| Report date | 2026-09-11 |
| Evidence date | 2026-09-10, all times Eastern — unchanged |
| Sources | Public only. No credentials used, no material requested from the subject. |
| Obligations reported | 11 of 11 |
| Referrals | 7 written; 1 answered (`REF-01`); 6 open |
| Live verdicts now reachable | 3 of 11 |

No new searching was performed for this pass. The evidence record is the one
dated 2026-09-10 and is carried forward unchanged, including its stated limits:
pages requiring sign-in were not searched, and postings in staffing areas other
than Administrative & Customer Support and Technology were not sampled.

---

## REF-01 — ANSWERED

```
REF-01  scope determination                                        BLOCKING
provision: AEDT-DEF-SUBST  (rcny-5-300-definitions.md:L23)
quote:     i.   to rely solely on a simplified output (score, tag,
           classification, ranking, etc.), with no other factors considered; or
           ii.   to use a simplified output as one of a set of criteria where
           the simplified output is weighted more than any other criterion in
           the set; or
           iii.   to use a simplified output to overrule conclusions derived
           from other factors including human decision-making.
question:  Does Robert Half rely solely on the output of the matching software
           described at Terms of Use § 17.1, weight that output above every
           other criterion, or use it to overrule conclusions reached by other
           means, when screening candidates for positions in New York City?
answer:    YES — the employer relies on the matching output above every other
           criterion. Prong (ii) of AEDT-DEF-SUBST.
answered by: the operator, 2026-09-11.
status:    ANSWERED — YES. Closed.
```

**How this answer is held.** It was supplied by a human, not derived by this
auditor, and it is recorded as the answer of record without independent
verification — the evidence that would verify it (screening policy, recruiter
instructions, the internal specification of the matching tool, a vendor
contract) is not public, which is why the question was referred rather than
decided. If the answer is later withdrawn or corrected, every live verdict below
returns to `REFERRED` and the `NO` branch — all eleven obligations
`NOT APPLICABLE` — governs instead.

**What it unblocks.** Scope is settled: the tool falls within the AEDT
definition, so the obligations are live rather than held. Geography was already
checked and recorded at Pass 0 — E-1 is a placement listing located in New York,
NY, and E-3 a corporate requisition located NY MIDTOWN NEW YORK — so
`AEDT-DEF-EMPDEC` is satisfied on the record as it stands.

---

## A defect in REF-01's YES branch, and how it is resolved

`REF-01`'s YES branch as written says: *"F-02, F-03, F-04 and F-11 become FAIL,
F-05 becomes NOT APPLICABLE, and the remaining referrals govern the rest."*

Two of those are wrong, and the report cannot be resolved by following that
sentence.

`F-02` (`SUMMARY-PUBLIC`) and `F-04` (`SUMMARY-CONTENT`) are also governed by
`REF-03`, which is `OPEN`. `REF-03`'s second branch resolves both obligations
`NOT APPLICABLE` if the tool was last used for an employment decision more than
six months ago, because the §5-303(c) duty would have expired. `rules.md` is
explicit on what an open referral does to the obligations it governs:

> A branch is a consequence, not a verdict. Writing a referral resolves nothing.
> While it is `OPEN`, the obligations it governs are `REFERRED`.

That is a rule. `REF-01`'s branch text is a sentence in a referral, and where the
two conflict the rule governs. `REF-01`'s branch also fails the enumeration
constraint in `rules.md` — a branch that defers to another referral must name the
verdict under every combination, and this one named `FAIL` under both of
`REF-03`'s answers without saying so or checking. It was written over-broadly.

So `SUMMARY-PUBLIC` and `SUMMARY-CONTENT` stay `REFERRED`. `REF-03` is the
mechanism that keeps an apparent absence from becoming an automatic finding, and
answering `REF-01` does not consume it.

`F-03`, `F-05` and `F-11` are governed by no other open referral and do become
live.

---

## Findings whose verdict line changes

### F-03 — now live

```
id:         F-03
obligation: SUMMARY-LOCATION
verdict:    FAIL
severity:   ACCRUING
provision:  rcny-5-303-published-results.md:L18
quote:      (a)   Before the use of an AEDT, an employer or employment agency in
            the city must make the following publicly available on the
            employment section of their website in a clear and conspicuous
            manner:
searched:   Employment section, roberthalf.com — Browse Jobs and listing pages
            E-1, E-2  (2026-09-10, 08:20–09:20)
            Employment section, careers.roberthalf.com — Job Search and
            requisition E-3  (2026-09-10, 08:20–09:20)
            Job-seeker footer, roberthalf.com  (2026-09-10, 08:26)
            Corporate careers footer, careers.roberthalf.com  (2026-09-10, 08:25)
observed:   Neither employment section carried a bias-audit summary. The
            roberthalf.com legal row lists Fraud Alert, Government Notice,
            Privacy Notice, Terms of Use and a do-not-sell link; the corporate
            careers Legal column lists terms of use, privacy policy, fraud alert
            and government notice. No entry on either names bias-audit results.
finding:    Nothing satisfying §5-303(a) was found on the employment section of
            either host on 2026-09-10, so the clear-and-conspicuous standard was
            not reached — there was no posting to assess against it. Verdict now
            live: REF-01 is answered and no other open referral governs this
            obligation. Severity ACCRUING per §20-872(b) via §20-871(a)(2).
```

### F-05 — now live

```
id:         F-05
obligation: SUMMARY-LINK
verdict:    NOT APPLICABLE
severity:   —
provision:  rcny-5-303-published-results.md:L29
quote:      active hyperlink to a website containing the required summary of
            results and distribution date, provided that the link is clearly
            identified as a link to results of the bias audit.
searched:   Job-seeker footer, roberthalf.com  (2026-09-10, 08:26)
            Corporate careers footer, careers.roberthalf.com  (2026-09-10, 08:25)
            Government Notice page, reached from both footers  (2026-09-10, 08:20–09:20)
            Listing footers E-1, E-2 — links out to /us/en/terms and
            /us/en/privacy  (2026-09-10, 08:20–09:20)
observed:   No hyperlink on either employment section was identified, by label
            or otherwise, as leading to bias-audit results. The only links
            followed out of the candidate flow were to the Terms of Use and the
            Privacy Notice, both reached and read (E-4, E-5); neither contains a
            summary. The Government Notice link, followed from both footers,
            resolves to Service Contract Act content.
finding:    §5-303(b) is permissive: it is engaged only where an employer meets
            §5-303(a) by hyperlink. The trigger not met is the existence of an
            active hyperlink to a website containing the required summary. This
            is not a finding in Robert Half's favour and does not soften F-02.
```

### F-11 — now live

```
id:         F-11
obligation: DATA-WEBPOST
verdict:    FAIL
severity:   DISCRETE
provision:  rcny-5-304-notice.md:L44
quote:      (1)   Provide information on the employment section of its website
            in a clear and conspicuous manner about its AEDT data retention
            policy, the type of data collected for the AEDT, and the source of
            the data;
                  (2)   Post instructions on the employment section of its
            website in a clear and conspicuous manner for how to make a written
            request for such information, and if a written request is received,
            provide such information within 30 days; and
searched:   https://www.roberthalf.com/us/en/privacy  (2026-09-10, 08:31)
            https://www.roberthalf.com/us/en/terms  (2026-09-10, 08:20–09:20)
            Job-seeker footer, roberthalf.com  (2026-09-10, 08:26)
            Corporate careers footer, careers.roberthalf.com  (2026-09-10, 08:25)
            Employment sections of both hosts, per Pass 1  (2026-09-10)
observed:   Three items were checked separately.
            (i) AEDT data retention policy: § 11 of the Privacy Notice states
            retention criteria for personal information generally — nature and
            timing of the relationship, legal and contractual obligations, and
            legal position based on statutes of limitation, litigation or
            regulatory investigations. It does not identify a retention policy
            for data collected for any tool.
            (ii) Type of data collected for the AEDT and its source: § 1 lists
            candidate data categories and five source types. Neither list is
            tied to a tool. `AEDT` = 0 across the notice.
            (iii) Instructions for making a written request for this
            information: § 15 gives a webform and toll-free number for access,
            deletion and correction requests. No instruction for requesting
            §20-871(b)(3) information was found on either employment section.
            Location: the Privacy Notice is reached from a site-wide legal row
            (E-6) and the corporate Legal column (E-7), not from within either
            employment section.
finding:    §5-304(d)(1) and (2) require these items about the AEDT, on the
            employment section. General candidate-data disclosures that do not
            identify a tool do not supply them. All three items were absent from
            the locations searched on 2026-09-10. Verdict now live. Severity
            DISCRETE per §20-872(c) — admin-20-872-penalties.md:L27–L29:
            "c.   Failure to provide any notice to a candidate or an employee in
            violation of paragraphs 1, 2 or 3 of subdivision b of section
            20-871 shall constitute a separate violation."
```

### F-02 and F-04 — held verdict withdrawn, obligation stays REFERRED

The `FAIL (held — REF-01)` notation on both is withdrawn: `REF-01` is answered
and no longer holds anything. Neither becomes a live `FAIL`, because `REF-03`
governs both and is `OPEN`.

| | F-02 | F-04 |
| --- | --- | --- |
| Obligation | `SUMMARY-PUBLIC` | `SUMMARY-CONTENT` |
| Provision | `admin-20-871-requirements.md:L24` | `rcny-5-303-published-results.md:L21` |
| Live verdict | `REFERRED` (REF-03) | `REFERRED` (REF-03) |
| Severity | — | — |
| If REF-03 is answered *within 6 months* | `FAIL`, ACCRUING | `FAIL`, ACCRUING |
| If REF-03 is answered *more than 6 months ago* | `NOT APPLICABLE` | `NOT APPLICABLE` |

The `observed` and `searched` records at F-02 and F-04 are unchanged and carry
forward: no summary of bias-audit results and no distribution date were found at
the twelve locations searched on 2026-09-10, and every element §5-303(a)(1) and
(a)(2) enumerates is therefore absent.

`REF-03`'s firing condition is unaffected by this pass. It fired on the verdict
reached at F-02 in the 2026-09-10 report, which is where `rules.md` requires a
firing condition to come from, and a fired conditional referral does not
un-fire.

### F-01, F-06, F-07, F-08, F-09, F-10 — unchanged

All six were `REFERRED` before `REF-01` was answered, on referrals that remain
open, and are `REFERRED` after. Answering the scope question changes nothing
about whether a bias audit was conducted (`REF-04`), whether notice went out by
mail or e-mail (`REF-02`), when it went out (`REF-05`), what it said
(`REF-07`), or what a written request would produce (`REF-06`). None of those
facts is public, and none became public today.

One consequence is worth naming at `F-10`. §20-871(b)(3) is conditional — the
written-request duty attaches where the information is not on the website. F-11
is now a live finding that the website limb was not satisfied at the locations
searched, so the written-request limb is squarely engaged. It is still
`REFERRED` at `REF-06`: determining it would require making a written request,
which this audit does not do.

---

## Open referrals — six

Unchanged in text, restated here by what each still governs. None can resolve by
silence or by time. None is answered here.

| Referral | Provision | Governs | Status |
| --- | --- | --- | --- |
| `REF-02` notice delivery | `NOTICE-METHOD` (`rcny-5-304-notice.md:L26`) | `NOTICE-USE`, `NOTICE-QUALS`, `NOTICE-METHOD` | OPEN |
| `REF-03` duration window *(conditional, fired)* | `SUMMARY-DURATION` (`rcny-5-303-published-results.md:L33`) | `SUMMARY-PUBLIC`, `SUMMARY-CONTENT` | OPEN |
| `REF-04` audit currency | `AUDIT-CURRENCY` (`admin-20-871-requirements.md:L21`) | `AUDIT-CURRENCY` | OPEN |
| `REF-05` notice timing | `NOTICE-USE` (`admin-20-871-requirements.md:L31`) | `NOTICE-USE`, `NOTICE-QUALS` | OPEN |
| `REF-06` data disclosure on written request | `DATA-DISCLOSURE` (`admin-20-871-requirements.md:L42`) | `DATA-DISCLOSURE` | OPEN |
| `REF-07` alternative-process instructions | `NOTICE-ALT` (`rcny-5-304-notice.md:L18`) | `NOTICE-ALT` | OPEN |

`REF-03` is the one to answer next if the aim is to close the most obligations
with the fewest answers: it is the only referral whose answer is a single date,
and it decides two obligations.

---

## Verdict table

| Obligation | Verdict | Severity | Governed by |
| --- | --- | --- | --- |
| `AUDIT-CURRENCY` | REFERRED | — | REF-04 |
| `SUMMARY-PUBLIC` | REFERRED | — | REF-03 |
| `SUMMARY-LOCATION` | **FAIL** | ACCRUING | — (live) |
| `SUMMARY-CONTENT` | REFERRED | — | REF-03 |
| `SUMMARY-LINK` | **NOT APPLICABLE** | — | — (live) |
| `NOTICE-USE` | REFERRED | — | REF-02, REF-05 |
| `NOTICE-QUALS` | REFERRED | — | REF-02, REF-05 |
| `NOTICE-ALT` | REFERRED | — | REF-07 |
| `NOTICE-METHOD` | REFERRED | — | REF-02 |
| `DATA-DISCLOSURE` | REFERRED | — | REF-06 |
| `DATA-WEBPOST` | **FAIL** | DISCRETE | — (live) |

**Overall state: AWAITING HUMAN DETERMINATION.**

Six referrals open. No overall verdict — not "compliant with exceptions," not
"largely non-compliant," not a count of failures offered as a score. Eight of the
eleven obligations have no verdict at all, and the three that do cannot be
aggregated into one.

---

## What was not audited

- **No bias audit was performed.** The calculations at §5-301 require
  applicant-level demographic data that is not public. It was not requested, not
  estimated, and not modelled. §5-301 and §5-302 ship in `reference/` so this
  boundary can be checked rather than trusted.
- **No impact ratio was evaluated.** None was found; had one been found, its
  value would not have been assessed. Local Law 144 requires that ratios be
  calculated and published and sets no threshold. §20-874 preserves a
  candidate's civil action and the Commission on Human Rights' Title 8
  authority, which is where a discrimination claim belongs, under different law.
- **The scope answer was not verified.** `REF-01` was answered by the operator,
  not established by this auditor from a public source. See "How this answer is
  held" above.
- **No new searching.** The evidence record is dated 2026-09-10 and was gathered
  by a human operator. This pass adjudicates it; it does not extend it.
- **Locations not searched**, carried forward from the evidence record: pages
  requiring registration or sign-in; postings outside the Administrative &
  Customer Support and Technology staffing areas; anything reachable only from a
  signed-in candidate account.

Nothing in this report states or implies that Robert Half Inc. has violated Local
Law 144 or any other law. It records what was published at named URLs on
2026-09-10, what the cited provisions require to be published, one answer a human
supplied on 2026-09-11, and which questions a person must still answer before the
remaining obligations carry verdicts. It is not legal advice, not a conformity
assessment, not a certification, and not a bias audit. Its author is not the
independent auditor §5-300 defines.
