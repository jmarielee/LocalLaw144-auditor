# What was tested, and what broke

Six runs, all six published in `runs/`. Three against one real employer, one
against a second real employer with live retrieval, one against a synthetic
fixture built to comply, one deliberately corrupted.

| Run | Conditions | Result |
| --- | --- | --- |
| A | Thin evidence: pages pasted in, no search record, no URLs, no times | Findings produced; the auditor wrote its own Search-record integrity note limiting every absence finding to the seven documents supplied |
| B | Full evidence record, fresh chat, nothing preceding it | Passed clean when it ran. Now fails on eleven defects that later checks exposed. Not amended — see below |
| C | Full evidence record, but run in the chat containing Run A's report | **Discounted.** Not a clean test of the folder; published labelled |
| D | Not a run. A copy of B with four defects planted in it | Fails on those four plus every defect Run B already carried — sixteen in total |
| E | Synthetic employer built to comply, fresh chat | Eleven PASS, zero NOT APPLICABLE, zero FAIL; passes verification. The answer key predicted nine PASS and one NOT APPLICABLE — the auditor diverged on `SUMMARY-LINK` and was right; see the addendum in `fixture-compliant-EXPECTED.md` |
| F | Accenture, a real subject with a substantive NY disclosure, fresh chat, live retrieval | Seven PASS, two FAIL, two REFERRED. First run with passes and failures in the same report. Opened a referral the rules never anticipated, and caught a defect in the reference files nobody had planted — see below |

**No fabrications.** Every checkable detail in Run A — URLs, document dates,
quoted page text, the location string on the corporate requisition — was checked
against source by hand. All of it traced to material actually supplied or
actually on the page. Nothing was invented.

---

## Run F — the live run, and the trap nobody planted

Runs A through C audited one employer; Run E is a fixture. Run F is a second
real subject, Accenture, which publishes a substantive New York disclosure. It
is the first run in this folder where passes and failures appear in the same
report: seven PASS, two FAIL, two REFERRED, seven Bound Referrals open.

**It failed its own quote check on all eighteen quotes, and the auditor
stopped.** The reference files carry 575 non-breaking spaces. amlegal's export
uses U+00A0 for indentation and after every numeral, so a quote rebuilt with
ordinary spaces is byte-different from the source and visually identical on
screen. The auditor rebuilt every quote from source bytes rather than reporting
a clean pass. `verify.js` normalises U+00A0, so the checker would have caught
this — but the auditor caught it first, without the checker in the project.
Nobody planted this. It was in the reference files from the day they were
retrieved, and no run before this one had touched it.

**Three things the folder did not tell it to do.**

It recorded `SUMMARY-CONTENT` as *not reached* rather than FAIL. Four of the
seven elements §5-303(a)(1) enumerates sit in a results table published as an
image the operator could not render. Reporting them absent would have been a
finding it did not make, so it opened `REF-05` with both branches committed.

It failed `SUMMARY-PUBLIC` on the distribution date and not on the summary. The
provider's page carries a field labelled "Distribution Date" giving a range the
surrounding text describes as the window of the provider's own applicant data.
§5-300 defines distribution date as the date the employer began using the tool.
That distinction is the whole finding.

It opened `REF-07` for a second tool. The hiring-journey page describes a
screening step where a score threshold automatically decides advancement,
distinct from the AI tool named in the New York Notices and not covered by the
linked audit. Whether its scoring derives from any of the four techniques in the
base definition is not publicly observable, so it is a referral rather than a
finding. It surfaced only from the rule that candidate-facing pages are read in
full; none of the run's search terms would have caught it.

**Two defects in this folder, found by the auditor auditing with it.**
`rules.md`'s `REF-03` template cited `rcny-5-303-published-results.md:L33` while
`provisions.md` resolves `SUMMARY-DURATION` to `L32` — the index was corrected
on submission day and the template it is copied from was not. And
`provisions.md` indexed `AEDT-DEF-AUDITOR` at `L52`, one line into the
definition, which opens at `L51`. Both are corrected. Neither was found by
`verify.js`, which checks findings against the index and does not check the
index against the provisions themselves. That is a sixth gap, and it is open.

---

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

The auditor produced eleven PASS and zero FAIL. The answer key had predicted nine
PASS, one NOT APPLICABLE and one PASS on the alternative limb; the divergence is
Divergence 2 below and the prediction was not amended. The four things the
fixture existed to test all held: the scope referral stayed open
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

