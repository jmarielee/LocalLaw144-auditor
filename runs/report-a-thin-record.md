<!--
RUN A — thin evidence record.

Conditions: the operator pasted retrieved pages directly into the chat. No
search record was supplied — no URLs for either footer, no URL for the corporate
requisition, no per-term hit counts, no retrieval times.

Published because of what the auditor did with a thin record, not in spite of
it. It declined to state absence more widely than its evidence supported, and
wrote the Search-record integrity note below on its own initiative.

Chat conditions: first run, fresh chat, nothing preceding it.

Predates two rules.md changes — the held-verdict notation and the mandatory
quote field on referrals. Neither appears here.

expect: fail — predates the held-verdict notation and the mandatory referral quote field
-->

# LL144 AUDIT REPORT — ROBERT HALF INC.

**Overall state: `AWAITING HUMAN DETERMINATION`**

Audit date: 2026-09-10 (pages supplied), compiled 2026-09-10.
Standard: NYC Admin Code §§ 20-870–20-874; 6 RCNY §§ 5-300–5-304 (DCWP Final Rule, eff. 2023-05-06), both shipped verbatim in `reference/`.

Six Bound Referrals are open. `REF-01` blocks everything. No obligation in this report carries a verdict. The verdicts recorded in the finding blocks below are the verdicts that attach *once a human answers `REF-01` YES* — they are not verdicts now, and this report offers no provisional, aggregate, or "likely" state.

---

## Evidence inventory

Every page below was supplied to this auditor by the operator as retrieved from public sources on 2026-09-10. Retrieval times were not supplied. Quotes are attributed to the document as supplied.

| # | Document | URL as supplied |
| --- | --- | --- |
| E-1 | Job posting — Workplace Exp Coordinator, New York, NY. Staffing Area: Administrative & Customer Support | `roberthalf.com/us/en/job/new-york-ny/workplace-exp-coordinator/04860-0013476861-usen` |
| E-2 | Job requisition — Recruiting Manager (Technology) Midtown. Job location: NY MIDTOWN NEW YORK | no URL supplied (career site) |
| E-3 | Terms of Use, last updated 2026-03-10 | `roberthalf.com/us/en/terms` (per link in E-1) |
| E-4 | Privacy Notice, last updated June 2026 | `roberthalf.com/us/en/privacy` (per link in E-1) |
| E-5 | Site footer — columns *Join Us / Culture / About Robert Half / Legal*; Legal column: Terms of use, Privacy policy, Fraud alert, Government notice | no URL supplied |
| E-6 | Site footer — columns *Services / Areas of Expertise / Resources & Tools / About*; legal row: Fraud Alert, Government Notice, Privacy Notice, Terms of Use | no URL supplied |
| E-7 | `govc.pdf` — U.S. DOL form WH1313 REV 03/22, "Employee Rights on Government Contracts" (Walsh-Healey PCA / Service Contract Act poster). The artifact behind the "Government Notice" footer link | no URL supplied |

**Search-record integrity.** This auditor did not conduct the searches. It received the seven documents above. No per-term hit counts accompany them, no site-wide enumeration of the employment section was supplied, and retrieval times were not recorded. Under `rules.md` → Search discipline, that limits every finding of absence below to absence *at these seven locations on this date*, and nothing wider. Two job postings across two staffing areas is a thin sample; `rules.md` states that a posting carrying no notice establishes only that that posting carries none.

---

## Pass 0 — Scope

Robert Half Inc. appears in the supplied material in **both covered capacities**: as an employer hiring for its own positions (E-2, a Midtown New York requisition) and as an employment agency placing candidates with client Customers (E-1, E-3 §17). §20-871 binds both. Findings below are recorded against the party in both capacities; `REF-01` is written once and covers both.

**Geography — checkable, and met.** E-1 is a position in New York, NY. E-2 is located NY MIDTOWN NEW YORK.

> `AEDT-DEF-EMPDEC` — `admin-20-870-definitions.md:L38`
> ```
>    Employment decision. The term "employment decision" means to screen
> candidates for employment or employees for promotion within the city.
> ```

