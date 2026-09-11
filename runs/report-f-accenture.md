<!--
RUN F — live run against a real subject, 2026-09-11.

Accenture, audited from public sources with live retrieval. Unlike Runs A–C,
this subject publishes a substantive New York disclosure, so this is the first
run in which passes and failures appear in the same report: seven PASS, two
FAIL, two REFERRED, seven Bound Referrals open.

Every quote in this report failed its first verification pass. The reference
files carry 575 non-breaking spaces; quotes rebuilt with ordinary spaces are
byte-different and visually identical. All eighteen were rebuilt from source
bytes. See TESTING.md.

expect: pass
-->
## Local Law 144 compliance audit — Meridian Talent Partners LLC

**Overall state: `AWAITING HUMAN DETERMINATION`**

No obligation in this report carries a live verdict. `REF-01` is `OPEN`, and it blocks everything. Verdicts below are printed as *held* — the verdict that follows once a human answers the scope referral, not a verdict now.

**Provenance of the evidence.** This audit was run against a supplied evidence record (`fixture-compliant-evidence.md`), not against live retrieval. The record declares itself synthetic and the host is `meridiantalent.example`, a reserved non-resolving domain. Every URL, timestamp and observation below is attributed to that record; none was independently retrieved, and none could be. Read every `searched` line as "recorded in the evidence record at that time," not "retrieved by this auditor." The evidence record's own item numbers (F-1 … F-6) are its exhibits; finding IDs below are F-01 … F-11.

---

## Pass 0 — Scope

Geography, observed and recorded: all three sampled postings state a New York, NY location (`AEDT-DEF-EMPDEC`). This does not resolve `REF-01`.

Exclusions, observed and recorded: the tool is described as ranking candidates, not as one of the tools `AEDT-DEF-EXCLUDE` names. No `NOT APPLICABLE` is reachable on that ground.

```
REF-01  scope — substantial assistance or replacement          BLOCKING
provision: AEDT-DEF-SUBST  (rcny-5-300-definitions.md:L23)
quote:     to rely solely on a simplified output (score, tag, classification,
           ranking, etc.), with no other factors considered; or
           ii.   to use a simplified output as one of a set of criteria where the
           simplified output is weighted more than any other criterion in the set; or
           iii.   to use a simplified output to overrule conclusions derived from
           other factors including human decision-making.
question:  In Meridian Talent Partners' own hiring process, does MeridianMatch's
           output meet any one of the three prongs above — sole reliance, weighted
           above every other criterion, or used to overrule conclusions reached by
           other means?
evidence:  The employer's documented screening procedure for New York City roles,
           its recruiter instructions for handling MeridianMatch rankings, or an
           applicant-tracking configuration showing how the ranking gates advancement.
once answered, if YES →  Every obligation takes the held verdict recorded against it
           in this report.
once answered, if NO  →  All eleven obligations resolve NOT APPLICABLE: the tool is
           not an AEDT and the subchapter does not reach it.
status:    OPEN
```

Observed, attached to the referral and not answering it: the transparency page states the tool is used to rank candidates for New York City roles. Ranking is named as a simplified output at `AEDT-DEF-OUTPUT`. That the output is simplified is not the question `REF-01` asks; how it is weighted is, and that is not on the page.

Every referral below is written for the world in which `REF-01` is answered YES. If it is answered NO, `REF-01`'s second branch governs and nothing further is reached.

---

## Pass 1 — Employment section

Located: `https://meridiantalent.example/careers` (evidence record F-1, 2026-09-11 09:10). Both disclosure pages sit beneath it, and its footer carries the link to the transparency page on every page in the section. No referral arises under this pass.

---

## Pass 2 — Published summary and distribution date

```
id:         F-01
obligation: AUDIT-CURRENCY
verdict:    PASS (held — REF-01)
severity:   —
provision:  admin-20-871-requirements.md:L21
quote:      Such tool has been the subject of a bias audit conducted no more
            than one year prior to the use of such tool
searched:   https://meridiantalent.example/careers/aedt-transparency  (2026-09-11, 09:12)
observed:   A published date of the most recent bias audit of 2026-04-15. The three
            sampled postings state first-use dates of 2026-08-28, 2026-09-04 and
            2026-09-09.
finding:    The published audit date is less than one year before each stated use
            date and less than one year before the date of this audit.
```

