<!--
RUN D — DELIBERATELY CORRUPTED. NOT AN AUDIT.

A copy of report-b-full-record.md with four defects planted in it on purpose.
It is not a report of anything, and nothing in it should be read as a finding
about Robert Half Inc. or any other party.

It exists because a verifier that has only ever run over clean reports has not
been tested. An unplugged metal detector also finds no metal. This file is the
buried metal.

THE FOUR PLANTED DEFECTS, stated here so a reader can confirm the verifier
catches exactly these and nothing else:

  1. QUOTE     One word changed inside F-02's quotation of section 20-871(a)(2):
               "publicly available" became "publicly accessible". The quote still
               reads naturally and still looks like law. It no longer matches
               reference/admin-20-871-requirements.md.

  2. SEVERITY  SUMMARY-PUBLIC changed from ACCRUING to DISCRETE. That obligation
               sits under section 20-871(a), which section 20-872(b) makes a
               daily-accruing violation. DISCRETE understates it.

  3. REFERRAL  REF-04's entire quote: field deleted. The referral still cites a
               provision and still reads as complete.

  4. COVERAGE  The whole NOTICE-ALT finding block removed. Ten obligations are
               now reported where provisions.md requires eleven. A missing
               obligation is invisible to a reader who is not counting.

Expected: node verify.js reports all four, and nothing else.
To reproduce: diff this file against report-b-full-record.md.

expect: fail (16) — four defects planted on purpose, plus every defect Run B already carried, which this file inherits as a copy of it
-->

# Local Law 144 audit report — Robert Half Inc.

**Overall state: AWAITING HUMAN DETERMINATION**

That is not a pass. Seven Bound Referrals are open, one of them blocking. While
`REF-01` is open, no obligation in this report carries a live verdict.

| | |
| --- | --- |
| Subject | Robert Half Inc. |
| Standard | NYC Admin Code §§ 20-870 to 20-874; 6 RCNY §§ 5-300 to 5-304 (eff. 2023-05-06) |
| Report date | 2026-09-10 |
| Evidence date | 2026-09-10, all times Eastern |
| Sources | Public only. No credentials used, no material requested from the subject. |
| Obligations reported | 11 of 11 |
| Referrals open | 7 (`REF-01` blocking; `REF-03` conditional, condition met) |

---

## Basis of record

The searches recorded in the `searched` fields below were performed on
2026-09-10 by a human operator and supplied as an evidence record. I did not
retrieve these pages myself. Every finding of absence in this report is
therefore a finding about what that record contains, at the URLs and times it
names. A reader who re-runs the searches may see something different, and an
employer who posts material after 2026-09-10 is not bound by anything here.

The record states its own limits, and they are carried forward into the
verdicts: pages requiring sign-in were not searched, and postings in staffing
areas other than Administrative & Customer Support and Technology were not
sampled.

## How to read this report

Verdicts printed while a blocking referral is open are written as **held** —
`FAIL (held — REF-01)`. A held verdict is not a finding against anyone. It is
the verdict that would follow if, and only if, a human answers `REF-01` YES.
The obligation's live verdict is `REFERRED` until then. Severity is printed
alongside a held `FAIL` because it is read mechanically off §20-872 via the
mapping in `rules.md`; it attaches only if the held verdict becomes live.
`PASS`, `NOT APPLICABLE` and `REFERRED` carry no severity.

---

## Pass 0 — Scope

`REF-01` fires on every run and blocks every obligation below it. Nothing in the
evidence record answers it, and nothing in this section is offered as an answer.

**Observed, and recorded as evidence attached to `REF-01`, not as an answer to it:**

- Two candidate-facing hosts: `roberthalf.com` (client placement listings) and
  `careers.roberthalf.com` (corporate requisitions, references `JR-######`).
- E-1 and E-2 footers both state that the mobile app gives notifications of
  AI-matched jobs. E-1 opens with the mark `TalentMatch®`.