Recorded. Per `rules.md`, this does not resolve `REF-01`.

**Exclusions — checked, not reached.**

> `AEDT-DEF-EXCLUDE` — `admin-20-870-definitions.md:L26`
> ```
> employment decision tool" does not include a tool that does not automate,
> support, substantially assist or replace discretionary decision-making
> processes and that does not materially impact natural persons, including, but
> not limited to, a junk email filter, firewall, antivirus software, calculator,
> spreadsheet, database, data set, or other compilation of data.
> ```

The software described in E-1 and E-3 is not plainly one of the enumerated exclusions. No `NOT APPLICABLE` is reachable on this ground.

**Scope evidence observed** (attached to `REF-01`, never an answer to it):

- E-3 §17.1 describes recruiting professionals using "proprietary artificial intelligence software" to find job matches for Candidates, and states that Candidate Information may be viewed by Customers according to Robert Half's "matching algorithm."
- E-1 carries the mark **TalentMatch®** and refers to app notifications of AI-matched jobs.

None of this states whether a simplified output is relied on solely, weighted above every other criterion, or used to overrule other conclusions. That is a fact about deployment. It is not on any page.

---

## Pass 1 — The employment section

Two candidate-facing sections are evidenced:

1. **Job-seeker / staffing section** — job listing pages under `roberthalf.com/us/en/job/…` (E-1), with the footer at E-6.
2. **Careers-with-us section** — internal requisitions (E-2), with the footer at E-5 (*Join Us → Job Search; Culture → Working at Robert Half*).

Both are identified by content. **No URL was supplied for either footer, and no URL was supplied for E-2.** The absence findings below are therefore anchored to the documents, not to a verified page address. That is a defect in the search record, and it is recorded here rather than papered over.

---

## Findings

```
id:         F-01
obligation: SUMMARY-PUBLIC
verdict:    FAIL
severity:   ACCRUING
provision:  admin-20-871-requirements.md:L24
quote:            2.   A summary of the results of the most recent bias audit of such tool
            as well as the distribution date of the tool to which such audit applies has
            been made publicly available on the website of the employer or employment
            agency prior to the use of such tool.
searched:   E-1 job posting page (2026-09-10, time not supplied)
            E-2 career-site requisition (2026-09-10, time not supplied)
            E-3 Terms of Use (2026-09-10, time not supplied)
            E-4 Privacy Notice (2026-09-10, time not supplied)
            E-5 footer, all four columns (2026-09-10, time not supplied)
            E-6 footer, all four columns and legal row (2026-09-10, time not supplied)
            E-7 govc.pdf, the artifact behind "Government Notice" (2026-09-10)
observed:   No summary of bias-audit results appears in any of the seven documents.
            No distribution date appears. Neither footer offers a link whose label
            refers to a bias audit, an automated tool, or New York City. E-7, the
            document reached by the "Government Notice" link in both footers, is a
            U.S. Department of Labor poster on the Walsh-Healey Public Contracts Act
            and the Service Contract Act. It contains no bias-audit material.
finding:    The summary and distribution date §20-871(a)(2) requires to be publicly
            available on the website were not present at any of the locations
            searched on 2026-09-10.
```

```
id:         F-02
obligation: SUMMARY-LOCATION
verdict:    FAIL
severity:   ACCRUING
provision:  rcny-5-303-published-results.md:L18
quote:         (a)   Before the use of an AEDT, an employer or employment agency in the
            city must make the following publicly available on the employment section of
            their website in a clear and conspicuous manner:
searched:   as F-01
observed:   Both candidate-facing sections identified at Pass 1 were examined at the
            footer level and, for the job-seeker section, at the listing-page level.
            Neither carries the material §5-303(a) requires, conspicuously or at all.
finding:    Nothing satisfying §5-303(a) was located on the employment section of
            either site area on 2026-09-10.
```

