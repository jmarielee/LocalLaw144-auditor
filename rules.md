# Rules

How the audit runs, in order. How findings are written. How severity is decided.

Nothing here is a matter of judgement. If a step below tells you to stop, you
stop.

---

## Verdicts

Exactly four, per obligation:

| Verdict | Means |
| --- | --- |
| `PASS` | Checked against the provision and found satisfied, on the date of the audit |
| `FAIL` | Checked and found not satisfied, with the search recorded |
| `NOT APPLICABLE` | A trigger in the law is not met, and you can name which one |
| `REFERRED` | Cannot be settled from public sources. A Bound Referral is open |

There is no fifth verdict. There is no "partial," no "likely," no "appears to."

The report's **overall state** is `AWAITING HUMAN DETERMINATION` if any obligation
is `REFERRED`. Otherwise it is the aggregate of the four obligations. Use that
exact wording — it appears identically in `identity.md`, `README.md`, and here.

---

## The passes

### Pass 0 — Scope. This always fires and it always blocks.

Whether the law applies at all turns on `AEDT-DEF-SUBST`
(`rcny-5-300-definitions.md:L23`): does the employer rely solely on a simplified
output, weight it above every other criterion, or use it to overrule conclusions
reached by other means?

That is a fact about how an employer runs its process. It is never publicly
observable. So Pass 0 always produces `REF-01`, always open, and no obligation
below receives a verdict until it is answered.

Record what you *can* observe — a named vendor, a described screening step, a
posted process — as evidence attached to the referral, never as an answer to it.

Two other scope conditions, both checkable and both worth recording:

- **Geography.** `AEDT-DEF-EMPDEC` reaches screening for hiring or promotion
  within the city. If no posting is for a position in New York City and no
  candidate is stated to reside there, note it. It does not resolve `REF-01`.
- **Exclusions.** `AEDT-DEF-EXCLUDE` names tools outside the definition. If the
  observed tool is plainly one of them, that is a `NOT APPLICABLE` you can reach.

### Pass 1 — Locate the employment section.

§5-303(a) and §5-304(b)(1) and (d)(1) all attach to *the employment section of
the website*. Find it and record its URL before checking anything.

If you cannot find one, that is not a failure of any obligation. It is a
`REFERRED` on every obligation that depends on it, with the locations you tried
recorded. Write it as one referral, not four.

### Pass 2 — The published summary and the distribution date.

Against `SUMMARY-PUBLIC`, `SUMMARY-LOCATION`, `SUMMARY-CONTENT`, `SUMMARY-LINK`.

`SUMMARY-DURATION` is **not** checked here. See "Conditional referrals" below.

Finding a summary is not a `PASS`. §5-303(a)(1) enumerates what it must contain,
and each element is checked separately:

- date of the most recent bias audit
- source and explanation of the data used
- number of individuals assessed who fall in an unknown category
- number of applicants or candidates
- selection rates or scoring rates, as applicable
- impact ratios for all categories
- the distribution date of the tool (§5-303(a)(2))

A summary missing any enumerated element is a `FAIL` on `SUMMARY-CONTENT`,
naming which elements are absent. It may still `PASS` on `SUMMARY-PUBLIC`.

If the summary is reached by a link, `SUMMARY-LINK` requires that the link be
clearly identified as leading to bias-audit results. A link labelled only
"compliance" or "legal" does not satisfy it.

**You do not evaluate the numbers.** A published impact ratio of 0.4 is a `PASS`
on `SUMMARY-CONTENT` if the element is present. The law requires publication, not
a threshold. See `identity.md`.

### Pass 3 — Candidate notice.

Against `NOTICE-USE`, `NOTICE-QUALS`, `NOTICE-ALT`, `NOTICE-METHOD`.

§5-304(b) permits three delivery methods for candidates: the employment section
of the site, a job posting, or direct mail or email. You can observe the first
two. You cannot observe the third.

Observing the second requires a sample, not one posting. See "Search discipline"
above: boilerplate varies by staffing area, so a single posting without notice
supports no finding about postings generally.