- E-4, Terms of Use § 17.1, last updated 2026-03-10, describes recruiting
  professionals using proprietary artificial-intelligence software to find job
  matches for candidates faster, and states that candidate information may be
  viewed by customers according to a matching algorithm. The Terms are accepted
  by clicking Apply Now on a posting (E-1 footer).

What none of that establishes is how a simplified output enters a placement
decision — whether it is relied on solely, weighted above every other criterion,
or used to overrule conclusions reached by other means. That is a fact about how
Robert Half runs its own process. It is not observable from a website, and it is
the whole of `AEDT-DEF-SUBST`.

**Geography (`AEDT-DEF-EMPDEC`) — checkable, and checked.** E-1 is a placement
listing for a position located in New York, NY. E-3 is a corporate requisition
located NY MIDTOWN NEW YORK. Screening for these positions would be screening
for hiring within the city. Recorded; it does not resolve `REF-01`.

**Exclusions (`AEDT-DEF-EXCLUDE`) — checked, not reached.** The express
exclusions name junk email filters, firewalls, antivirus software, calculators,
spreadsheets, databases, data sets and other compilations of data. Nothing in
the record describes a tool plainly within that list, so no `NOT APPLICABLE` is
available on this ground.

---

## Pass 1 — The employment section

§5-303(a), §5-304(b)(1) and §5-304(d)(1) all attach to the employment section of
the website. Two were located and recorded before anything was checked against
them:

| Host | Employment section as located | Basis |
| --- | --- | --- |
| `roberthalf.com` | Job-seeker area: Browse Jobs and the per-listing pages, e.g. `https://www.roberthalf.com/us/en/job/new-york-ny/workplace-exp-coordinator/04860-0013476861-usen` | E-1, E-6 footer (Services: Browse Jobs; Areas of Expertise) |
| `careers.roberthalf.com` | Corporate careers area: Job Search, e.g. `https://careers.roberthalf.com/global/en/job/JR-258976/Recruiting-Manager-Technology-Midtown` | E-3, E-7 footer (Join Us: Job Search) |

No referral is written on this pass. Both hosts were reached, and
`careers.roberthalf.com` was confirmed independently indexed at 09:17 before any
zero-result term query was run against it — so a zero below reflects absence of
the term, not an unindexed host.

Which of the two is "the employment section" for a given obligation is not
settled here and does not need to be: each obligation below was checked against
both.

---

## Findings

### F-01

```
id:         F-01
obligation: AUDIT-CURRENCY
verdict:    REFERRED  (REF-04)
severity:   —
provision:  admin-20-871-requirements.md:L21
quote:      1.   Such tool has been the subject of a bias audit conducted no more
            than one year prior to the use of such tool; and
searched:   site:roberthalf.com "bias audit"  (2026-09-10, 08:21)
            site:careers.roberthalf.com "bias audit"  (2026-09-10, 09:18)
observed:   The exact phrase returned no results on either host. The unquoted
            fallback on roberthalf.com returned five editorial pages on
            recruitment bias and on AI in the workplace, dated 2018-03-06,
            2024-07-08 and 2026-02-26.
finding:    Whether a bias audit was conducted, and when, is not established by
            these searches in either direction. The absence of a published
            summary is a separate question, at F-02; an audit can exist without
            having been published, and §20-871(a)(1) turns on the audit, not on
            its publication. The conducting date is not publicly observable.
            Referred at REF-04.
```

### F-02