```
id:         F-03
obligation: SUMMARY-CONTENT
verdict:    FAIL
severity:   ACCRUING
provision:  rcny-5-303-published-results.md:L21
quote:            (1)   The date of the most recent bias audit of the AEDT and a summary of
            the results, which shall include the source and explanation of the data used to
            conduct the bias audit, the number of individuals the AEDT assessed that fall
            within an unknown category, and the number of applicants or candidates, the
            selection or scoring rates, as applicable, and the impact ratios for all
            categories; and,
searched:   as F-01
observed:   No artifact was located against which the enumerated elements could be
            checked element by element. All seven enumerated elements — audit date,
            source and explanation of the data, unknown-category count, number of
            applicants or candidates, selection or scoring rates, impact ratios for all
            categories, and the distribution date at §5-303(a)(2) — are absent because
            no summary is present.
finding:    None of the elements enumerated at §5-303(a) was found at the locations
            searched on 2026-09-10.
```

```
id:         F-04
obligation: SUMMARY-LINK
verdict:    NOT APPLICABLE
severity:   —
provision:  rcny-5-303-published-results.md:L29
quote:         (b)   The requirements of subdivision (a) of this section may be met with an
            active hyperlink to a website containing the required summary of results and
            distribution date, provided that the link is clearly identified as a link to
            results of the bias audit.
searched:   E-5 footer, E-6 footer (2026-09-10)
observed:   Neither footer presents any hyperlink as leading to bias-audit results. The
            available legal links are Terms of use, Privacy policy / Privacy Notice,
            Fraud alert, Government Notice, and Do Not Sell or Share My Personal
            Information. "Government Notice" resolves to E-7, a federal wage-and-hour
            poster unrelated to this law; it is not offered as a bias-audit link and is
            not read as one here.
finding:    The trigger for §5-303(b) is not met: no hyperlink is presented as
            satisfying §5-303(a). The permissive route is unused, so the identification
            requirement it carries has nothing to attach to.
```

```
id:         F-05
obligation: AUDIT-CURRENCY
verdict:    REFERRED  (REF-04)
severity:   —
provision:  admin-20-871-requirements.md:L21
quote:            1.   Such tool has been the subject of a bias audit conducted no more
            than one year prior to the use of such tool; and
searched:   as F-01
observed:   No bias-audit date appears in any supplied document. The date of any audit
            conducted is not otherwise publicly observable when no summary is posted.
finding:    Whether a bias audit exists, and when it was conducted, cannot be settled
            from the sources searched. Absence of a published date is not evidence that
            no audit was conducted. REF-04 is open.
```

```
id:         F-06
obligation: NOTICE-USE
verdict:    REFERRED  (REF-02, REF-06)
severity:   —
provision:  admin-20-871-requirements.md:L31
quote:            1.   That an automated employment decision tool will be used in
            connection with the assessment or evaluation of such employee or candidate that
            resides in the city. Such notice shall be made no less than ten business days
            before such use and allow a candidate to request an alternative selection
            process or accommodation;
searched:   E-1 (2026-09-10), E-2 (2026-09-10), E-5 and E-6 footers (2026-09-10),
            E-3 (2026-09-10), E-4 (2026-09-10)
observed:   Neither posting states that an automated employment decision tool will be
            used in connection with the assessment or evaluation of the candidate.
            E-1 names TalentMatch® and refers to AI-matched jobs in a paragraph
            describing the mobile app; that text is promotional and does not state
            that a tool will assess this candidate. E-3 §17.1 describes AI software and
            a matching algorithm, but E-3 is a site-wide Terms of Use document, not a
            candidate notice on the employment section. Neither footer carries a notice.
finding:    No notice under §20-871(b)(1) was found by §5-304(b)(1) or (b)(2), the two
            methods observable from outside. Method (b)(3), U.S. mail or e-mail, cannot
            be observed. Per rules.md this is REFERRED, not FAIL. The two-posting
            sample supports no conclusion about postings generally.
```

