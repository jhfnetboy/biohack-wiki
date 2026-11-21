/**
 * Renders public/diagrams/domain-map.svg and locale variants
 * from src/data/method-domains.ts so the diagram cannot drift
 * from the canonical domain list.
 *
 * v2 visual language: wiki theme tokens, system UI font, 12px
 * cards, teal accent, light/dark, plus a stacked mobile layout.
 * When the SVG is inlined on a page, :root[data-theme] rules in
 * custom.css override prefers-color-scheme so the site toggle wins.
 */
import fs from 'node:fs';
import path from 'node:path';
import {
	METHOD_DOMAIN_COUNT,
	blurbFor,
	domainCountCopy,
	domainHref,
	methodDomains,
	titleFor,
	type MethodLocale,
} from '../src/data/method-domains.ts';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'public/diagrams');

// Taxonomy groups: observe (2), molecules (2), living systems (3), machines (3).
const DESK_COL = [24, 312, 600];
const DESK_ROW = [72, 156, 240, 324];
const DESK_LAYOUT: Array<[number, number]> = [
	[0, 0],
	[1, 0],
	[0, 1],
	[1, 1],
	[0, 2],
	[1, 2],
	[2, 2],
	[0, 3],
	[1, 3],
	[2, 3],
];
const DESK_W = 268;
const DESK_H = 68;
const DESK_VIEW = { w: 892, h: 500 };

const MOB_X = 16;
const MOB_W = 368;
const MOB_H = 76;
const MOB_STRIDE = 84;
const MOB_START = 72;
const MOB_VIEW = { w: 400, h: 1040 };

if (DESK_LAYOUT.length !== METHOD_DOMAIN_COUNT) {
	throw new Error(`Diagram layout has ${DESK_LAYOUT.length} slots but there are ${METHOD_DOMAIN_COUNT} domains`);
}

const copy: Record<
	MethodLocale,
	{ title: string; kicker: string; desc: string; overlap: string; example: string; docTitle: string }
> = {
	en: {
		docTitle: `${domainCountCopy.en.wordCap} biohacking domains`,
		kicker: 'Editorial map',
		title: domainCountCopy.en.phraseCap,
		desc: `Diagram of the wiki's ${domainCountCopy.en.phrase}. Not copied from a third party. Each card links to that domain's landing page.`,
		overlap: 'Cards can overlap: one project may belong to more than one domain.',
		example: 'Example under 08 and 10: nerve signals used to move an assistive device.',
	},
	zh: {
		docTitle: domainCountCopy.zh.phrase,
		kicker: '编辑地图',
		title: domainCountCopy.zh.phrase,
		desc: `本维基${domainCountCopy.zh.phrase}的示意图，不是从第三方复制。每张卡片链到该领域的首页。`,
		overlap: '卡片可以重叠。同一个项目可以归入不止一个领域。',
		example: '归在 08 和 10 的例子：用神经系统的信号驱动辅助装置。',
	},
	th: {
		docTitle: domainCountCopy.th.phrase,
		kicker: 'แผนที่บรรณาธิการ',
		title: domainCountCopy.th.phrase,
		desc: `แผนภาพ${domainCountCopy.th.phrase}ของวิกินี้ ไม่ได้คัดลอกจากบุคคลที่สาม แต่ละการ์ดลิงก์ไปยังหน้าโดเมนนั้น`,
		overlap: 'การ์ดทับกันได้ โครงการเดียวอยู่ได้มากกว่าหนึ่งโดเมน',
		example: 'ตัวอย่างใน 08 และ 10: สัญญาณจากระบบประสาทใช้ขับอุปกรณ์ช่วย',
	},
};

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}


function wrapLine(value: string, max = 42): string[] {
	if (value.length <= max) return [value];
	const words = value.split(/(\s+)/);
	const lines: string[] = [];
	let current = '';
	for (const word of words) {
		if ((current + word).length > max && current.trim()) {
			lines.push(current.trim());
			current = word;
		} else {
			current += word;
		}
	}
	if (current.trim()) lines.push(current.trim());
	return lines.length ? lines : [value];
}