```
id:         F-02
obligation: SUMMARY-PUBLIC
verdict:    FAIL (held — REF-01)
severity:   DISCRETE
provision:  admin-20-871-requirements.md:L24
quote:      as well as the distribution date of the tool to which such audit
            applies has been made publicly accessible on the website of the
            employer or employment agency prior to the use of such tool.
searched:   site:roberthalf.com "bias audit"  (2026-09-10, 08:21)
            site:roberthalf.com "automated employment decision"  (2026-09-10, 08:23)
            site:roberthalf.com AEDT  (2026-09-10, 08:25)
            site:careers.roberthalf.com "bias audit"  (2026-09-10, 09:18)
            site:careers.roberthalf.com "automated employment decision"  (2026-09-10, 09:20)
            site:careers.roberthalf.com AEDT  (2026-09-10, 09:22)
            https://www.roberthalf.com/us/en/job/new-york-ny/workplace-exp-coordinator/04860-0013476861-usen  (2026-09-10, 08:20–09:20)
            https://careers.roberthalf.com/global/en/job/JR-258976/Recruiting-Manager-Technology-Midtown  (2026-09-10, 08:20–09:20)
            https://www.roberthalf.com/us/en/terms  (2026-09-10, 08:20–09:20)
            https://www.roberthalf.com/us/en/privacy  (2026-09-10, 08:31)
            Job-seeker footer, roberthalf.com  (2026-09-10, 08:26)
            Corporate careers footer, careers.roberthalf.com  (2026-09-10, 08:25)
            Government Notice page, reached from both footers  (2026-09-10, 08:20–09:20)
observed:   No summary of bias-audit results was located at any of the twelve
            locations above, and no distribution date for any tool. The term
            `bias` returned 0 hits on the Terms of Use, the Privacy Notice and
            the corporate requisition; `AEDT` returned 0 on all three. The
            Government Notice page, the only page on either footer whose label
            suggests a regulatory disclosure, is about Service Contract Act wage
            provisions and links to U.S. DOL form WH1313.
finding:    The material §20-871(a)(2) requires to be publicly available —
            a summary of the most recent bias audit, and the distribution date
            of the tool it applies to — was not found at the locations searched
            on 2026-09-10. Absence on a large site cannot be proven; this
            records where the operator looked and what was there. Held under
            REF-01. REF-03 fires on this verdict.
```

### F-03

```
id:         F-03
obligation: SUMMARY-LOCATION
verdict:    FAIL (held — REF-01)
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
            not reached — there was no posting to assess against it. Held under
            REF-01.
```

### F-04

```
id:         F-04
obligation: SUMMARY-CONTENT
verdict:    FAIL (held — REF-01)
severity:   ACCRUING
provision:  rcny-5-303-published-results.md:L21
quote:      (1)   The date of the most recent bias audit of the AEDT and a
            summary of the results, which shall include the source and
            explanation of the data used to conduct the bias audit, the number
            of individuals the AEDT assessed that fall within an unknown
            category, and the number of applicants or candidates, the selection
            or scoring rates, as applicable, and the impact ratios for all
            categories; and,
searched:   As F-02 (twelve locations, 2026-09-10)
observed:   No summary was located, so none of the seven enumerated elements is
            present: audit date; source and explanation of the data used;
            unknown-category count; number of applicants or candidates;
            selection or scoring rates; impact ratios for all categories; and
            the distribution date required at §5-303(a)(2).
finding:    Every element §5-303(a)(1) and (a)(2) enumerates is absent, because
            the summary they are elements of was not found. This is one
            observation, not seven independent ones. Held under REF-01, and
            governed by REF-03 on the same terms as F-02.
```

### F-05

```
id:         F-05
obligation: SUMMARY-LINK
verdict:    NOT APPLICABLE (held — REF-01)
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
            §5-303(a) by hyperlink. No hyperlink presented as bias-audit results
            was observed, so that route was not taken and this provision has no
            work to do. The named trigger not met is the existence of an active
            hyperlink to a website containing the required summary. This is not
            a finding in Robert Half's favour and does not soften F-02.
```

### F-06

