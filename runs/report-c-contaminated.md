<!--
RUN C — CONTAMINATED. Not a clean test of this folder.

Conditions: the full evidence record was supplied, but the run executed in the
same chat that already contained Run A's complete report. The auditor could see
its own prior output; its closing line refers to "the previous run".

Nothing here is attributable to the folder alone. Some of what looks like
improvement over Run A may be the auditor building on its own earlier output
rather than reading the evidence record fresh. The two cannot be separated from
the transcript.

Published anyway, labelled, because a run that has to be discounted is part of
the record. Run B is the clean test: same evidence record, same prompt, new
chat, nothing preceding it.

Predates two rules.md changes — the held-verdict notation and the mandatory
quote field on referrals. Neither appears here.

expect: fail — predates the same two rules as Run A; also a contaminated run, see header
-->

# LL144 AUDIT REPORT — ROBERT HALF INC.

**Overall state: `AWAITING HUMAN DETERMINATION`**

Audit date: 2026-09-10. All times Eastern.
Evidence: `evidence-robert-half-2026-09-10.md`, retrieved from public sources by a human operator, no credentials used, nothing requested from Robert Half.
Standard: NYC Admin Code §§ 20-870–20-874; 6 RCNY §§ 5-300–5-304 (DCWP Final Rule, eff. 2023-05-06), both shipped verbatim in `reference/`.

Six Bound Referrals are open. `REF-01` blocks everything. No obligation carries a verdict. The verdicts recorded in the finding blocks are the verdicts that attach *once a human answers `REF-01` YES*. They are not verdicts now, and no provisional or aggregate state is offered.

---

## Pass 0 — Scope

**Robert Half Inc. appears in both covered capacities**, and the evidence record separates them by host:

| Host | Capacity | Evidence |
| --- | --- | --- |
| `roberthalf.com` | Employment agency — client placement listings, candidate registration, Terms of Use, Privacy Notice | E-1, E-2, E-4, E-5, E-6, E-8 |
| `careers.roberthalf.com` | Employer — corporate requisitions for positions at Robert Half itself (`JR-######`) | E-3, E-7 |

§20-871 binds both. Findings below are recorded against both hosts. `REF-01` is written once and covers both.

**Geography — checkable, and met.** E-1 is a New York, NY placement listing. E-3 is a corporate requisition located NY MIDTOWN NEW YORK, with `New York` = 5 hits, all location references. E-2's location was not recorded in the evidence record.

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

The software described at E-4 §17.1 is not plainly one of the enumerated exclusions. No `NOT APPLICABLE` is reachable on this ground.

**Scope evidence observed** — attached to `REF-01`, never an answer to it:

- E-4 §17.1 states that recruiting professionals apply their expertise and utilize proprietary artificial intelligence software to find job matches for Candidates, and that Candidate Information may be viewed by Customers according to Robert Half's matching algorithm. This is the only `artificial intelligence` hit on that page.
- E-1 carries the mark TalentMatch®. E-1 and E-2 both refer to notifications of AI-matched jobs.
- E-4 is accepted by clicking "Apply Now" on a placement listing, so a candidate is presented with it at the point of application.

Two things cut in opposite directions and are recorded without being weighed: the phrasing at E-4 §17.1 places recruiter expertise alongside the software, which bears on prong (i); and the same section describes Customer viewing of candidates as governed by a matching algorithm, which bears on prongs (ii) and (iii). Neither states how the output is weighted in a screening decision. That is a fact about deployment. It is not on any page, and this auditor does not infer it.

---

## Pass 1 — The employment section

Located on both hosts before any obligation was checked.

- `roberthalf.com` — placement listings under `/us/en/job/…` (E-1 URL recorded), with the job-seeker footer at E-6 (observed 08:26).
- `careers.roberthalf.com` — requisitions under `/global/en/job/JR-…` (E-3 URL recorded), with the corporate careers footer at E-7 (observed 08:25).

Both footers were enumerated column by column. Neither carries a link whose label refers to a bias audit, an automated tool, or New York City.

