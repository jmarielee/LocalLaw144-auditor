# Screening log

Every URL tried, whether it resolved, and when. Empty results are entries.

Fill this in **as you go**, not afterward. This file becomes the `searched:`
field in every finding of absence, and a finding of absence without a search
record is not a finding.

Times are Eastern. Times given to the minute were recorded at the moment of the
action. Times given as a window were not recorded at the time and are bounded by
the recorded times either side; they are stated as windows rather than estimated
to the minute, because an exact time that was not observed would be invented.

---

## Candidates

| # | Employer | Domain | Screened? |
| --- | --- | --- | --- |
| 1 | Robert Half | roberthalf.com and careers.roberthalf.com | screened 2026-09-10 |
| 2 | Randstad | — | not screened |
| 3 | Adecco | — | not screened |
| 4 | Kelly Services | — | not screened |

Robert Half was screened first and produced enough material to audit, so the
remaining three were not screened. They are listed to record that the target was
chosen from a shortlist rather than picked alone.

---

## Employer 1 — Robert Half

**Domain:** roberthalf.com (US site: https://www.roberthalf.com/us/en)
**Screened:** 2026-09-10

### Google site search

| Query | Result | Time |
| --- | --- | --- |
| `site:roberthalf.com "bias audit"` | **No results found** for the exact phrase. Google fell back to an unquoted search; the five returned pages are marketing/blog content (recruitment-bias articles dated 2018 and 2024, an AI-in-the-workplace article dated 2026-02-26). None is a published bias-audit summary. | 08:21 ET |
| `site:roberthalf.com "automated employment decision"` | **No results found** for the exact phrase. | 08:23 ET |
| `site:roberthalf.com AEDT` | **No results found.** | 08:25 ET |

All three site-search terms returned nothing on roberthalf.com. Careers-section
walk still required — §5-303 attaches to the employment section specifically, and
site search does not reach every page.

### Careers section walk

Robert Half is in scope twice: as an **employer** (its own hires) and as an
**employment agency** (screening candidates for placement with clients, which is
its core business). Both sides have separate sites and separate footers, so both
are walked.

**Job-seeker side** — roberthalf.com (placement candidates)

Footer columns observed 2026-09-10, 08:26 ET: Services · Areas of Expertise ·
Resources & Tools · About. Bottom bar: Fraud Alert | Government Notice |
Privacy Notice | Terms of Use | Do Not Sell or Share My Personal Information.

**Corporate careers side** — "Careers With Us"

Footer columns observed 2026-09-10, 08:25 ET: Join Us · Culture ·
About Robert Half · Legal. Legal column: Terms of use | Privacy policy |
Fraud alert | Government notice.

**Standard term set** applied by full-text find to every page walked, one term per
search, count recorded per term: `automated` · `bias` · `New York` · `AEDT` ·
`artificial intelligence` · `algorithm` · `matching` · `screening`.

**Why the set was extended (2026-09-10).** The first five terms were fixed before
screening began. On the Terms of Use page they returned a single hit
(`artificial intelligence`, § 17.1) and four zeros. The most significant sentence
found in this entire screening — "Your Candidate Information may be viewed by
Customers on the Sites according to Robert Half's matching algorithm" — contains
**none** of the five, and was found by reading the section, not by searching it.
`algorithm`, `matching` and `screening` were added as a result.

**Rule adopted:** a term set finds disclosures written in the words the auditor
anticipated and misses those written differently. Term search narrows a page for
reading; it does not substitute for reading it. Any page where a term hits must
be read in full around the hit.

**Absent from both footers:** any link named bias audit, AEDT, automated
employment decision, applicant notices, candidate notices, AI disclosure, or
transparency.

**Note:** the two sides use different privacy link names ("Privacy Notice" vs
"Privacy policy") and may be different documents. Log separately.

| URL tried | Resolved? | What was there | Time |
| --- | --- | --- | --- |
| Government Notice (job-seeker footer) | Yes | Service Contract Act wage notice for federal/DC government contract staffing; links to DOL poster (dol.gov/whd/regs/compliance/posters/govc.pdf). Nothing relating to automated employment decision tools, bias audits, or NYC LL144. | between 08:20 and 09:20 ET (exact time not recorded) |
| Privacy Notice — https://www.roberthalf.com/us/en/privacy | Yes. Last Updated: June 2026. | Full text reviewed. Five terms: `automated` = 1 (Section 2, "Market and Advertise" — automated email/text marketing, not employment screening); `bias` = 0; `New York` = 0; `AEDT` = 0; `artificial intelligence` = 0. Notice runs 18 sections and carries state-specific provisions for **California** and **Nevada** only. No New York section. No AEDT disclosure, no bias-audit reference, no alternative-process instructions. | 08:31 ET |
| Government notice (corporate footer) | Yes | Identical to the job-seeker side: Service Contract Act / Walsh-Healey wage notice, linking to DOL poster WH1313 (rev. 03/22). Covers minimum wage, fringe benefits, overtime, child labor, safety and health, enforcement. Nothing relating to automated employment decision tools, bias audits, or NYC LL144. | between 08:20 and 09:20 ET (exact time not recorded) |
| Terms of Use — https://www.roberthalf.com/us/en/terms | Yes | `artificial intelligence` = 1 (§ 17.1, see evidence section below); `automated` = 0; `bias` = 0; `New York` = 0; `AEDT` = 0. | between 08:20 and 09:20 ET (exact time not recorded) |
| Privacy policy (corporate footer) | Yes | Same document as the job-seeker Privacy Notice. All five standard terms: `automated` = 1 (marketing context only), `bias` = 0, `New York` = 0, `AEDT` = 0, `artificial intelligence` = 0. | between 08:20 and 09:20 ET (exact time not recorded) |

### Live NYC job postings

Two postings walked: one corporate role (Robert Half as **employer**) and one
client placement listing (Robert Half as **employment agency**).

| Posting | NYC position? | Five-term result | Time |
| --- | --- | --- | --- |
| Recruiting Manager, Technology (corporate / Careers With Us) | Yes | `New York` = 5 hits, all location references only. `automated` = 0, `bias` = 0, `AEDT` = 0, `artificial intelligence` = 0. No AEDT notice in the posting. | between 08:20 and 09:20 ET (exact time not recorded) |
| Technology role, ref 04838-0013496342-usen, Staffing Area: Technology (client placement) | Yes | No AEDT notice in the posting body or footer. Footer boilerplate differs from the Administrative posting: carries the tagline "Technology Doesn't Change the World, People Do.®" rather than **TalentMatch®**. Both footers carry the app line promising "notifications of AI-matched jobs". Links to Terms of Use and Privacy Notice only; no AEDT disclosure, no bias-audit link, no alternative-process instructions. | between 08:20 and 09:20 ET (exact time not recorded) |
| Workplace Experience Coordinator, ref 04860-0013476861-usen, Administrative & Customer Support (client placement, long-term contract, 8-month assignment) | Yes | No AEDT notice in the posting body. Posting carries **TalentMatch®**, a named proprietary matching product, and app copy promising "notifications of AI-matched jobs". Footer links to Terms of Use and Privacy Notice; no separate AEDT disclosure, no bias-audit link, no alternative-process instructions. | between 08:20 and 09:20 ET (exact time not recorded) |

### Public statements of automated matching (evidence for REF-01)

Three separate public statements that an automated matching system operates on
candidate data. None resolves the §5-300 prongs; all three attach to the scope
referral as observed evidence.

1. **Terms of Use § 17.1 "Registration and Use of Sites"** —
   https://www.roberthalf.com/us/en/terms — located 2026-09-10. Two distinct
   statements in one section:
   a. Robert Half's recruiting professionals "apply their expertise and utilize
      our proprietary artificial intelligence software to find job matches for
      Candidates faster", operating on Candidate Information (résumé, work
      history, education, experience, pay/compensation expectations, geographic
      location).
   b. **"Your Candidate Information may be viewed by Customers on the Sites
      according to Robert Half's matching algorithm."** — an algorithm governing
      which candidates a hiring Customer sees. Compare `AEDT-DEF-SCREEN`.
      This is the stronger of the two for scope purposes: (a) describes a human
      using a tool; (b) describes an algorithm determining whether a candidate is
      surfaced to an employer.
   The Terms of Use is a binding contract accepted by clicking "Apply Now" on a
   job posting. It is not the employment section of the website.
   **Correction of record:** this text was initially logged against
   roberthalf.com/us/en/privacy. It is not in that document. The privacy notice
   was reviewed in full and contains no AI or AEDT language.