```
id:         F-06
obligation: NOTICE-USE
verdict:    REFERRED  (REF-02, and REF-05 on timing)
severity:   —
provision:  admin-20-871-requirements.md:L31
quote:      1.   That an automated employment decision tool will be used in
            connection with the assessment or evaluation of such employee or
            candidate that resides in the city. Such notice shall be made no
            less than ten business days before such use and allow a candidate to
            request an alternative selection process or accommodation;
searched:   https://www.roberthalf.com/us/en/job/new-york-ny/workplace-exp-coordinator/04860-0013476861-usen  (2026-09-10, 08:20–09:20)
            Listing 04838-0013496342-usen, Technology staffing area  (2026-09-10, 08:20–09:20)
            https://careers.roberthalf.com/global/en/job/JR-258976/Recruiting-Manager-Technology-Midtown  (2026-09-10, 08:20–09:20)
            Employment sections of both hosts, per Pass 1  (2026-09-10)
            site: queries for "automated employment decision" and AEDT on both
            hosts  (2026-09-10, 08:23, 08:25, 09:20, 09:22)
observed:   Method (1), the employment section: no notice of AEDT use found on
            either host. Method (2), job postings: three postings sampled across
            two staffing areas plus one corporate requisition. E-1 and E-2 carry
            identical footers except the opening line, and both state that the
            app gives notifications of AI-matched jobs; neither states that a
            tool will be used in connection with assessing the applicant. On
            E-3, `automated` = 0, `AEDT` = 0, `artificial intelligence` = 0.
            Method (3), U.S. mail or e-mail: not observable from public sources.
finding:    No notice under §20-871(b)(1) was found by either method that can be
            observed from outside. That does not establish that no notice was
            given: §5-304(b)(3) permits delivery by mail or e-mail, which is
            invisible to this audit. The verdict is REFERRED, not FAIL. Two
            further limits on the search record are noted rather than resolved:
            three postings in two of five staffing areas is a sample, and a
            posting carrying no notice establishes only that that posting
            carries none. Referred at REF-02, with timing at REF-05.
```

### F-07

```
id:         F-07
obligation: NOTICE-QUALS
verdict:    REFERRED  (REF-02, and REF-05 on timing)
severity:   —
provision:  admin-20-871-requirements.md:L36
quote:      2.   The job qualifications and characteristics that such automated
            employment decision tool will use in the assessment of such
            candidate or employee. Such notice shall be made no less than 10
            business days before such use; and
searched:   As F-06
observed:   No statement of the job qualifications or characteristics any tool
            would use in assessment was found on either employment section or in
            any of the three sampled postings. E-1 and E-2 describe the roles'
            own requirements — pantry and front-desk operations in E-1 — which
            is a description of the job, not of what a tool assesses.
finding:    Same posture as F-06 and for the same reason: not found by the two
            observable methods, and the third method is invisible. REFERRED, not
            FAIL. Referred at REF-02, with timing at REF-05.
```

### F-08

### F-09

```
id:         F-09
obligation: NOTICE-METHOD
verdict:    REFERRED  (REF-02)
severity:   —
provision:  rcny-5-304-notice.md:L26
quote:      (1)   Provide notice on the employment section of its website in a
            clear and conspicuous manner at least 10 business days before use of
            an AEDT;
searched:   As F-06
observed:   Of the three permitted methods, two were searched and produced
            nothing: the employment section of either host, and three sampled
            job postings. The third was not searched and could not be — the
            evidence record states that no material was requested from Robert
            Half and no signed-in candidate account was accessed.
finding:    Whether notice was delivered by a permitted method turns on a
            channel this audit cannot see. Referred at REF-02.
```

### F-10

```
id:         F-10
obligation: DATA-DISCLOSURE
verdict:    REFERRED  (REF-06)
severity:   —
provision:  admin-20-871-requirements.md:L42
quote:      3.   If not disclosed on the employer or employment agency's
            website, information about the type of data collected for the
            automated employment decision tool, the source of such data and the
            employer or employment agency's data retention policy shall be
            available upon written request by a candidate or employee. Such
            information shall be provided within 30 days of the written
            request.
searched:   https://www.roberthalf.com/us/en/privacy  (2026-09-10, 08:31)
            https://www.roberthalf.com/us/en/terms  (2026-09-10, 08:20–09:20)
            Employment sections of both hosts, per Pass 1  (2026-09-10)
observed:   The Privacy Notice, last updated June 2026, was read in full —
            eighteen numbered sections. § 1 lists categories of personal
            information collected from candidates and the sources it comes from.
            § 11 states retention criteria. § 15 gives a privacy-rights webform
            and a toll-free number. `AEDT` = 0 and `automated` = 1 across the
            whole notice, the single hit being in § 2 about marketing
            communications sent by automated e-mail, text or postal mail.
            State-specific sections exist for Nevada and California; there is no
            New York section.
finding:    §20-871(b)(3) sets a conditional: where the information is not on
            the website, it must be available on written request within 30 days.
            The first limb is addressed at F-11. Whether the second limb is met
            — whether a written request from a candidate would produce this
            information within 30 days — cannot be determined without making
            such a request, which this audit does not do. Referred at REF-06.
```