**Index verification.** A zero on a `site:` query means absence of the term only if the host is indexed. The evidence record establishes this for both hosts: `site:careers.roberthalf.com` returned results across `/global/urstudentfulltime`, `/global/benefits`, `/urstudentinternship`, `/global/inclusion` and `/global/urstudent` at 09:17; and the unquoted fallback on `roberthalf.com` at 08:21 returned five editorial pages from that host. Both hosts are indexed, so the zeros below are term zeros, not host zeros.

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
searched:   site:roberthalf.com "bias audit"                     (2026-09-10, 08:21)
            site:roberthalf.com "automated employment decision"   (2026-09-10, 08:23)
            site:roberthalf.com AEDT                              (2026-09-10, 08:25)
            site:careers.roberthalf.com                           (2026-09-10, 09:17)
            site:careers.roberthalf.com "bias audit"              (2026-09-10, 09:18)
            site:careers.roberthalf.com "automated employment decision"
                                                                  (2026-09-10, 09:20)
            site:careers.roberthalf.com AEDT                      (2026-09-10, 09:22)
            https://www.roberthalf.com/us/en/job/new-york-ny/workplace-exp-coordinator/
              04860-0013476861-usen                               (2026-09-10, 08:20–09:20)
            placement listing 04838-0013496342-usen               (2026-09-10, 08:20–09:20)
            https://careers.roberthalf.com/global/en/job/JR-258976/
              Recruiting-Manager-Technology-Midtown               (2026-09-10, 08:20–09:20)
            https://www.roberthalf.com/us/en/terms                (2026-09-10, 08:20–09:20)
            https://www.roberthalf.com/us/en/privacy              (2026-09-10, 08:31)
            job-seeker footer, all columns and legal row          (2026-09-10, 08:26)
            corporate careers footer, all columns                 (2026-09-10, 08:25)
            Government Notice page and linked DOL form WH1313     (2026-09-10, 08:20–09:20)
observed:   The exact phrase "bias audit" returns no results on either host. Google
            fell back to an unquoted search on roberthalf.com returning five editorial
            pages: recruitment-bias articles dated 2018-03-06 and 2024-07-08, and a
            2026-02-26 article on AI in the workplace. None is a summary of bias-audit
            results. "automated employment decision" and AEDT return no results on
            either host. No summary and no distribution date appear on any page
            examined. Neither footer offers a link to bias-audit results.
finding:    The summary and distribution date §20-871(a)(2) requires to be publicly
            available were not present at any location searched on 2026-09-10, on
            either the placement host or the corporate careers host.
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
searched:   as F-01, in particular the two footers (08:25, 08:26) and the three
            listing pages (08:20–09:20)
observed:   Both employment sections identified at Pass 1 were enumerated at footer
            level and examined at listing level. Neither carries the material §5-303(a)
            requires, conspicuously or at all.
finding:    Nothing satisfying §5-303(a) was located on the employment section of
            either host on 2026-09-10.
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
            checked one by one. All seven — audit date, source and explanation of the
            data, unknown-category count, number of applicants or candidates, selection
            or scoring rates, impact ratios for all categories, and the distribution
            date at §5-303(a)(2) — are absent because no summary is present.
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
searched:   job-seeker footer (2026-09-10, 08:26); corporate careers footer
            (2026-09-10, 08:25); Government Notice page and its linked PDF
            (2026-09-10, 08:20–09:20)
observed:   Neither footer presents any hyperlink as leading to bias-audit results.
            Available legal links are Fraud Alert, Government Notice, Privacy Notice,
            Terms of Use, Do Not Sell or Share My Personal Information on the
            job-seeker footer; Terms of use, Privacy policy, Fraud alert, Government
            notice on the corporate careers footer. Both "Government Notice" links
            resolve to the same page, which identifies itself as concerning Service
            Contract Act compensation for positions staffed with federal agencies, the
            District of Columbia and government prime contractors, and which links to
            U.S. Department of Labor form WH1313 REV 03/22 on minimum wages, fringe
            benefits, overtime, child labor, safety and health, and enforcement under
            the Walsh-Healey Public Contracts Act and the Service Contract Act. It is
            neither offered as, nor read here as, a bias-audit link.
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
observed:   No bias-audit date appears anywhere on either host. When no summary is
            posted, the date of any audit actually conducted is not observable from
            outside.
finding:    Whether a bias audit exists, and when it was conducted, cannot be settled
            from public sources. Absence of a published date is not evidence that no
            audit was conducted, and is not reported as such. REF-04 is open.
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
searched:   E-1 placement listing, Administrative & Customer Support, full footer text
            read (2026-09-10, 08:20–09:20)
            E-2 placement listing, Technology, full footer text read
                                                       (2026-09-10, 08:20–09:20)
            E-3 corporate requisition, term-screened   (2026-09-10, 08:20–09:20)
            job-seeker footer (08:26); corporate careers footer (08:25)
            Terms of Use (08:20–09:20); Privacy Notice (08:31)
