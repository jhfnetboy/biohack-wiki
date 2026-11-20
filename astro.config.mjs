import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import starlightLinksValidator from 'starlight-links-validator';
import { glossaryAutolink } from './src/plugins/glossary-autolink.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));

function siteOrigin() {
	const raw = process.env.SITE_URL || 'https://biohack-wiki.pages.dev';
	let url;
	try {
		url = new URL(raw);
	} catch {
		throw new Error(`SITE_URL is not a valid absolute URL: ${raw}`);
	}
	if (url.protocol !== 'http:' && url.protocol !== 'https:') {
		throw new Error('SITE_URL must use http or https');
	}
	if (url.pathname !== '/' || url.search || url.hash) {
		throw new Error('SITE_URL must be an origin with no path, query, or hash');
	}
	return url.origin;
}

function collectNoindex(dir, prefix = '') {
	const found = new Set();
	if (!fs.existsSync(dir)) return found;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (entry.name.startsWith('_')) continue;
		const full = path.join(dir, entry.name);
		const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
		if (entry.isDirectory()) {
			for (const item of collectNoindex(full, rel)) found.add(item);
			continue;
		}
		if (!/\.mdx?$/.test(entry.name)) continue;
		const raw = fs.readFileSync(full, 'utf8');
		const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
		if (!/(^|\n)noindex:\s*true\s*(\n|$)/.test(frontmatter)) continue;
		let slug = rel.replace(/\.mdx?$/, '');
		if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
		if (slug === 'index') slug = '';
		found.add(slug);
	}
	return found;
}

const noindex = collectNoindex(path.join(root, 'src/content/docs'));
const site = siteOrigin();
const legacyRedirects = JSON.parse(
	fs.readFileSync(path.join(root, 'src/data/legacy-redirects.json'), 'utf8'),
);
const allowIndexing = ['true', '1', 'yes'].includes(
	(process.env.ALLOW_INDEXING ?? '').trim().toLowerCase(),
);

