<!--
# PROVISION INDEX
# Every finding this auditor emits cites an ID from this file.
# Every ID resolves to a file and line in reference/ that a reader can open.
# Line numbers are frozen against the reference files as committed. If a
# reference file is ever re-fetched or re-wrapped, this index must be rebuilt.
-->

# Provision index — NYC Local Law 144

Two instruments. The statute (Admin Code §§ 20-870 to 20-874, Local Law 144 of
2021) creates the obligations. The DCWP Final Rule (6 RCNY §§ 5-300 to 5-304,
effective 2023-05-06) defines the terms the obligations turn on and specifies
how each one is satisfied. Neither stands alone, so both ship here.

## Audited obligations

These are the provisions this auditor issues verdicts against. All of them
concern artifacts the law requires to exist in public.

| ID | Provision | Cite |
| --- | --- | --- |
| `AUDIT-CURRENCY` | Bias audit conducted no more than one year prior to use | `admin-20-871-requirements.md:L21` |
| `SUMMARY-PUBLIC` | Summary of results and distribution date publicly available on website before use | `admin-20-871-requirements.md:L24` |
| `SUMMARY-LOCATION` | Summary must sit on the employment section of the website, clear and conspicuous | `rcny-5-303-published-results.md:L18` |
| `SUMMARY-CONTENT` | Required contents of the published summary | `rcny-5-303-published-results.md:L21` |
| `SUMMARY-LINK` | Hyperlink permitted only if clearly identified as the bias-audit results | `rcny-5-303-published-results.md:L29` |
| `NOTICE-USE` | Notice that an AEDT will be used, ≥10 business days before use | `admin-20-871-requirements.md:L31` |
| `NOTICE-QUALS` | Notice of the job qualifications and characteristics assessed | `admin-20-871-requirements.md:L36` |
| `NOTICE-ALT` | Notice must include instructions for requesting an alternative process or accommodation | `rcny-5-304-notice.md:L18` |
| `NOTICE-METHOD` | Permitted delivery methods for candidate notice | `rcny-5-304-notice.md:L26` |
| `DATA-DISCLOSURE` | Data type, source and retention policy on site, or on written request within 30 days | `admin-20-871-requirements.md:L42` |
| `DATA-WEBPOST` | Data policy information and request instructions posted on the employment section | `rcny-5-304-notice.md:L44` |

## Definitional provisions

Not audited. Cited by findings and by scope referrals, because whether the law
applies at all is settled here rather than in the obligations above.

`AEDT-DEF-SUBST` is the hinge. Its three prongs turn on how an employer weights
a tool's output in its own process, which is a fact about deployment and not a
fact about software. No verdict on any obligation below is reachable until that
question is settled by a human.

| ID | Provision | Cite |
| --- | --- | --- |
| `AEDT-DEF-TOOL` | Base definition of "automated employment decision tool" | `admin-20-870-definitions.md:L21` |
| `AEDT-DEF-EXCLUDE` | Express exclusions from the AEDT definition | `admin-20-870-definitions.md:L26` |
| `AEDT-DEF-EMPDEC` | "Employment decision" = screening for hiring or promotion within the city | `admin-20-870-definitions.md:L38` |
| `AEDT-DEF-SUBST` | The three prongs of "substantially assist or replace discretionary decision making" | `rcny-5-300-definitions.md:L23` |
| `AEDT-DEF-OUTPUT` | "Simplified output" — score, tag, categorisation, recommendation, ranking | `rcny-5-300-definitions.md:L102` |
| `AEDT-DEF-SCREEN` | "Screen" = determine whether a candidate should be selected or advanced | `rcny-5-300-definitions.md:L90` |
| `AEDT-DEF-AUDITOR` | "Independent auditor" and its three disqualifications | `rcny-5-300-definitions.md:L52` |

## Conditional provisions

Not audited directly. Cited only by a conditional referral, and never a
standalone verdict — the fact each one turns on is not publicly observable. Each
can only decide whether another obligation's failure stands, and only once a
human has answered the referral that cites it.

| ID | Provision | Cite | Fires when |
| --- | --- | --- | --- |
| `SUMMARY-DURATION` | Summary must stay posted at least 6 months after latest use | `rcny-5-303-published-results.md:L33` | `SUMMARY-PUBLIC` = FAIL |

## Severity anchors

Severity is read off the statute's own penalty structure, not assigned by
judgement. `PENALTY-DAILY` and `PENALTY-NOTICE` are why a single stale posting
and a single missing notice are not the same finding.

| ID | Provision | Cite |
| --- | --- | --- |
| `PENALTY-TIER` | Civil penalty tiers | `admin-20-872-penalties.md:L19` |
| `PENALTY-DAILY` | Each day of violating use is a separate violation | `admin-20-872-penalties.md:L23` |
| `PENALTY-NOTICE` | Failure to notify is a separate violation | `admin-20-872-penalties.md:L29` |

## Out of scope — shipped so the boundary is checkable

This auditor does not perform a bias audit. It cannot: the calculations below
require applicant-level demographic data that is not public and that this
auditor never requests. These sections are included so a reader can open them
and see exactly what was declined, rather than taking the scope line on trust.

| ID | Provision | Cite |
| --- | --- | --- |
| `BIASAUDIT-CALC` | What a bias audit must calculate | `rcny-5-301-bias-audit.md:L24` |
| `BIASAUDIT-DATA` | Historical vs test data requirements | `rcny-5-302-data.md:L19` |
