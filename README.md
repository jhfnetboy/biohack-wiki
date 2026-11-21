# BioHack Wiki

An open, open-source wiki helping anyone, people and organizations alike, research and understand every area of biohacking and informing their decisions. Professionally tracked, continuously updated, objective and neutral.

Content is CC BY-SA 4.0 (`LICENSE-CONTENT`). Code is MIT (`LICENSE`). The public repository is https://github.com/jhfnetboy/biohack-wiki.

It is not medical advice, and it does not publish doses, injection or implantation technique, preparation steps, or shopping guidance.

English is the default locale at `/`. Simplified Chinese is at `/zh-cn/`. Thai is at `/th/`. The language picker lists English, 简体中文, and ไทย. Starlight emits `hreflang` alternates. Thai translates the homepage, About, principles, the ten domain landings, and the disclaimer, attribution, and license pages. Other Thai URLs fall back to English and show Starlight’s untranslated-content notice.

## Run locally

Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. The build fails if frontmatter does not match the schema, if a stub is missing `noindex`, or if an internal link or heading anchor is broken (`starlight-links-validator`).

Set the public origin before building so the sitemap, `robots.txt`, and canonical URLs match the deployment:

```bash
SITE_URL=https://biohack-wiki.example npm run build
```

`SITE_URL` must be an absolute `http` or `https` origin with no path. If it is unset, the build uses `https://biohack-wiki.pages.dev`. See `.env.example`.

Search indexing is off while the wiki is under construction. `ALLOW_INDEXING` defaults to unset, which the build treats as false. That writes `Disallow: /` in `robots.txt`, a sitewide `X-Robots-Tag: noindex, nofollow` in `dist/_headers`, and `<meta name="robots" content="noindex, nofollow">` on every page. The sitemap is still generated. Set `ALLOW_INDEXING=true` only when the owner wants the site indexed. Stub pages keep their own `noindex` either way.

Illustrations are WebP files in `src/assets/illustrations/`, rendered with Astro `<Image>`. Captions say “AI-generated illustration” / “AI 生成插图”. They are listed on the attribution page. They are not photographs of patients or branded devices. Original diagrams stay in `public/diagrams/`.

`node scripts/check-content.mjs` checks descriptions, review dates, stub indexing, and that reviewed non-policy pages have a source.

## Add a page

1. Copy a file from [`templates/`](templates/) into `src/content/docs/<section>/your-slug.md`.
2. Add the same path under `src/content/docs/zh-cn/`. The link checker requires every locale.
3. Fill the frontmatter. The docs collection extends Starlight with `entityType`, `domain`, `domains`, `evidenceLevel`, `regulatoryStatus`, `lastReviewed`, and `sources` (`url`, `title`, `accessed`, optional `type`).
4. Write only what you opened. If you cannot check a fact, set `status: stub`, `noindex: true`, and include the words **Stub, needs sourcing**.
5. Run `npm run build`.

Rules for what may be published are in [the editorial policy](src/content/docs/policies/editorial.md). Corrections go through git; see [the corrections policy](src/content/docs/policies/corrections.md).

## Taxonomy

Ten method domains (taxonomy v3), plus three goals. URL slugs are English. Older paths redirect.

| Domain | Path |
| --- | --- |
| Quantified self (wearables, CGM, HRV) | `/quantified-self/` |
| Environmental Signals (slug `lifestyle`) | `/lifestyle/` |
| Biochemical small molecules | `/biochemical/` |
| Peptides (first-level domain; path can later map to a peptides host) | `/peptides/` |
| Genetic (DNA/RNA only) | `/genetic/` |
| Cellular and regenerative | `/cellular/` |
| Microbiome | `/microbiome/` |
| Neurotech (slug `neurohacking`) | `/neurohacking/` |
| Cyborg implants | `/cyborg/` |
| Bionics | `/bionic/` |
| Goals: Restore, Enhance, Extend (healthspan) | `/goals/` |

Cross-cutting sections: [`/companies/`](src/content/docs/companies/index.md), [`/trials/`](src/content/docs/trials/index.md), [`/studies/`](src/content/docs/studies/index.md), [`/vendors/`](src/content/docs/vendors/index.md), [`/regulation/`](src/content/docs/regulation/index.md), [`/glossary/`](src/content/docs/glossary/index.md), [`/news/`](src/content/docs/news/index.md).

The vendor section is a place for regulatory and quality records. It is not a catalog.

Sidebar group labels are translated in `astro.config.mjs` (`zh-CN`). Starlight supplies the Simplified Chinese UI strings.

## Contribution rules

- Cite a document you opened. Another wiki page is not evidence.
- `evidenceLevel` stays `unrated` until the page cites a specific study design (`A` human randomized, `B` human observational, `C` animal, `D` in vitro, `E` anecdote).
- `layer` (`observe`, `intervene`, `augment`), `purpose` (`restoration`, `enhancement`, `both`), and `maturity` are editorial filing labels. Do not treat them as trial results.
- Do not invent studies, sample sizes, effect sizes, quotations, prices, or dates.
- Do not add dosing protocols, titration, injection or implantation technique, preparation steps, or shopping guidance.
- Stubs set `noindex: true` and stay out of the sitemap.
- A claim that two businesses are the same operator needs two independent sources, and still does not tell readers how to buy anything.

## Deploy on Cloudflare Pages

The site is static. No adapter is required.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `22` (`NODE_VERSION=22`) |
| Environment variable | `SITE_URL` = the production origin, for example `https://biohack-wiki.pages.dev` |

Production deploys should come from `main` after review. Do not push the site straight to `main` from a working branch.

`robots.txt` and `llms.txt` are generated at build time from `SITE_URL`. `llms.txt` lists the English pages and repeats the medical and sourcing limits. The sitemap is `@astrojs/sitemap` (`sitemap-index.xml`), with `hreflang` alternates for `en` and `zh-CN`. Stub pages are omitted from the sitemap and carry `noindex`.

## Stack

Pinned in `package.json` and `package-lock.json`:

- Astro 7.4.13, static output
- Starlight 0.43.1
- `@astrojs/sitemap` 3.7.6
- `starlight-links-validator` 0.27.0

Search is Pagefind, built into the static output. There is no application server and no analytics script in this repository.