So: if notice is found by method (1) or (2), `PASS`. If not found, the verdict is
`REFERRED`, not `FAIL` — because method (3) is invisible to you. This is the
single most important place not to overclaim, and the place where a careless
auditor manufactures a violation.

The ten-business-day timing requirement is almost never publicly determinable.
Treat it as a separate referral rather than folding it into the notice verdict.

`NOTICE-ALT` requires the notice to include instructions for requesting an
alternative selection process or accommodation. If you found a notice, check it
for those instructions; absence is a `FAIL` you can reach.

### Pass 4 — The data disclosure.

Against `DATA-DISCLOSURE`, `DATA-WEBPOST`.

§5-304(d) requires three things on the employment section, all publicly
checkable: the AEDT data retention policy, the type of data collected and its
source, and instructions for making a written request. Each is checked
separately. This obligation is the least known and the most often absent.

---

## Search discipline

These rules were derived from screening failures observed on 2026-09-10, not
designed in advance. Each one caught a false or missed result in practice.

**One term per search.** Never enter multiple terms as a single string. Browser
find and most site searches have no OR operator; a combined string searches for
that literal phrase and returns a confident zero without ever testing the terms.
Record a count for each term separately.

**A term set narrows a page for reading. It does not replace reading it.** A
fixed list finds disclosures written in the words you anticipated and misses
those written differently. Any page where any term hits must be read in full
around the hit, and any page reached from a candidate-facing flow must be read
regardless of whether a term hit at all.

The working term set: `automated` · `bias` · `New York` · `AEDT` ·
`artificial intelligence` · `algorithm` · `matching` · `screening`. It is a
starting point and is extended whenever a relevant disclosure is found that none
of its terms would have surfaced.

**Never cite a quote to a document you have not confirmed contains it.** Record
the URL a quote was read from at the moment you read it. A quote reached by
clicking through several pages is attributed to the page it is actually on, not
to the page you started from.

**Sample across staffing areas and job families.** Posting boilerplate varies
between them. No conclusion about notice delivery under §5-304(b)(2) may rest on
a single posting; a posting that carries no notice establishes only that *that*
posting carries none.

---

### Pass 5 — Compile.

Every obligation appears in the report, including the passes and the
not-applicables. An obligation you did not reach is `REFERRED`, never omitted.

---

## The finding format

Every finding, pass or fail:

```
id:         F-03
obligation: SUMMARY-CONTENT
verdict:    FAIL
severity:   ACCRUING
provision:  rcny-5-303-published-results.md:L21
quote:      The date of the most recent bias audit of the AEDT and a summary of
            the results, which shall include the source and explanation of the
            data used to conduct the bias audit
searched:   https://example.com/careers  (2026-09-11, 14:20 ET)
            https://example.com/careers/compliance  (2026-09-11, 14:23 ET)
observed:   A summary dated 2026-03-04 giving selection rates and impact ratios
            for sex and race/ethnicity categories. No unknown-category count and
            no source or explanation of the data used.
finding:    Two elements enumerated at §5-303(a)(1) are absent from the published
            summary.
```

Rules on those fields:

- **A `verdict` printed while a blocking referral is open is written as held.**
  When `REF-01` or any other blocking referral is `OPEN`, a finding block that
  would otherwise read `verdict: FAIL` reads `verdict: FAIL (held — REF-01)`, and
  the same for `PASS` and `NOT APPLICABLE`. The obligation's live verdict is
  `REFERRED` until the blocking referral is answered. Printing a bare verdict in a
  report whose header states that no obligation carries one is a contradiction a
  reader will find before you do.
- **`quote` must appear verbatim in the cited `reference/` file at the cited
  line.** If you cannot produce the quote, you do not have a finding. Drop it.
- **`searched` records URLs and timestamps.** A finding of absence with no search
  record is not a finding.
- **`observed` is what you saw.** `finding` is what that means against the
  provision. Neither may say anyone violated the law.
- Never write "violates," "unlawful," "non-compliant," or "in breach" of a named
  party. Write what is present, what is absent, and which provision requires it.

---

## Severity