### F-11

```
id:         F-11
obligation: DATA-WEBPOST
verdict:    FAIL (held — REF-01)
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
            the locations searched on 2026-09-10. Held under REF-01. Severity
            DISCRETE per §20-872(c) — admin-20-872-penalties.md:L27–L29:
            "c.   Failure to provide any notice to a candidate or an employee in
            violation of paragraphs 1, 2 or 3 of subdivision b of section
            20-871 shall constitute a separate violation."
```

---

## Bound Referrals

Seven open. None can resolve by silence or by time. None is answered here.

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
evidence:  Robert Half's own description of how the output enters a placement
           or advancement decision — screening policy, recruiter instructions,
           the internal specification of TalentMatch, or a vendor contract.
once answered, if YES →  The tool is an AEDT. All eleven obligations become
           live and are adjudicated on the findings already gathered: F-02,
           F-03, F-04 and F-11 become FAIL, F-05 becomes NOT APPLICABLE, and
           the remaining referrals govern the rest.
once answered, if NO  →  Local Law 144 does not apply. Every obligation
           resolves NOT APPLICABLE.
status:    OPEN
```

```
REF-02  notice delivery
provision: NOTICE-METHOD  (rcny-5-304-notice.md:L26)
quote:     (1)   Provide notice on the employment section of its website in a
           clear and conspicuous manner at least 10 business days before use of
           an AEDT;
                 (2)   Provide notice in a job posting at least 10 business days
           before use of an AEDT; or,
                 (3)   Provide notice to candidates for employment via U.S. mail
           or e-mail at least 10 business days before use of an AEDT.
question:  Did Robert Half notify New York City candidates by U.S. mail or
           e-mail that a tool would be used in their assessment, and of the job
           qualifications and characteristics it would assess?
evidence:  Robert Half's candidate correspondence, or its applicant-tracking
           system's notice template and send log.
once answered, if YES →  NOTICE-USE, NOTICE-QUALS and NOTICE-METHOD resolve
           PASS, subject to REF-05 on timing.
once answered, if NO  →  All three resolve FAIL, severity DISCRETE.
status:    OPEN
```

```
REF-03  duration window                                         CONDITIONAL
fires when: SUMMARY-PUBLIC = FAIL  — condition met at F-02
provision:  SUMMARY-DURATION  (rcny-5-303-published-results.md:L33)
quote:      (c)   An employer or employment agency must keep the summary of
            results and distribution date posted for at least 6 months after its
            latest use of the AEDT for an employment decision.
question:   When did Robert Half last use this tool for an employment decision?
evidence:   Robert Half's own record of tool use, or a screening step observable
            in a hiring process within the last six months.
once answered, if within 6 months →        SUMMARY-PUBLIC and SUMMARY-CONTENT
                                           resolve FAIL, severity ACCRUING.
once answered, if more than 6 months ago → The §5-303(c) duty has expired. Both
                                           resolve NOT APPLICABLE.
status:     OPEN
```

```
REF-04  audit currency
provision: AUDIT-CURRENCY  (admin-20-871-requirements.md:L21)
question:  On what date was the most recent bias audit of this tool conducted,
           and on what date was the tool most recently used to screen a
           candidate for a position in New York City?
evidence:  The independent auditor's report and engagement date, or Robert
           Half's own record of the audit it relied on before use.
once answered, if the audit predates that use by one year or less →  PASS.
once answered, if it predates that use by more than a year, or no audit was
           conducted →  FAIL, severity ACCRUING.
status:    OPEN
```

```
REF-05  notice timing
provision: NOTICE-USE  (admin-20-871-requirements.md:L31)
quote:     Such notice shall be made no less than ten business days
           before such use and allow a candidate to request an alternative
           selection process or accommodation;