```
id:         F-07
obligation: NOTICE-QUALS
verdict:    REFERRED  (REF-02, REF-06)
severity:   —
provision:  admin-20-871-requirements.md:L36
quote:            2.   The job qualifications and characteristics that such automated
            employment decision tool will use in the assessment of such candidate or
            employee. Such notice shall be made no less than 10 business days before such
            use; and
searched:   as F-06
observed:   Both postings list job qualifications for the role. Neither states which
            qualifications or characteristics an automated tool will use in assessing
            the candidate. Those are different statements and only the second is what
            §20-871(b)(2) requires.
finding:    No statement of the qualifications and characteristics assessed by a tool
            was found by an observable method. REFERRED for the same reason as F-06.
```

```
id:         F-08
obligation: NOTICE-METHOD
verdict:    REFERRED  (REF-02)
severity:   —
provision:  rcny-5-304-notice.md:L26
quote:            (1)   Provide notice on the employment section of its website in a clear
            and conspicuous manner at least 10 business days before use of an AEDT;
                  (2)   Provide notice in a job posting at least 10 business days before
            use of an AEDT; or,
                  (3)   Provide notice to candidates for employment via U.S. mail or e-mail
            at least 10 business days before use of an AEDT.
searched:   as F-06
observed:   Methods (1) and (2) were checked and no notice was found by either.
            Method (3) is invisible from public sources.
finding:    Delivery method cannot be settled from public sources. REF-02 is open.
```

```
id:         F-09
obligation: NOTICE-ALT
verdict:    REFERRED  (REF-02)
severity:   —
provision:  rcny-5-304-notice.md:L18
quote:         (a)   The notice required by § 20-871(b)(1) of the Code must include
            instructions for how an individual can request an alternative selection process
            or a reasonable accommodation under other laws, if available. Nothing in this
            subchapter requires an employer or employment agency to provide an alternative
            selection process.
searched:   E-1, E-2 (2026-09-10)
observed:   E-2 carries an accommodation statement directing job seekers who need a
            reasonable accommodation to search or apply for a job to an HR email address
            and a toll-free number. That statement is framed around accessing the
            application process and does not reference an automated tool or an
            alternative selection process to one.
finding:    §5-304(a) attaches to the §20-871(b)(1) notice. No such notice was located,
            so its contents cannot be checked and no FAIL is reachable. The
            accommodation text at E-2 is recorded as observed and is not read as
            satisfying §5-304(a). Resolves on REF-02.
```

```
id:         F-10
obligation: DATA-WEBPOST
verdict:    FAIL
severity:   DISCRETE
provision:  rcny-5-304-notice.md:L44
quote:               (1)   Provide information on the employment section of its website in a
            clear and conspicuous manner about its AEDT data retention policy, the type of
            data collected for the AEDT, and the source of the data;
                  (2)   Post instructions on the employment section of its website in a
            clear and conspicuous manner for how to make a written request for such
            information, and if a written request is received, provide such information
            within 30 days; and
searched:   E-4 Privacy Notice, read in full (2026-09-10)
            E-3 Terms of Use, read in full (2026-09-10)
            E-1, E-2, E-5, E-6 (2026-09-10)
observed:   E-4 §1 lists categories of personal information collected from Candidates
            and a list of sources of personal information. E-4 §11 states retention
            criteria — the nature and timing of the relationship, legal and contractual
            obligations, and statutes of limitation. E-4 §15 gives a privacy-rights
            webform and a toll-free number for access, deletion and correction requests.
            None of this material identifies an automated employment decision tool.
            There is no statement of the type of data collected for such a tool, no
            statement of the source of that data, and no retention policy stated for it.
            No instructions appear anywhere for making the written request §20-871(b)(3)
            provides for. E-4 is a site-wide legal document linked from the footer, not
            information posted on the employment section.
finding:    All three items §5-304(d)(1)–(2) requires on the employment section — an
            AEDT data retention policy, the type and source of data collected for the
            tool, and written-request instructions — were absent from every location
            searched on 2026-09-10. General privacy-policy retention criteria and a
            general privacy-rights webform were present and are recorded; neither is
            the AEDT-specific material this provision names.
```