Severity is read off §20-872. It is not a judgement about how bad something is —
it is which penalty mechanic the statute attaches to that obligation.

Two values, and only two, because the statute draws exactly one distinction:

| Severity | When | Why |
| --- | --- | --- |
| `ACCRUING` | The obligation sits under §20-871(a) — the use conditions | §20-872(b): *each day* the tool is used in violation is a separate violation |
| `DISCRETE` | The obligation sits under §20-871(b) — the notices | §20-872(c): failure to give notice is a separate violation, with no daily multiplier stated |

Mapping:

| Obligation | Sits under | Severity |
| --- | --- | --- |
| `AUDIT-CURRENCY` | §20-871(a)(1) | `ACCRUING` |
| `SUMMARY-PUBLIC` | §20-871(a)(2) | `ACCRUING` |
| `SUMMARY-LOCATION` | §20-871(a)(2) via §5-303 | `ACCRUING` |
| `SUMMARY-CONTENT` | §20-871(a)(2) via §5-303 | `ACCRUING` |
| `SUMMARY-LINK` | §20-871(a)(2) via §5-303 | `ACCRUING` |
| `NOTICE-USE` | §20-871(b)(1) | `DISCRETE` |
| `NOTICE-QUALS` | §20-871(b)(2) | `DISCRETE` |
| `NOTICE-ALT` | §20-871(b)(1) via §5-304(a) | `DISCRETE` |
| `NOTICE-METHOD` | §20-871(b)(1)–(2) via §5-304(b) | `DISCRETE` |
| `DATA-DISCLOSURE` | §20-871(b)(3) | `DISCRETE` |
| `DATA-WEBPOST` | §20-871(b)(3) via §5-304(d) | `DISCRETE` |

`SUMMARY-DURATION` is absent from this table on purpose. It is never a standalone
`FAIL` — it can only decide whether another obligation's failure stands. It
therefore carries no severity of its own. See "Conditional referrals."

`PASS`, `NOT APPLICABLE` and `REFERRED` carry no severity. Severity attaches to
`FAIL` only.

Anyone can recompute any severity in this report by reading the table above and
the two provisions it cites. If a severity in a report does not match this table,
the report is wrong.

---

## Bound Referrals

When a question cannot be settled from public sources, you write a Bound Referral.
Five fields, all mandatory — including on referrals you generate yourself beyond
the ones named in this file:

```
REF-02  notice delivery
provision: NOTICE-METHOD  (rcny-5-304-notice.md:L26)
question:  Did the employer notify New York City candidates by U.S. mail or
           email at least 10 business days before using the tool?
evidence:  The employer's candidate correspondence, or its applicant-tracking
           system's notice template and send log.
once answered, if YES →  NOTICE-USE and NOTICE-QUALS resolve PASS.
once answered, if NO  →  Both resolve FAIL, severity DISCRETE.
status:    OPEN
```

Constraints:

- **Every referral carries a `quote`**, verbatim from the `reference/` file its
  provision cites, exactly as a finding does. A referral asserts that a provision
  cannot be settled from public sources; that assertion cites the provision, and a
  citation without its text is the thing this folder exists to refuse. This binds
  referrals the auditor writes on its own initiative as much as the ones specified
  here.
- **The question must be answerable.** "Is this compliant?" is not a question, it
  is the thing you were asked to determine. A referral question names one fact a
  person can look up or confirm.
- **Both branches must be committed before the answer arrives**, and each branch
  must name a verdict from the four above. A branch that says "then investigate
  further" is not a bound outcome and fails verification.
- **A branch may defer to another referral only by enumeration.** Some
  obligations turn on two facts, neither publicly observable, held by different
  referrals. Timing and delivery are the standing example: `NOTICE-USE` needs
  both whether a notice was sent and whether it was sent ten business days
  ahead. A branch in that position may say the verdict follows another
  referral's answer **only if it names the verdict under every combination**:

  ```
  once answered, if YES →  the timing element is satisfied; NOTICE-USE takes
             the verdict REF-02 assigns — PASS if REF-02 is YES,
             FAIL (DISCRETE) if REF-02 is NO.
  once answered, if NO  →  NOTICE-USE resolves FAIL, severity DISCRETE,
             whatever REF-02 is answered.
  ```

  Every combination reaches a named verdict, so nothing is reopened when the
  answers arrive. A deferral that leaves any combination unnamed is not a bound
  outcome and fails verification, exactly as "investigate further" does. Never
  chain a deferral through more than one other referral: two referrals may
  jointly determine an obligation, but the enumeration must be writable as a
  table a reader can check.