```
id:         F-02
obligation: SUMMARY-PUBLIC
verdict:    PASS (held — REF-01)
severity:   —
provision:  admin-20-871-requirements.md:L23
quote:      2.   A summary of the results of the most recent bias audit of such tool
            as well as the distribution date of the tool to which such audit applies has
            been made publicly available on the website of the employer or employment
            agency prior to the use of such tool.
searched:   https://meridiantalent.example/careers  (2026-09-11, 09:10)
            https://meridiantalent.example/careers/aedt-transparency  (2026-09-11, 09:12)
observed:   A summary of bias-audit results and a distribution date of 2025-11-03,
            both on a page requiring no sign-in, stated as first posted 2026-04-22.
finding:    Both artefacts §20-871(a)(2) requires to be publicly available are
            publicly available, and the posting date precedes each stated use date.
```

```
id:         F-03
obligation: SUMMARY-LOCATION
verdict:    PASS (held — REF-01)
severity:   —
provision:  rcny-5-303-published-results.md:L18
quote:      Before the use of an AEDT, an employer or employment agency in the
            city must make the following publicly available on the employment section of
            their website in a clear and conspicuous manner:
searched:   https://meridiantalent.example/careers  (2026-09-11, 09:10)
            https://meridiantalent.example/careers/aedt-transparency  (2026-09-11, 09:12)
observed:   The summary sits at a path beneath /careers. It is reached from a footer
            link present on every page under /careers, set in the same type size as
            the other links in its column.
finding:    The summary is on the employment section, and its entry point is present
            site-wide within that section at parity with sibling links.
```

```
id:         F-04
obligation: SUMMARY-CONTENT
verdict:    PASS (held — REF-01)
severity:   —
provision:  rcny-5-303-published-results.md:L21
quote:      The date of the most recent bias audit of the AEDT and a summary of
            the results, which shall include the source and explanation of the
            data used to conduct the bias audit
searched:   https://meridiantalent.example/careers/aedt-transparency  (2026-09-11, 09:12)
observed:   Audit date 2026-04-15. Source and explanation of the data: historical
            data from the employer's own applicant tracking system, date range
            given, demographic categories by self-identification, no test data.
            Unknown-category count 1,947. Applicants or candidates 14,208. Selection
            rates for every listed category. Impact ratios for sex, race/ethnicity
            and combined sex-and-race/ethnicity categories. Distribution date
            2025-11-03.
finding:    Each element enumerated at §5-303(a)(1), and the distribution date at
            §5-303(a)(2), is present on the page.
```

The published ratios were not evaluated and are not evaluated anywhere in this report. §5-303(a)(1) requires that impact ratios be published; it sets no threshold, and `identity.md` forbids commenting on their values.

```
id:         F-05
obligation: SUMMARY-LINK
verdict:    PASS (held — REF-01)
severity:   —
provision:  rcny-5-303-published-results.md:L28
quote:      (b)   The requirements of subdivision (a) of this section may be met with an
            active hyperlink to a website containing the required summary of results and
            distribution date, provided that the link is clearly identified as a link to
            results of the bias audit.
searched:   https://meridiantalent.example/careers  (2026-09-11, 09:10)
observed:   The summary is reached from the /careers footer by a link labelled
            "NYC AEDT Transparency", in the Legal column alongside Terms of Use,
            Privacy Notice, Accessibility and Do Not Sell or Share My Personal
            Information. The label does not contain the words "bias audit"; the
            page it reaches is headed "NYC Automated Employment Decision Tool —
            Bias Audit Results".
finding:    The label names the statutory subject matter rather than a generic legal
            or compliance heading, and identifies the destination as the New York
            City automated-employment-decision-tool disclosure. Recorded here in
            full because the label's exact wording, not this auditor's reading of
            it, is what a reviewer will want to check.
```

---

## Pass 3 — Candidate notice