```
id:         F-11
obligation: DATA-DISCLOSURE
verdict:    REFERRED  (REF-05)
severity:   —
provision:  admin-20-871-requirements.md:L42
quote:            3.   If not disclosed on the employer or employment agency's website,
            information about the type of data collected for the automated employment
            decision tool, the source of such data and the employer or employment agency's
            data retention policy shall be available upon written request by a candidate or
            employee. Such information shall be provided within 30 days of the written
            request.
searched:   as F-10
observed:   The website disclosure limb was checked and the material was not found
            (F-10). The statute's alternative limb is satisfied by responding to a
            written request within 30 days. Whether such a request would be answered,
            and with what, is not publicly observable.
finding:    The web-disclosure route was not satisfied at the locations searched. The
            written-request route cannot be tested from public sources. REF-05 is open.
```

---

## Bound Referrals

```
REF-01  scope determination                                          BLOCKING
provision: AEDT-DEF-SUBST  (rcny-5-300-definitions.md:L23)
quote:           i.   to rely solely on a simplified output (score, tag, classification,
           ranking, etc.), with no other factors considered; or
                 ii.   to use a simplified output as one of a set of criteria where the
           simplified output is weighted more than any other criterion in the set; or
                 iii.   to use a simplified output to overrule conclusions derived from
           other factors including human decision-making.
question:  In screening candidates for New York City positions, or candidates residing
           in the city, does Robert Half rely solely on the output of TalentMatch® or
           any related matching software, weight that output more than any other
           criterion in the set, or use it to overrule conclusions reached by
           recruiters or other means?
evidence:  Robert Half's own description of how the matching output enters a screening
           or submission decision — recruiter operating instructions, the internal
           screening or submittal policy, the applicant-tracking configuration, or the
           vendor specification for TalentMatch®.
once answered, if YES →  The tool is an AEDT. All obligations become live and are
           adjudicated on the findings recorded above.
once answered, if NO  →  Local Law 144 does not apply to it. Every obligation above
           resolves NOT APPLICABLE.
status:    OPEN
```

```
REF-02  notice delivery
provision: NOTICE-METHOD  (rcny-5-304-notice.md:L26)
question:  Did Robert Half notify New York City candidates by U.S. mail or e-mail,
           under §5-304(b)(3), that an automated tool would be used in their
           assessment and which qualifications and characteristics it would assess?
evidence:  The candidate correspondence itself, or the applicant-tracking system's
           notice template and send log for New York City requisitions.
once answered, if YES →  NOTICE-USE, NOTICE-QUALS and NOTICE-METHOD resolve PASS,
           subject to REF-06 on timing, and NOTICE-ALT is then checked against the
           delivered notice's contents.
once answered, if NO  →  NOTICE-USE, NOTICE-QUALS, NOTICE-METHOD and NOTICE-ALT
           resolve FAIL, severity DISCRETE.
status:    OPEN
```

```
REF-03  duration window                                            CONDITIONAL — FIRED
fires when: SUMMARY-PUBLIC = FAIL          [condition met at F-01]
provision:  SUMMARY-DURATION  (rcny-5-303-published-results.md:L33)
quote:      distribution date posted for at least 6 months after its latest use of the AEDT
            for an employment decision.
question:   On what date did Robert Half last use this tool for an employment decision
            involving a candidate for a New York City position or a candidate residing
            in the city?
evidence:   Robert Half's own record of tool use, or a screening step observable in a
            live hiring process within the last six months.
once answered, if within 6 months →        SUMMARY-PUBLIC and SUMMARY-CONTENT resolve
                                           FAIL, severity ACCRUING.
once answered, if more than 6 months ago → The §5-303(c) duty has expired. Both
                                           resolve NOT APPLICABLE.
status:     OPEN
```

```
REF-04  bias audit existence and date
provision: AUDIT-CURRENCY  (admin-20-871-requirements.md:L21)
question:  Has the tool been the subject of a bias audit, and on what date was that
           audit conducted?
evidence:  The independent auditor's report or engagement record, or the vendor's
           audit certificate for TalentMatch®.
once answered, if an audit was conducted within one year of use →  AUDIT-CURRENCY
           resolves PASS.
once answered, if no audit exists, or the most recent was conducted more than one
           year before use →  AUDIT-CURRENCY resolves FAIL, severity ACCRUING.
status:    OPEN
```

