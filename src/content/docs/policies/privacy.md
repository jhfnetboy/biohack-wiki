---
title: "Privacy"
titleZh: "隐私"
description: "What BioHack Wiki stores: a static site with no accounts, no analytics in this repository, and host logs outside it."
entityType: "policy"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 2
---

This repository builds a static site. It does not ship an account system, a newsletter form, or an analytics script.

Search is Pagefind, which runs in the browser on the built index. It does not send the query to a BioHack Wiki server, because there is no application server.

The host is expected to be Cloudflare Pages. Cloudflare, or any other host you choose, may keep connection logs under its own policy. That logging is not configured in this repository. Set the public site URL with the `SITE_URL` environment variable so canonical links and the sitemap name the real origin.

Do not send health information, prescriptions, or identity documents to the GitHub issue tracker. Those issues are public.