const group = (label, zh, th, directory) => ({
	label,
	translations: { 'zh-CN': zh, th },
	items: [{ autogenerate: { directory } }],
});

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
	site,
	output: 'static',
	trailingSlash: 'always',
	redirects: legacyRedirects,
	markdown: {
		processor: satteri({
			mdastPlugins: [glossaryAutolink],
		}),
	},
	integrations: [
		starlight({
			title: {
				en: 'BioHack Wiki',
				'zh-CN': 'BioHack 知识库',
				th: 'BioHack Wiki',
			},
			description:
				'An open, open-source wiki helping anyone research every area of biohacking and inform decisions. Not medical advice.',
			head: allowIndexing
				? []
				: [
						{
							tag: 'meta',
							attrs: { name: 'robots', content: 'noindex, nofollow' },
						},
					],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
				th: { label: 'ไทย', lang: 'th' },
			},
			lastUpdated: false,
			credits: true,
			favicon: '/favicon.svg',
			editLink: {
				baseUrl: 'https://github.com/jhfnetboy/biohack-wiki/edit/main/',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/jhfnetboy/biohack-wiki',
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Banner: './src/components/Banner.astro',
				Footer: './src/components/Footer.astro',
				Hero: './src/components/landing/HomeHero.astro',
			},
			plugins: [
				starlightLinksValidator({
					// Thai covers the front door. Deeper articles fall back to English.
					errorOnFallbackPages: false,
					errorOnInconsistentLocale: true,
				}),
			],
			sidebar: [
				{
					label: 'Start',
					translations: { 'zh-CN': '开始', th: 'เริ่มต้น' },
					items: [
						{ label: 'Home', translations: { 'zh-CN': '首页', th: 'หน้าแรก' }, slug: '' },
						{
							label: 'What is biohacking',
							translations: { 'zh-CN': '什么是生物黑客', th: 'ไบโอแฮกกิงคืออะไร' },
							slug: 'overview/what-is-biohacking',
						},
						{
							label: 'Three layers',
							translations: { 'zh-CN': '三个层次', th: 'สามชั้น' },
							slug: 'overview/three-layers',
						},
						{
							label: 'Learning paths',
							translations: { 'zh-CN': '学习路径', th: 'เส้นทางการเรียนรู้' },
							slug: 'overview/learning-paths',
						},
						{ label: 'About', translations: { 'zh-CN': '关于', th: 'เกี่ยวกับ' }, slug: 'about' },
						{
							label: 'Principles',
							translations: { 'zh-CN': '原则', th: 'หลักการ' },
							slug: 'overview/principles',
						},
						{
							label: 'License',
							translations: { 'zh-CN': '许可', th: 'สัญญาอนุญาต' },
							slug: 'policies/license',
						},
						{
							label: 'Add a page',
							translations: { 'zh-CN': '如何添加页面', th: 'เพิ่มหน้า' },
							slug: 'contributing',
						},
					],
				},
				group('Quantified self', '量化自我', 'การวัดตนเอง', 'quantified-self'),
				group('Environmental Signals', '环境信号', 'สัญญาณสิ่งแวดล้อม', 'lifestyle'),
				group('Biochemical', '生化小分子', 'ชีวเคมีโมเลกุลเล็ก', 'biochemical'),
				group('Peptides', '肽', 'เปปไทด์', 'peptides'),
				group('Genetic', '基因', 'พันธุกรรม', 'genetic'),
				group('Cellular & Regenerative', '细胞与再生', 'เซลล์และการฟื้นฟู', 'cellular'),
				group('Microbiome', '微生物组', 'จุลินทรีย์', 'microbiome'),
				group('Neurotech', '神经科技', 'เทคโนโลยีประสาท', 'neurohacking'),
				group('Cyborg implants', '植入与赛博格', 'ไซบอร์ก', 'cyborg'),
				group('Bionics', '仿生', 'ไบโอนิก', 'bionic'),
				group('Goals', '目标', 'เป้าหมาย', 'goals'),
				{
					label: 'Guides',
					translations: { 'zh-CN': '导读', th: 'คู่มือ' },
					items: [
						{ label: 'Maturity', translations: { 'zh-CN': '成熟度', th: 'ความพร้อม' }, slug: 'overview/maturity' },
						{
							label: 'Closed loop',
							translations: { 'zh-CN': '闭环', th: 'วงปิด' },
							slug: 'overview/closed-loop',
						},
						{
							label: 'Concepts',
							translations: { 'zh-CN': '概念辨析', th: 'แนวคิด' },
							slug: 'overview/concepts',
						},
						{
							label: 'Evidence and safety',
							translations: { 'zh-CN': '证据与安全', th: 'หลักฐานและความปลอดภัย' },
							slug: 'overview/evidence-and-safety',
						},
						{
							label: 'EEG, AI, and a robotic arm',
							translations: { 'zh-CN': '脑电、AI 与机械臂', th: 'EEG, AI และแขนกล' },
							slug: 'overview/eeg-ai-robotic-arm',
						},
					],
				},
				{
					label: 'Reference',
					translations: { 'zh-CN': '参考', th: 'อ้างอิง' },
					items: [
						group('Companies', '公司', 'บริษัท', 'companies'),
						group('Clinical trials', '临床试验', 'การทดลองทางคลินิก', 'trials'),
						group('Studies', '研究', 'งานวิจัย', 'studies'),
						group('Vendor records', '厂商记录', 'บันทึกผู้ขาย', 'vendors'),
						group('Regulation', '法规', 'กฎระเบียบ', 'regulation'),
						group('Glossary', '术语', 'อภิธานศัพท์', 'glossary'),
						group('News', '动态', 'ข่าว', 'news'),
					],
				},
				group('About and policy', '关于与政策', 'เกี่ยวกับและนโยบาย', 'policies'),
			],
		}),
		{
			name: 'construction-headers',
			hooks: {
				'astro:build:done': ({ dir }) => {
					const headers = allowIndexing
						? '# ALLOW_INDEXING is true. Sitewide X-Robots-Tag is omitted.\n'
						: '/*\n  X-Robots-Tag: noindex, nofollow\n';
					fs.writeFileSync(new URL('_headers', dir), headers);
					const lines = Object.entries(legacyRedirects).flatMap(([from, to]) => {
						const dest = String(to).endsWith('/') ? String(to) : `${to}/`;
						return [`${from} ${dest} 301`, `${from}/ ${dest} 301`];
					});
					fs.writeFileSync(new URL('_redirects', dir), `${lines.join('\n')}\n`);
				},
			},
		},
		sitemap({
			filter: (page) => {
				const pathname = new URL(page).pathname;
				const bare = pathname.replace(/\/$/, '') || '/';
				if (Object.prototype.hasOwnProperty.call(legacyRedirects, bare)) return false;
				const slug = pathname.replace(/^\/|\/$/g, '');
				return !noindex.has(slug);
			},
			i18n: {
				defaultLocale: 'root',
				locales: {
					root: 'en',
					'zh-cn': 'zh-CN',
					th: 'th',
				},
			},
		}),
	],
});