function pad(index: number): string {
	return String(index).padStart(2, '0');
}

function card(opts: {
	x: number;
	y: number;
	w: number;
	h: number;
	index: number;
	title: string;
	blurb: string;
	href: string;
	titleY: number;
	blurbY: number;
	idxX: number;
	titleX: number;
	blurbX: number;
}): string {
	const label = `${pad(opts.index)} ${opts.title}`;
	return `      <a class="node" href="${escapeXml(opts.href)}" aria-label="${escapeXml(label)}">
        <g transform="translate(${opts.x} ${opts.y})">
          <rect class="card" width="${opts.w}" height="${opts.h}" rx="12"/>
          <rect class="accent" width="4" height="${opts.h}" rx="2"/>
          <text class="idx" x="${opts.idxX}" y="${opts.titleY}">${pad(opts.index)}</text>
          <text class="title" x="${opts.titleX}" y="${opts.titleY}">${escapeXml(opts.title)}</text>
          <text class="blurb" x="${opts.blurbX}" y="${opts.blurbY}">${escapeXml(opts.blurb)}</text>
        </g>
      </a>`;
}

function render(locale: MethodLocale): string {
	const t = copy[locale];
	const deskCards = methodDomains
		.map((domain, i) => {
			const [col, row] = DESK_LAYOUT[i]!;
			return card({
				x: DESK_COL[col]!,
				y: DESK_ROW[row]!,
				w: DESK_W,
				h: DESK_H,
				index: i + 1,
				title: titleFor(domain, locale),
				blurb: blurbFor(domain, locale),
				href: domainHref(domain.slug, locale),
				titleY: 22,
				blurbY: 46,
				idxX: 16,
				titleX: 44,
				blurbX: 16,
			});
		})
		.join('\n');
	const mobCards = methodDomains
		.map((domain, i) =>
			card({
				x: MOB_X,
				y: MOB_START + i * MOB_STRIDE,
				w: MOB_W,
				h: MOB_H,
				index: i + 1,
				title: titleFor(domain, locale),
				blurb: blurbFor(domain, locale),
				href: domainHref(domain.slug, locale),
				titleY: 26,
				blurbY: 52,
				idxX: 16,
				titleX: 48,
				blurbX: 16,
			}),
		)
		.join('\n');

	return `<svg xmlns="http://www.w3.org/2000/svg" class="bh-domain-map" width="100%" role="group" aria-labelledby="bh-domain-map-title bh-domain-map-desc">
  <title id="bh-domain-map-title">${escapeXml(t.docTitle)}</title>
  <desc id="bh-domain-map-desc">${escapeXml(t.desc)}</desc>
  <style>
    .bh-domain-map {
      --dm-ink: #12352c;
      --dm-card: #ffffff;
      --dm-line: #d5e4dc;
      --dm-teal: #1f7a5c;
      --dm-banner: #f3f6f4;
      --dm-muted: #3d5a50;
      background: transparent;
    }
    @media (prefers-color-scheme: dark) {
      .bh-domain-map {
        --dm-ink: #e7f6f0;
        --dm-card: #13241f;
        --dm-line: #2c4a40;
        --dm-teal: #8ee0c2;
        --dm-banner: #121c19;
        --dm-muted: #b7d4c8;
      }
    }
    .bh-domain-map .bg { fill: var(--dm-banner); }
    .bh-domain-map .headline {
      font-family: var(--sl-font-system, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif);
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.03em;
      fill: var(--dm-ink);
    }
    .bh-domain-map .kicker {
      font-family: var(--sl-font-system, ui-sans-serif, system-ui, sans-serif);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      fill: var(--dm-teal);
    }
    .bh-domain-map .note {
      font-family: var(--sl-font-system, ui-sans-serif, system-ui, sans-serif);
      font-size: 13px;
      fill: var(--dm-muted);
    }
    .bh-domain-map .card {
      fill: var(--dm-card);
      stroke: var(--dm-line);
      stroke-width: 1;
    }
    .bh-domain-map .accent { fill: var(--dm-teal); }
    .bh-domain-map .idx {
      font-family: var(--sl-font-system, ui-sans-serif, system-ui, sans-serif);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      fill: var(--dm-teal);
    }
    .bh-domain-map .title {
      font-family: var(--sl-font-system, ui-sans-serif, system-ui, sans-serif);
      font-size: 14px;
      font-weight: 650;
      fill: var(--dm-ink);
    }
    .bh-domain-map .blurb {
      font-family: var(--sl-font-system, ui-sans-serif, system-ui, sans-serif);
      font-size: 12px;
      fill: var(--dm-muted);
    }
    .bh-domain-map .dm-mobile .headline { font-size: 24px; }
    .bh-domain-map .dm-mobile .title { font-size: 16px; }
    .bh-domain-map .dm-mobile .blurb { font-size: 13px; }
    .bh-domain-map .dm-mobile .idx { font-size: 12px; }
    .bh-domain-map a.node { cursor: pointer; }
    .bh-domain-map a.node:hover .card,
    .bh-domain-map a.node:focus-visible .card { stroke: var(--dm-teal); }
    /* Aspect-ratio and show/hide apply only to the standalone wrapper
       (a root .bh-domain-map that is not itself a hoisted layout). */
    svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) {
      width: 100%;
      height: auto;
      display: block;
    }
    svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) .dm-desktop,
    svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) .dm-mobile {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 641px) {
      svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) .dm-mobile { display: none; }
      svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) { aspect-ratio: ${DESK_VIEW.w} / ${DESK_VIEW.h}; }
    }
    @media (max-width: 640px) {
      svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) .dm-desktop { display: none; }
      svg.bh-domain-map:not(.dm-desktop):not(.dm-mobile) { aspect-ratio: ${MOB_VIEW.w} / ${MOB_VIEW.h}; }
    }
  </style>
  <svg class="dm-desktop" viewBox="0 0 ${DESK_VIEW.w} ${DESK_VIEW.h}" width="100%" height="100%" overflow="visible">
    <rect class="bg" width="${DESK_VIEW.w}" height="${DESK_VIEW.h}" rx="16"/>
    <text class="kicker" x="24" y="32">${escapeXml(t.kicker)}</text>
    <text class="headline" x="24" y="54">${escapeXml(t.title)}</text>
${deskCards}
    <text class="note" x="24" y="430">${escapeXml(t.overlap)}</text>
    <text class="note" x="24" y="450">${escapeXml(t.example)}</text>
  </svg>
  <svg class="dm-mobile" viewBox="0 0 ${MOB_VIEW.w} ${MOB_VIEW.h}" width="100%" height="100%" overflow="visible">
    <rect class="bg" width="${MOB_VIEW.w}" height="${MOB_VIEW.h}" rx="16"/>
    <text class="kicker" x="16" y="32">${escapeXml(t.kicker)}</text>
    <text class="headline" x="16" y="56">${escapeXml(t.title)}</text>
${mobCards}
    ${wrapLine(t.overlap, 40)
			.map((line, i) => `<text class="note" x="16" y="${930 + i * 22}">${escapeXml(line)}</text>`)
			.join('\n    ')}
  </svg>
</svg>
`;
}

const files: Array<[string, MethodLocale]> = [
	['domain-map.svg', 'en'],
	['domain-map-zh.svg', 'zh'],
	['domain-map-th.svg', 'th'],
];

for (const [name, locale] of files) {
	const dest = path.join(outDir, name);
	fs.writeFileSync(dest, render(locale));
	console.log(`wrote ${path.relative(root, dest)}`);
}