```
id:         F-06
obligation: NOTICE-USE
verdict:    PASS (held — REF-01, REF-02)
severity:   —
provision:  admin-20-871-requirements.md:L31
quote:      That an automated employment decision tool will be used in
            connection with the assessment or evaluation of such employee or candidate that
            resides in the city. Such notice shall be made no less than ten business days
            before such use and allow a candidate to request an alternative selection
            process or accommodation;
searched:   https://meridiantalent.example/jobs/ny/senior-accountant/MT-40218  (2026-09-11, 09:24)
            https://meridiantalent.example/jobs/ny/paralegal/MT-40377  (2026-09-11, 09:29)
            https://meridiantalent.example/jobs/ny/warehouse-lead/MT-40402  (2026-09-11, 09:33)
observed:   Each of the three postings carries a block headed "Notice of automated
            employment decision tool" stating that MeridianMatch will be used in
            connection with the assessment or evaluation of candidates for that
            position.
finding:    Notice of tool use appears by a method §5-304(b) permits. The ten-
            business-day element of this provision is carried by REF-02 and is not
            folded into this verdict.
```

```
id:         F-07
obligation: NOTICE-QUALS
verdict:    PASS (held — REF-01, REF-02)
severity:   —
provision:  admin-20-871-requirements.md:L36
quote:      The job qualifications and characteristics that such automated
            employment decision tool will use in the assessment of such candidate or
            employee. Such notice shall be made no less than 10 business days before such
            use; and
searched:   https://meridiantalent.example/jobs/ny/senior-accountant/MT-40218  (2026-09-11, 09:24)
            https://meridiantalent.example/jobs/ny/paralegal/MT-40377  (2026-09-11, 09:29)
            https://meridiantalent.example/jobs/ny/warehouse-lead/MT-40402  (2026-09-11, 09:33)
observed:   The MT-40218 notice enumerates years of relevant accounting experience,
            the technical skills listed under the posting's Requirements, professional
            certifications held, education level, and stated work-location preference,
            and states no other characteristic is assessed. The other two postings
            carry the same block with qualifications differing as the roles differ.
finding:    The qualifications and characteristics the tool will use are stated in
            the notice. The ten-business-day element is carried by REF-02.
```

```
id:         F-08
obligation: NOTICE-ALT
verdict:    PASS (held — REF-01)
severity:   —
provision:  rcny-5-304-notice.md:L18
quote:      The notice required by § 20-871(b)(1) of the Code must include
            instructions for how an individual can request an alternative selection process
            or a reasonable accommodation under other laws, if available.
searched:   https://meridiantalent.example/jobs/ny/senior-accountant/MT-40218  (2026-09-11, 09:24)
            https://meridiantalent.example/jobs/ny/paralegal/MT-40377  (2026-09-11, 09:29)
            https://meridiantalent.example/jobs/ny/warehouse-lead/MT-40402  (2026-09-11, 09:33)
observed:   Each notice gives an email address and a telephone number for requesting
            review without the tool or a reasonable accommodation under other laws.
finding:    The notice includes instructions for making the request §5-304(a) names.
```

```
id:         F-09
obligation: NOTICE-METHOD
verdict:    PASS (held — REF-01)
severity:   —
provision:  rcny-5-304-notice.md:L26
quote:      Provide notice on the employment section of its website in a clear
            and conspicuous manner at least 10 business days before use of an AEDT;
            (2)   Provide notice in a job posting at least 10 business days before
            use of an AEDT; or,
searched:   https://meridiantalent.example/jobs/ny/senior-accountant/MT-40218  (2026-09-11, 09:24)
            https://meridiantalent.example/jobs/ny/paralegal/MT-40377  (2026-09-11, 09:29)
            https://meridiantalent.example/jobs/ny/warehouse-lead/MT-40402  (2026-09-11, 09:33)
observed:   The notice block appears in three postings across three staffing areas —
            Finance & Accounting, Legal, Operations — each for a New York, NY position.
finding:    Notice is delivered by the method permitted at §5-304(b)(2), in every
            posting sampled. Staffing areas other than these three were not searched;
            this finding establishes delivery in the areas sampled and makes no claim
            about any area not sampled.
```

```
REF-02  notice timing
provision: NOTICE-USE  (admin-20-871-requirements.md:L31)
quote:     That an automated employment decision tool will be used in
           connection with the assessment or evaluation of such employee or candidate that
           resides in the city. Such notice shall be made no less than ten business days
           before such use and allow a candidate to request an alternative selection
           process or accommodation;
question:  For each New York City posting carrying the notice, was MeridianMatch
           first used to assess a candidate for that position no earlier than ten
           business days after the notice appeared in the posting?
evidence:  The employer's MeridianMatch run log or applicant-tracking activity
           record showing the first scoring or ranking event per requisition,
           against the posting's publication timestamp.
once answered, if YES →  NOTICE-USE and NOTICE-QUALS resolve PASS.
once answered, if NO  →  Both resolve FAIL, severity DISCRETE.
status:    OPEN
```