```
REF-05  written-request channel
provision: DATA-DISCLOSURE  (admin-20-871-requirements.md:L42)
question:  If a candidate submitted a written request under §20-871(b)(3), did Robert
           Half provide the type of data collected for the tool, the source of that
           data, and its retention policy for that data, within 30 days?
evidence:  Robert Half's log of §20-871(b)(3) requests and its responses, or a request
           submitted by a candidate together with the reply and its date.
once answered, if YES →  DATA-DISCLOSURE resolves PASS.
once answered, if NO  →  DATA-DISCLOSURE resolves FAIL, severity DISCRETE.
status:    OPEN
```

```
REF-06  notice timing
provision: NOTICE-USE  (admin-20-871-requirements.md:L31)
question:  For New York City candidates, was the notice delivered at least ten
           business days before the tool was used in their assessment?
evidence:  The send timestamps on the notices, set against the tool's first
           assessment timestamp for the same candidates.
once answered, if ten business days or more →  the timing condition in
           §20-871(b)(1) and (2) is satisfied; NOTICE-USE and NOTICE-QUALS then
           resolve on REF-02.
once answered, if fewer than ten business days →  NOTICE-USE and NOTICE-QUALS
           resolve FAIL, severity DISCRETE, regardless of REF-02.
status:    OPEN
```

---

## Obligation status

Every obligation is held. `REF-01` blocks all of them.

| Obligation | Finding | Verdict on REF-01 = YES | Severity if FAIL |
| --- | --- | --- | --- |
| `AUDIT-CURRENCY` | F-05 | REFERRED (REF-04) | — |
| `SUMMARY-PUBLIC` | F-01 | FAIL, subject to REF-03 | `ACCRUING` |
| `SUMMARY-LOCATION` | F-02 | FAIL | `ACCRUING` |
| `SUMMARY-CONTENT` | F-03 | FAIL, subject to REF-03 | `ACCRUING` |
| `SUMMARY-LINK` | F-04 | NOT APPLICABLE | — |
| `NOTICE-USE` | F-06 | REFERRED (REF-02, REF-06) | — |
| `NOTICE-QUALS` | F-07 | REFERRED (REF-02, REF-06) | — |
| `NOTICE-ALT` | F-09 | REFERRED (REF-02) | — |
| `NOTICE-METHOD` | F-08 | REFERRED (REF-02) | — |
| `DATA-DISCLOSURE` | F-11 | REFERRED (REF-05) | — |
| `DATA-WEBPOST` | F-10 | FAIL | `DISCRETE` |

Severity is read off §20-872 and is recomputable from the mapping table in `rules.md`:

> `PENALTY-DAILY` — `admin-20-872-penalties.md:L23`
> ```
>    b.   Each day on which an automated employment decision tool is used in
> violation of this section shall give rise to a separate violation of
> ```
> `PENALTY-NOTICE` — `admin-20-872-penalties.md:L29`
> ```
>    c.   Failure to provide any notice to a candidate or an employee in
> violation of paragraphs 1, 2 or 3 of subdivision b of section
> 20-871 shall constitute a separate violation.
> ```

---

## Declined

**No bias audit was performed.** The calculations at §5-301 require applicant-level demographic data that is not public. It was not requested, not estimated, and not reconstructed. `rcny-5-301-bias-audit.md` and `rcny-5-302-data.md` ship in `reference/` so this line can be checked rather than trusted.

**No impact ratio was evaluated.** None was published, and had one been, the law sets no threshold it must meet.

**No conclusion is drawn that Robert Half Inc. has violated Local Law 144.** This report records what was present, what was absent, where the search looked, and on what date. That conclusion belongs to a tribunal.

---

## What would change this report

- Answering `REF-01`. Nothing below it resolves until then.
- A URL for either footer, and a site-wide enumeration of the employment section with per-term counts, would convert the absence findings from "absent at seven supplied documents" to "absent at an enumerated set of locations." That gap is the weakest part of this record.
- A wider posting sample across staffing areas and job families. Two postings support no conclusion about §5-304(b)(2) generally.
