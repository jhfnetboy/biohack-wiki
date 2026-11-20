---
title: "Add a page"
titleZh: "如何添加页面"
description: "How to add a BioHack Wiki page: pick a template, fill the schema, cite sources, and do not add protocols."
entityType: "navigation"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 2
---

## 1. Copy a template

Templates live in `templates/` at the repository root, one file per entity type: compound, device, company, trial, study, vendor, regulation, glossary, topic, guide, and comparison. They are not published.

## 2. Save the page

English files go in `src/content/docs/`. The matching Simplified Chinese file goes in `src/content/docs/zh-cn/` with the same path. Starlight uses that pair for `hreflang`. If the Chinese file is missing, the build fails the internal-link check (`errorOnFallbackPages`).

Use a lowercase hyphenated slug. The folder is the section: `peptides/`, `neurotech/bci/`, `assistive/`, `regulation/`, and so on.

## 3. Fill the frontmatter

Required fields include `title`, `description` (40–200 characters), `entityType`, `lastReviewed`, and `status` (`draft`, `reviewed`, or `stub`). Stub pages set `noindex: true`. Reviewed pages that are not `navigation` or `policy` need at least one entry in `sources`, each with `url`, `title`, and `accessed`.

`evidenceLevel` stays `unrated` until the page cites a specific study design. Do not grade a claim from another wiki page.

## 4. Write only what you opened

Quote or paraphrase a document you opened. Record the access date. If you cannot check a fact, leave the section out or mark the page `stub` and include the words **Stub, needs sourcing**.

Do not add doses, titration, injection or implantation steps, preparation steps, or a shopping destination. Vendor pages, when they exist, record regulatory and quality events. They are not a shop.

## 5. Check

`node scripts/check-content.mjs` checks the schema rules above. `npm run build` runs Starlight's link validator and fails on broken internal links or broken heading anchors.