- **A branch is a consequence, not a verdict.** Writing a referral resolves
  nothing. While it is `OPEN`, the obligations it governs are `REFERRED` and the
  report is `AWAITING HUMAN DETERMINATION`. A branch verdict exists only once a
  human has answered — which is why every branch is written `once answered, if…`.
- **A referral cannot resolve by silence or by time.** It stays `OPEN` until a
  human answers. It never ages into a pass.
- **You never answer your own referral.** Not from inference, not from a vendor's
  marketing page, not from what is most likely.

---

## Conditional referrals

Some referrals should not fire on every run. A referral with a **firing
condition** stays dormant unless that condition is met, and is simply absent from
reports where it is not.

A conditional referral carries one extra field, `fires when`, and is otherwise
identical to any other Bound Referral. Its firing condition must be a verdict
already reached in this report — never a guess about the world.

There is one at present.

### REF-03 — the duration window

§5-303(c) requires the summary to stay posted for at least six months after the
tool's last use for an employment decision. You cannot observe when a tool was
last used, and the asymmetry matters:

- **Summary present.** The duty is satisfied in the only sense observable from
  outside, whatever the last-use date was. Nothing to refer.
- **Summary absent.** Two different worlds produce that same observation: an
  employer in breach, and an employer whose §5-303(c) duty lawfully expired more
  than six months ago. The fact that separates them is not public.

So the referral fires only in the second case:

```
REF-03  duration window
fires when: SUMMARY-PUBLIC = FAIL
provision:  SUMMARY-DURATION  (rcny-5-303-published-results.md:L33)
question:   When did the employer last use this tool for an employment decision?
evidence:   The employer's own record of tool use, or a screening step observable
            in a hiring process within the last six months.
once answered, if within 6 months →       SUMMARY-PUBLIC and SUMMARY-CONTENT
                                          resolve FAIL, severity ACCRUING.
once answered, if more than 6 months ago →  The §5-303(c) duty has expired.
                                          Both resolve NOT APPLICABLE.
status:     OPEN
```

Note what the second branch does: it names, in advance, the single fact that
would clear an employer of an apparent failure. The auditor commits to that
outcome before knowing the answer. An auditor that can only find problems is a
complaint generator; this is the mechanism that makes it not one.

**Verification requirement.** A report in which `SUMMARY-PUBLIC` is `FAIL` and
`REF-03` is absent fails verification. A conditional referral whose condition is
met and which was not written is a skipped step, and it looks exactly like
thoroughness unless something checks for it.

---

## The gate

**A referral that blocks is marked `BLOCKING` on its header line**, after its
label. The scope referral always carries it. Without the marker a reader cannot
tell a blocking referral from an ordinary one, and neither can a verifier — a
report whose findings are written as held but which marks no referral `BLOCKING`
is incoherent and fails verification.

While any referral is `OPEN`, the report's overall state is
`AWAITING HUMAN DETERMINATION`.

That is not a pass. The report says so in those words, in the header, on every
run.

You do not offer a provisional verdict, a confidence estimate, a "probably
compliant," or a summary that a reader could quote as a clean bill of health. If
asked for one, refuse and name this rule.

`REF-01` blocks everything. Until scope is answered, no obligation has a verdict.

---

## Stop conditions

Stop and say which one fired:

- A quote you need does not appear in `reference/`.
- The determination would require non-public material.
- You are asked to conclude that a named party violated the law.
- You are asked for an overall verdict while a referral is open.
- You are asked to evaluate whether an impact ratio is acceptable.
- You are asked to act as the independent auditor defined at §5-300.

Refusal is an answer here. Name the rule and stop.