The verifier reports those four, plus every defect Run B already carried, which
this file inherits as a copy of it — sixteen in total. The other fifteen quotes,
five referrals and three severities in the same file still verify clean, so the
file is not simply failing wholesale because something in it is wrong.

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

## A fourth gap, found on submission day

`QUOTE` confirmed a quote appears somewhere in the cited file. `LINE`
confirmed the cited line number is in range and non-blank. The two checks
were independent, so nothing confirmed the quote appears *on the line it
cites*. A finding could point at any line in the right file and still verify
clean, so long as the quote occurred anywhere else in that file. Demonstrable
by pointing a finding at an unrelated line number and watching the verifier
report all checks passed.

`ANCHOR` closes it: the quote must begin on the cited line, not merely occur
somewhere in the file.

Running it found five defects in Run B, not two. `F-10` cited `L42` where the
quote begins at `L40`, and `F-11` cited `L44` where the quote begins at `L43`
— plain off-by-one citations on findings. `REF-03`, `REF-05` and `REF-06` are
a further three: referral citations whose quote does not begin on the line
the referral cites either.

`REF-03`'s error traces to the same index row that produced F-10 and F-11's:
`reference/provisions.md`'s `SUMMARY-DURATION` row cited `L33`, but the text
its own quote reproduces — "(c) An employer or employment agency must keep
the summary of results and…" — begins at `L32`. That row is corrected. `F-10`
and `F-11`'s rows (`DATA-WEBPOST`, `DATA-DISCLOSURE`) were corrected
earlier, the same way. `REF-05` and `REF-06` cite a different pattern —
`provision:` names the top of the enumerated clause the quote is drawn from,
and the quoted fragment itself starts partway into it — and neither traces to
an index row error.

The index is corrected. The runs are left exactly as they ran, because
editing a past report to clear a board is the failure this folder exists to
refuse.

---

## A fifth gap, and two overclaims, found on submission day

An outside reviewer cloned this repo, re-implemented the citation checks
independently in Python rather than trusting `verify.js`, and diffed
`reference/` word-for-word against the enacted Local Law 144 and the DCWP
Notice of Adoption. The reference files came back clean. Three other things
did not.

**1. Nothing checked a finding's citation against the index.** `provisions.md`
resolves every obligation to a file and line, and no check confirmed a finding
actually cited that line. Four obligations — `SUMMARY-PUBLIC`, `SUMMARY-LINK`,
`DATA-DISCLOSURE`, `DATA-WEBPOST` — cited a line the index did not name, in
every report, and the quote then began partway into the provision and dropped
the words that create the obligation. `DATA-WEBPOST` is the duty to post
information *on the employment section of the website*; its quote omitted "on
the employment section of its website." The `ANCHOR` check could not catch this
and in one respect rewarded it, since a quote trimmed to match a wrong line
anchors cleanly.

`INDEX` closes it: a finding must cite the line `provisions.md` names for its
obligation. The four real runs are not amended and now carry the failure. The
fixture was corrected, because a fixture is a test rig rather than evidence and
a rig that cannot demonstrate the clean path is useless. The correction is four
citation lines and four extended quotes, and it is in the commit history.

**2. `SEVERITY` did not read `rules.md`.** It held a hand-transcribed copy of
the mapping table inside `verify.js`. Inverting the table in `rules.md` produced
no complaint at all — the checker reported "recomputed from the rules.md
mapping" while recomputing from its own copy. Two copies of a rule with nothing
comparing them is the same failure this folder refuses in a `reference/` folder
that only summarises the standard. `verify.js` now parses the table out of
`rules.md` at run time and throws if it cannot find it.

**3. `expect: fail` was a one-bit declaration.** A report documented to fail
absorbed any number of new defects without the board changing. Demonstrated by
pasting an invented provision — a certification requirement that appears nowhere
in NYC law — into Run B: the failure list grew, and the summary still printed
"5 of 5 reports behaved as documented" and exited 0. The declaration now carries
a count, `expect: fail (11)`, and a report that produces a different number of
failures than it declares is `UNEXPECTED` in either direction. More failures
means a new defect entered. Fewer means a documented defect was edited out or a
check was weakened.

A fourth item was raised and fixed: the `CONCLUSION` check matched only four
phrasings and treated the word "not" anywhere on a line as a disclaimer, so
"this employer is in breach of Local Law 144" passed, and so did "is in
violation of §5-304 but that is not our call." The negation must now sit before
the assertion, and the forbidden phrasings match the list in `rules.md`.

