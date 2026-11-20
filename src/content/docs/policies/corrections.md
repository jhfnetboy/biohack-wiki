---
title: "Corrections"
titleZh: "更正政策"
description: "How to report an error in BioHack Wiki and what an editor changes when a source does not support a sentence."
entityType: "policy"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 1
---

If a sentence is wrong, unsupported, or out of date, open a GitHub issue or a pull request on [jhfnetboy/biohack-wiki](https://github.com/jhfnetboy/biohack-wiki). Name the page, the sentence, and the document that contradicts it.

An editor should:

1. Remove or rewrite the sentence so it matches a source that was opened.
2. Add or replace the `sources` entry, including the access date.
3. Update `lastReviewed`.
4. If the remaining page no longer supports a reviewed status, switch it to `stub` and set `noindex: true`.

Do not leave a known error in place because a later pass might fix it. Corrections are part of the public history through git. This seed does not keep a separate corrections log.

Security reports about the site itself can use the same issue tracker. The site has no accounts and stores no reader profiles.