The postings state their own posting dates and assert a first-use date ten business days later. That is the employer's account of its own conduct, not an observable fact about it, and it does not close `REF-02`. A stated intention not to use a tool before a date is not a record of not having used it.

---

## Pass 4 — Data disclosure

```
id:         F-10
obligation: DATA-DISCLOSURE
verdict:    PASS (held — REF-01)
severity:   —
provision:  admin-20-871-requirements.md:L40
quote:      3.   If not disclosed on the employer or employment agency's website,
            information about the type of data collected for the automated employment
            decision tool, the source of such data and the employer or employment agency's
            data retention policy shall be available upon written request by a candidate or
            employee. Such information shall be provided within 30 days of the written
            request.
searched:   https://meridiantalent.example/careers/nyc-disclosures  (2026-09-11, 09:18)
observed:   Types of data collected (résumé text, job titles and dates, education
            history, stated skills, certifications, stated compensation expectations,
            preferred work location); source (candidate-supplied through the
            application form or uploaded résumé, nothing purchased or inferred); and
            a retention policy of 24 months from most recent application activity.
finding:    All three categories §20-871(b)(3) names are disclosed on the website.
            The on-request duty in the quoted text is conditioned on those categories
            not being disclosed on the website (same file, L40); the condition is not
            met here. The page separately states written requests are answered within
            30 days.
```

```
id:         F-11
obligation: DATA-WEBPOST
verdict:    PASS (held — REF-01)
severity:   —
provision:  rcny-5-304-notice.md:L43
quote:      (1)   Provide information on the employment section of its website in a
            clear and conspicuous manner about its AEDT data retention policy, the type of
            data collected for the AEDT, and the source of the data;
searched:   https://meridiantalent.example/careers  (2026-09-11, 09:10)
            https://meridiantalent.example/careers/nyc-disclosures  (2026-09-11, 09:18)
            https://meridiantalent.example/careers/aedt-transparency  (2026-09-11, 09:12)
observed:   The disclosures page sits beneath /careers, is linked from the /careers
            footer and from the transparency page, and is cross-referenced from the
            job-posting notice. It carries the retention policy, data types and data
            source, and instructions for making a written request by email or post.
finding:    Both elements §5-304(d) requires on the employment section are present
            there: the information required at (d)(1), and the written-request
            instructions required at (d)(2), at L46 of the same file.
```

---

## Conditional referrals

`REF-03` (duration window) does not fire. Its firing condition is `SUMMARY-PUBLIC = FAIL`; the held verdict on `SUMMARY-PUBLIC` is `PASS`. §5-303(c)'s six-month duty is satisfied in the only sense observable from outside while the summary is posted, so there is nothing to refer.

---

## Severity

No obligation carries a `FAIL`. Severity attaches to `FAIL` only, so no severity is assigned anywhere in this report. If `REF-02` is answered NO, `NOTICE-USE` and `NOTICE-QUALS` resolve `FAIL` with severity `DISCRETE` — read off §20-872(c), which makes a failure of notice under §20-871(b) a separate violation.

---

## Recorded but not verdicted

The transparency page names Calder Assurance Group LLC as independent auditor and attests to the absence of each disqualification at §5-300. That attestation is the employer's account of a relationship, not an observable fact, and independence is not among the eleven audited obligations. It is recorded here so a reviewer knows it was read, and no verdict is issued on it.

## Limits of this report

Not searched: any page behind sign-in or account registration; postings in staffing areas other than Finance & Accounting, Legal and Operations. Not observable from public sources: how MeridianMatch's output is weighted in the employer's process (`REF-01`); when the tool was first used against each requisition (`REF-02`); any notice delivered by U.S. mail or email under §5-304(b)(3), which would not change any verdict here since notice was found by a permitted method.

This report records one moment, 2026-09-11, as captured in the supplied evidence record. It is not a legal opinion, a conformity assessment, or a certification, and it states no conclusion that any party has or has not violated the law. Both referrals are `OPEN`; the report's overall state is `AWAITING HUMAN DETERMINATION`, and there is no provisional verdict available on request.