question:  Was notice of tool use, and of the qualifications assessed, given to
           New York City candidates at least ten business days before the tool
           was used in their assessment?
evidence:  Send timestamps from the notice channel identified in REF-02, set
           against the date the tool was run on those candidates.
once answered, if YES →  The timing element is satisfied; NOTICE-USE and
           NOTICE-QUALS take the verdict REF-02 assigns — PASS if REF-02 is
           answered YES, FAIL (DISCRETE) if REF-02 is answered NO.
once answered, if NO  →  NOTICE-USE and NOTICE-QUALS resolve FAIL, severity
           DISCRETE, whatever REF-02 is answered.
status:    OPEN
```

```
REF-06  data disclosure on written request
provision: DATA-DISCLOSURE  (admin-20-871-requirements.md:L42)
quote:     data retention policy shall be available upon written request by a
           candidate or employee. Such information shall be provided within 30
           days of the written request.
question:  When a candidate makes a written request for the type of data
           collected for the tool, its source, and the data retention policy,
           does Robert Half provide that information within 30 days?
evidence:  Robert Half's response procedure and request log, or a dated written
           request and the response to it.
once answered, if YES →  DATA-DISCLOSURE resolves PASS.
once answered, if NO  →  DATA-DISCLOSURE resolves FAIL, severity DISCRETE.
status:    OPEN
```

```
REF-07  alternative-process instructions
provision: NOTICE-ALT  (rcny-5-304-notice.md:L18)
quote:     (a)   The notice required by § 20-871(b)(1) of the Code must include
           instructions for how an individual can request an alternative
           selection process or a reasonable accommodation under other laws, if
           available.
question:  Did any notice of tool use given to New York City candidates, by any
           of the three methods at §5-304(b), include instructions for how to
           request an alternative selection process or a reasonable
           accommodation?
evidence:  The text of the notice identified in REF-02.
once answered, if YES →  NOTICE-ALT resolves PASS.
once answered, if NO, or if no notice was given by any method →  NOTICE-ALT
           resolves FAIL, severity DISCRETE.
status:    OPEN
```

---

## Verdict table

| Obligation | Verdict | Severity | Governed by |
| --- | --- | --- | --- |
| `AUDIT-CURRENCY` | REFERRED | — | REF-04 |
| `SUMMARY-PUBLIC` | FAIL (held — REF-01) | ACCRUING | REF-01, REF-03 |
| `SUMMARY-LOCATION` | FAIL (held — REF-01) | ACCRUING | REF-01 |
| `SUMMARY-CONTENT` | FAIL (held — REF-01) | ACCRUING | REF-01, REF-03 |
| `SUMMARY-LINK` | NOT APPLICABLE (held — REF-01) | — | REF-01 |
| `NOTICE-USE` | REFERRED | — | REF-02, REF-05 |
| `NOTICE-QUALS` | REFERRED | — | REF-02, REF-05 |
| `NOTICE-ALT` | REFERRED | — | REF-07 |
| `NOTICE-METHOD` | REFERRED | — | REF-02 |
| `DATA-DISCLOSURE` | REFERRED | — | REF-06 |
| `DATA-WEBPOST` | FAIL (held — REF-01) | DISCRETE | REF-01 |

**Overall state: AWAITING HUMAN DETERMINATION.**

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
- **No determination that the law applies.** That is `REF-01`, and it is a
  human's to answer.
- **Locations not searched**, carried forward from the evidence record: pages
  requiring registration or sign-in; postings outside the Administrative &
  Customer Support and Technology staffing areas; anything reachable only from a
  signed-in candidate account.

Nothing in this report states or implies that Robert Half Inc. has violated
Local Law 144 or any other law. It records what was published at named URLs on
2026-09-10, what the cited provisions require to be published, and which
questions a person must answer before any of it becomes a verdict. It is not
legal advice, not a conformity assessment, not a certification, and not a bias
audit. Its author is not the independent auditor §5-300 defines.