2. Job posting footer — **TalentMatch®**, a trademarked matching product.
   Present in the Administrative & Customer Support posting
   (04860-0013476861-usen). **Not** present in the Technology posting
   (04838-0013496342-usen), which carries a different tagline.
3. Job posting footer — mobile app offers "notifications of AI-matched jobs".
   Present in both postings observed.

**Methodology note.** Posting footer boilerplate varies by staffing area. A
single posting is not representative, so no conclusion about notice delivery
under §5-304(b)(2) can rest on one. Sample across staffing areas.

### Notes

- **Search method correction (08:31 ET).** A first attempt entered
  `automated, bias, New York, AEDT` as a single find-on-page string and returned
  0/0. Browser find has no OR operator; it searched for that literal phrase and
  never tested the four terms. Result discarded and re-run one term at a time.
  Logged here because the discarded result looked exactly like a clean finding of
  absence.
- Robert Half publishes editorial content referencing bias-audit and AI-transparency
  requirements ("AI in the workplace: The future of work, today", 2026-02-26,
  roberthalf.com/insights/research). Context only — awareness of the regulatory
  landscape is not a §5-303 posting and satisfies no obligation.

---

## Selection

**Chosen for the headline audit:** Robert Half Inc.

**Why:** Covered in both capacities the law names — as an employer hiring for its
own positions on `careers.roberthalf.com`, and as an employment agency screening
candidates for placement with client companies on `roberthalf.com`. Both hosts
carry New York City positions. Terms of Use § 17.1 states publicly that
proprietary artificial intelligence software is used to find job matches and that
Candidate Information is viewed by Customers according to a matching algorithm,
which gives the scope referral something specific to attach to rather than an
empty question. Nothing resembling a bias-audit summary was found on either host.

**What the others showed:** Not screened. Robert Half produced enough material on
the first pass that the remaining three were not needed for this audit.

---

## Method corrections made during screening

Three recorded because they changed how the screening was done, and two of them
became rules in `rules.md`.

1. **Combined-term search returned a false zero.** A find-on-page entered as
   `automated, bias, New York, AEDT` returned 0/0. Browser find has no OR
   operator; it searched for that literal string. Result discarded, re-run one
   term at a time. → `rules.md`, Search discipline.

2. **A quote was attributed to the wrong document.** The § 17.1 passage about
   proprietary AI software was first logged against the Privacy Notice. Review of
   the full Privacy Notice showed the term does not appear there at all; the
   passage is in the Terms of Use. Corrected in place rather than silently fixed.
   → `rules.md`, never cite a quote to a document you have not confirmed contains
   it.

3. **The fixed term set missed the most significant sentence.** On the Terms of
   Use the five original terms returned one hit and four zeros. The sentence that
   matters most for scope — "Your Candidate Information may be viewed by Customers
   on the Sites according to Robert Half's matching algorithm" — contains none of
   the five and was found by reading the section, not by searching it. `algorithm`,
   `matching` and `screening` were added. → `rules.md`, a term set narrows a page
   for reading and does not replace reading it.