observed:   Neither placement listing states that an automated employment decision
            tool will be used in connection with the assessment or evaluation of the
            candidate. Both carry a marketing paragraph referring to notifications of
            AI-matched jobs in the mobile app; that is a description of an app feature,
            not a statement that a tool will assess this candidate. E-3 returns
            automated = 0, bias = 0, AEDT = 0, artificial intelligence = 0.
            E-4 §17.1 describes AI software and a matching algorithm and is accepted
            by clicking "Apply Now", but it is a site-wide Terms of Use rather than a
            notice on the employment section, it does not state that a tool will be
            used in assessing the candidate for an employment decision, and acceptance
            occurs at the moment of application. Neither footer carries a notice.
finding:    No notice under §20-871(b)(1) was found by §5-304(b)(1) or (b)(2), the two
            methods observable from outside. Method (b)(3), U.S. mail or e-mail, is not
            observable. Per rules.md this is REFERRED, not FAIL. The sample covers two
            staffing areas — Administrative & Customer Support and Technology — and
            supports no conclusion about listings in the other three areas named on the
            job-seeker footer.
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
observed:   Both placement listings and the corporate requisition state job
            qualifications for the role. None states which qualifications or
            characteristics an automated tool will use in assessing the candidate.
            Those are different statements and only the second is what §20-871(b)(2)
            requires. E-4 §17.1 lists the Candidate Information a registrant supplies —
            résumé, name, email, phone, work history, education, experience,
            compensation expectations, geographic location — but describes it as
            enrollment information, not as the qualifications and characteristics a
            tool assesses.
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
observed:   Method (1) was checked on both hosts and no notice was found. Method (2)
            was checked on three postings across two placement staffing areas and one
            corporate requisition, and no notice was found. Method (3) is invisible
            from public sources.
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
searched:   E-3 corporate requisition (2026-09-10, 08:20–09:20); E-1 and E-2 placement
            listings (2026-09-10, 08:20–09:20)
observed:   E-3 carries an accommodation statement directing job seekers who need a
            reasonable accommodation to search or apply for a job to an HR email
            address and a toll-free number. It is framed around access to the
            application process and references no automated tool and no alternative
            selection process.
finding:    §5-304(a) attaches to the §20-871(b)(1) notice. No such notice was located,
            so its contents cannot be checked and no FAIL is reachable. The
            accommodation text at E-3 is recorded as observed and is not read as
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
searched:   Privacy Notice, full text, eighteen sections read   (2026-09-10, 08:31)
            Terms of Use, full text read                        (2026-09-10, 08:20–09:20)
            job-seeker footer (08:26); corporate careers footer (08:25)
            E-1, E-2, E-3 listings (08:20–09:20)
            site: queries on both hosts (08:21–09:22)
observed:   The Privacy Notice returns AEDT = 0, bias = 0, artificial intelligence = 0,
            New York = 0. Its single automated hit is in §2 "Market and Advertise" and
            concerns promotional communications sent by automated email, text message
            or postal mail — read in context, it has no bearing on this provision.
            §1 lists categories of personal information collected from Candidates and
            lists sources of personal information. §11 states retention criteria — the
            nature and timing of the relationship, legal and contractual obligations,
            and legal position based on statutes of limitation, litigation or
            regulatory investigations. §15 provides a privacy-rights webform and a
            toll-free number for access, deletion and correction requests. §13 addresses
            Nevada residents and §16 California residents; there is no New York section.
            None of this material identifies an automated employment decision tool.
            There is no statement of the type of data collected for such a tool, no
            statement of the source of that data, and no retention policy stated for it.
            No instructions appear for making the written request §20-871(b)(3)
            provides for. The Privacy Notice is a site-wide legal document linked from
            the footer, not information posted on the employment section.
