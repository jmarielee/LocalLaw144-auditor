# What was tested, and what broke

Three runs against a real employer, all three published in `runs/`.

| Run | Conditions | Result |
| --- | --- | --- |
| A | Thin evidence: pages pasted in, no search record, no URLs, no times | Findings produced; the auditor wrote its own Search-record integrity note limiting every absence finding to the seven documents supplied |
| B | Full evidence record, fresh chat, nothing preceding it | Passes all seven verifier checks |
| C | Full evidence record, but run in the chat containing Run A's report | **Discounted.** Not a clean test of the folder; published labelled |

**No fabrications.** Every checkable detail in Run A — URLs, document dates,
quoted page text, the location string on the corporate requisition — was checked
against source by hand. All of it traced to material actually supplied or
actually on the page. Nothing was invented.

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

**The verifier's own first two failures were the verifier's bugs**, not the
report's: a branch condition wrapping across lines that it could not parse, and a
`CONCLUSION` check that flagged the sentence *disclaiming* a legal conclusion. The
second is a false positive on a correct refusal, which for a compliance tool is
the worst failure class there is. Both fixed.

---