All four are the same failure class this file keeps recording: **a check that
runs and reports nothing looks exactly like a check that passes.**

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



---

## The resolution test — three tools disagreed, and the auditor was right

`rules.md` claims a referral's outcomes are committed before the answer arrives,
so a human supplies one input rather than re-opening the judgement. That claim
was tested by answering `REF-01` twice over, by two independent paths, and
comparing.

**Path 1 — `resolve.js`.** A script with no model, no network and no access to
the evidence, applying Run B's branches exactly as written:

```
node resolve.js runs/report-b-full-record.md REF-01=YES
→ 4 FAIL · 1 NOT APPLICABLE · 6 REFERRED
```

**Path 2 — the auditor.** A fresh chat, the folder, Run B, and the answer in
plain words. Result in `runs/resolution-b-REF-01-YES.md`:

```
→ 2 FAIL · 1 NOT APPLICABLE · 8 REFERRED
```

**They diverged on `SUMMARY-PUBLIC` and `SUMMARY-CONTENT`, and the auditor was
right.**

`REF-01`'s YES branch in Run B says those two become FAIL. They cannot. Both are
also governed by `REF-03`, the conditional duration referral, which is open — and
`REF-03`'s second branch resolves both NOT APPLICABLE if the tool was last used
more than six months ago. `REF-01`'s branch asserted a verdict under one of
`REF-03`'s answers without enumerating against the other.

That is precisely what the dependent-branch rule forbids: *a branch may defer to
another referral only by enumeration — it must name the verdict under every
combination.* Run B was produced before that rule existed. Its `REF-01` branch is
defective, and the auditor refused to follow it:

> `rules.md` says an obligation governed by an open referral is REFERRED, full
> stop — that rule beats a sentence inside a referral.

## What each tool did, and why the ranking matters

| | Behaviour on the defective branch |
| --- | --- |
| `verify.js` | **Passed it.** It checks that a branch names a verdict, not that the verdict is consistent with other referrals governing the same obligation. |
| `resolve.js` | **Applied it faithfully.** Faithful application is the whole of what it does; a resolver that second-guesses a branch is doing the judging the branch was supposed to have already done. |
| The auditor | **Caught it**, named the rule it violated, and declined. |

The claim under test was that a pre-commitment is binding. What the test actually
established is narrower and more useful: **the rules outrank the branches.** A
commitment written into a report does not override the governing rule, and the
auditor enforced that hierarchy against its own prior output.

Two further things it did unprompted, both recorded in the resolved report: it
refused to aggregate three live verdicts into any summary, because six referrals
remained open; and it recorded that the answer was held as the operator's
assertion, not verified against a public source — noting that if withdrawn, the
live verdicts return to REFERRED.

## The check `verify.js` was missing

This divergence exposed a gap in the verifier, now closed. It previously accepted
any branch that named a legal verdict. It now also fails a branch that assigns a
verdict to an obligation which another referral in the same report governs,
unless the branch enumerates against that referral's answers.

`runs/report-b-full-record.md` now fails this check, on exactly the two
obligations the auditor identified:

```
FAIL [REFERRAL] REF-01: branch "if YES" assigns F-02 (SUMMARY-PUBLIC) a verdict,
     but REF-03 also governs it and is OPEN. Enumerate against REF-03 or leave
     it REFERRED.
FAIL [REFERRAL] REF-01: branch "if YES" assigns F-04 (SUMMARY-CONTENT) a verdict,
     but REF-03 also governs it and is OPEN.
```

That is correct, and Run B is **not** being amended to hide it. The defect is
real, it is in a published run, and a repo that quietly edits its own history to
keep a clean board is the thing this folder exists to argue against. Run D
inherits the same two failures, since it is a copy of B.

The verifier that produced Run B's clean bill of health on Thursday now fails it.
That is the check improving, not the report degrading.

## Bugs found while building this check

Two, both mine, both recorded because the pattern is the same one that keeps
recurring — a check that runs and reports nothing looks exactly like a check
that passes.

**The list regex read only the last ID.** The branch says "F-02, F-03, F-04 and
F-11 become FAIL"; only F-11 sits next to the verb, so the first version caught
F-11 alone and Run B passed. The new check existed and found nothing, which read
as Run B being clean.

**The resolution output was verified as an audit report.** `resolve.js`'s output
records only the obligations that went live, so checking it for full coverage
reported eight obligations "absent" that were never meant to be there. It is now
named `resolution-b-REF-01-YES.md` rather than `report-*`, so the verifier does
not treat it as something it is not.