finding:    All three items §5-304(d)(1)-(2) names — an AEDT data retention policy, the
            type and source of data collected for the tool, and written-request
            instructions — were absent from every location searched on 2026-09-10.
            General privacy-policy retention criteria, a general source list and a
            general privacy-rights webform were present and are recorded here; none of
            them is the AEDT-specific material this provision names.
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
observed:   The website-disclosure limb was checked and the material was not found
            (F-10). The statute's alternative limb is satisfied by responding to a
            written request within 30 days. Whether such a request would be answered,
            and with what, is not publicly observable. The privacy-rights webform at
            Privacy Notice §15 is a channel for access, deletion and correction
            requests under state privacy law; whether it functions as a §20-871(b)(3)
            channel cannot be determined without submitting a request.
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
question:  In deciding which candidates are advanced or submitted to Customers for
           New York City positions, or for candidates residing in the city, does
           Robert Half rely solely on the output of TalentMatch® or the matching
           algorithm described at Terms of Use §17.1, weight that output more than any
           other criterion in the set, or use it to overrule conclusions reached by
           recruiters or other means? Answer separately for the corporate requisition
           process on careers.roberthalf.com.
evidence:  Robert Half's description of how the matching output enters a submittal or
           screening decision — recruiter operating instructions, the internal
           submittal policy, applicant-tracking configuration, or the TalentMatch®
           vendor specification. For the corporate side, the equivalent for the
           careers.roberthalf.com platform.
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
           notice template and send log for New York City requisitions. The
           registration-gated candidate account area of roberthalf.com, which was not
           searched, would also settle whether a notice is delivered there.
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
evidence:  The independent auditor's report or engagement record, or a vendor audit
           certificate for TalentMatch®.
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
           submitted through the Privacy Notice §15 webform together with the reply
           and its date.
once answered, if YES →  DATA-DISCLOSURE resolves PASS.
once answered, if NO  →  DATA-DISCLOSURE resolves FAIL, severity DISCRETE.
status:    OPEN
```

```
REF-06  notice timing
provision: NOTICE-USE  (admin-20-871-requirements.md:L31)
question:  For New York City candidates, was the notice delivered at least ten
           business days before the tool was used in their assessment?
evidence:  Send timestamps on the notices, set against the tool's first assessment
           timestamp for the same candidates.
once answered, if ten business days or more →  the timing condition in §20-871(b)(1)
           and (2) is satisfied; NOTICE-USE and NOTICE-QUALS then resolve on REF-02.
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

## Bounds of this record

Four limits are recorded so a reader can weigh the absence findings rather than take them whole.

1. **Registration-gated pages were not searched.** No page behind sign-in was examined on either host. For `SUMMARY-*` this does not bite: §20-871(a)(2) requires the summary to be *publicly available*, and material behind registration is not. For `DATA-WEBPOST` the FAIL rests on §5-304(d)(1)'s requirement that the information sit on the employment section **in a clear and conspicuous manner**, which registration-gated material does not satisfy — that reading is stated here so a reader who disagrees can see exactly where the finding turns. For the notice obligations the gap is live and is carried in REF-02's evidence field.

2. **Three staffing areas were not sampled.** The job-seeker footer names five: Finance & Accounting, Technology, Marketing & Creative, Legal, and Administrative & Customer Support. Listings were read from two. Posting boilerplate varies between areas, so F-06 through F-08 speak to the two sampled areas and to no others.

3. **Three terms were added mid-screening.** `algorithm`, `matching` and `screening` were added after the corporate requisition was screened, and no counts for them are recorded on the Terms of Use or Privacy Notice either. On the Terms of Use this made no practical difference: `artificial intelligence` = 1 surfaced §17.1, which is where both later terms appear. On the corporate requisition it is an open item — a re-screen with the three terms is the cheapest remaining check in this audit.

4. **`site:` zeros are index zeros.** Both hosts were verified as indexed, which is what makes the zeros meaningful, but a page Google has not indexed would not appear. The footer enumeration and direct page reads are the stronger part of this record; the queries corroborate them.

---

## Declined

**No bias audit was performed.** The calculations at §5-301 require applicant-level demographic data that is not public. It was not requested, not estimated, and not reconstructed. `rcny-5-301-bias-audit.md` and `rcny-5-302-data.md` ship in `reference/` so this can be checked rather than trusted.

**No impact ratio was evaluated.** None was published, and had one been, the law sets no threshold it must meet.

**No conclusion is drawn that Robert Half Inc. has violated Local Law 144.** This report records what was present, what was absent, where the search looked, and when. That conclusion belongs to a tribunal.

---

The search-record defect flagged in the previous run is closed: every absence finding above now carries URLs, times, term counts, and index verification on both hosts. Item 3 under Bounds is the one screening step still outstanding.
