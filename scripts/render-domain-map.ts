/**
 * Renders public/diagrams/domain-map.svg and locale variants
 * from src/data/method-domains.ts so the diagram cannot drift
 * from the canonical domain list.
 *
 * Visual language matches the existing editorial map (pastel
 * cards, ink #12352c, rx=8). A theme-aligned restyle is a
 * separate unmerged proposal.
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

type Box = { domain: (typeof methodDomains)[number]; x: number; y: number; index: number };

const BOX_W = 270;
const BOX_H = 64;
const COL = [32, 322, 612];
const ROWS_Y = [78, 168, 258, 348];

// Taxonomy groups: observe (2), molecules (2), living systems (3), machines (3).
const layout: Array<[number, number]> = [
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

if (layout.length !== METHOD_DOMAIN_COUNT) {
	throw new Error(`Diagram layout has ${layout.length} slots but there are ${METHOD_DOMAIN_COUNT} domains`);
}

const boxes: Box[] = methodDomains.map((domain, index) => {
	const [col, row] = layout[index]!;
	return { domain, x: COL[col]!, y: ROWS_Y[row]!, index: index + 1 };
});

const copy: Record<MethodLocale, { title: string; desc: string; overlap: string; example: string }> = {
	en: {
		title: `${domainCountCopy.en.phraseCap} (editorial map)`,
		desc: `Original diagram of the wiki's ${domainCountCopy.en.phrase}. Not copied from a third party. Each box links to that domain's landing page.`,
		overlap: 'The boxes overlap on purpose. A single project can sit in more than one domain.',
		example: 'Example filed under 8 and 10: signals from the nervous system used to move an assistive device.',
	},
	zh: {
		title: `${domainCountCopy.zh.phrase}（编辑地图）`,
		desc: `本维基${domainCountCopy.zh.phrase}的原始示意图，不是从第三方复制。每个方块链到该领域的首页。`,
		overlap: '方块可以重叠。同一个项目可以归入不止一个领域。',
		example: '归在 8 和 10 的例子：用神经系统的信号驱动辅助装置。',
	},
	th: {
		title: `${domainCountCopy.th.phrase} (แผนที่บรรณาธิการ)`,
		desc: `แผนภาพต้นฉบับของ${domainCountCopy.th.phrase}ในวิกินี้ ไม่ได้คัดลอกจากบุคคลที่สาม แต่ละกล่องลิงก์ไปยังหน้าโดเมนนั้น`,
		overlap: 'กล่องทับกันโดยตั้งใจ โครงการเดียวอยู่ได้มากกว่าหนึ่งโดเมน',
		example: 'ตัวอย่างที่จัดใน 8 และ 10: สัญญาณจากระบบประสาทใช้ขับอุปกรณ์ช่วย',
	},
};

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

function render(locale: MethodLocale): string {
	const t = copy[locale];
	const docTitle = locale === 'en' ? `${domainCountCopy.en.wordCap} biohacking domains` : t.title;
	const nodes = boxes
		.map((box) => {
			const href = domainHref(box.domain.slug, locale);
			const label = `${box.index} ${titleFor(box.domain, locale)}`;
			const blurb = blurbFor(box.domain, locale);
			return `    <a href="${escapeXml(href)}">
      <g>
        <rect x="${box.x}" y="${box.y}" width="${BOX_W}" height="${BOX_H}" rx="8" fill="${box.domain.fill}"/>
        <text x="${box.x + 16}" y="${box.y + 26}">${escapeXml(label)}</text>
        <text x="${box.x + 16}" y="${box.y + 46}" font-size="12" fill="#245">${escapeXml(blurb)}</text>
      </g>
    </a>`;
		})
		.join('\n');

	const neuro = boxes.find((box) => box.domain.slug === 'neurohacking')!;
	const bionic = boxes.find((box) => box.domain.slug === 'bionic')!;
	const midY = neuro.y + 32;
	const underY = neuro.y + BOX_H + 10;
	const arrowX1 = neuro.x + BOX_W;
	const arrowX2 = bionic.x;
	const arrowPath = `M${arrowX1} ${midY} H${arrowX1 + 8} V${underY} H${arrowX2} V${midY}`;

	return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 920 620" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(docTitle)}</title>
  <desc id="desc">${escapeXml(t.desc)}</desc>
  <rect width="920" height="620" fill="#f4f7f5"/>
  <text x="32" y="42" font-family="Georgia, serif" font-size="22" fill="#12352c">${escapeXml(t.title)}</text>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" fill="#12352c">
${nodes}
  </g>
  <text x="32" y="478" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#333">${escapeXml(t.overlap)}</text>
  <text x="32" y="506" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#333">${escapeXml(t.example)}</text>
  <path d="${arrowPath}" stroke="#12352c" stroke-width="1.5" fill="none" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0 0 L6 3 L0 6 Z" fill="#12352c"/>
    </marker>
  </defs>
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
