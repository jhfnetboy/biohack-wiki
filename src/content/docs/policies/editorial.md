---
title: "Editorial and sourcing policy"
titleZh: "编辑与来源政策"
description: "What BioHack Wiki will publish: primary sources, evidence grades, stubs, and the claims it will not make."
entityType: "policy"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 0
---

## What counts as a source

A reviewed factual sentence points at an entry in that page's `sources` list. Preferred sources are the document itself: an agency page, a statute or rule, a prescribing information file, a trial registry record, or a paper. Secondary summaries are allowed only when they are labeled `type: secondary` and the page does not treat them as the underlying data.

Another BioHack Wiki page is context, not evidence.

## Evidence grades

`A` human randomized trial, `B` human observational study, `C` animal study, `D` in vitro, `E` anecdote, `unrated` when the page does not cite that design. Approval of a drug is not, by itself, a reason to mark a page `A` if the trials are not the thing being summarized.

## Stubs

If a fact cannot be checked, the page is a stub. The body contains the words **Stub, needs sourcing**, `status` is `stub`, and `noindex` is `true` so the sitemap omits it. A stub may still quote a source for the sentences that were checked. The stub banner means the page is not finished.

## Prohibited material

Editors do not add dosing protocols, titration schedules, injection or implantation technique, preparation or dissolution steps, or shopping guidance for a substance or device. Vendor records, if added later, require two independent sources before any claim that two parties are the same operator, and they still do not tell readers how to purchase.

Editors do not invent studies, sample sizes, effect sizes, quotations, prices, or dates. A meeting agenda is not a vote result unless the vote record was opened.

## Thin pages

Automatically generated pages are not part of this seed. The project note for later generators is: do not mark a page indexable until it has at least three independent data fields and one reviewed paragraph. Otherwise set `noindex`.

## Review

`lastReviewed` is the date a person last compared the page to its sources. `reviewedBy` is optional until an editor name is real.
