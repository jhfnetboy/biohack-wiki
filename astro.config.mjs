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

const group = (label, zh, directory) => ({
	label,
	translations: { 'zh-CN': zh },
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
			},
			description:
				'A sourced reference for peptides, neurotechnology, assistive technology, and related domains. Not medical advice.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
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
			},
			plugins: [
				starlightLinksValidator({
					errorOnFallbackPages: true,
					errorOnInconsistentLocale: true,
				}),
			],
			sidebar: [
				{
					label: 'Start',
					translations: { 'zh-CN': '开始' },
					items: [
						{ label: 'Home', translations: { 'zh-CN': '首页' }, slug: '' },
						{
							label: 'What is biohacking',
							translations: { 'zh-CN': '什么是生物黑客' },
							slug: 'overview/what-is-biohacking',
						},
						{
							label: 'Three layers',
							translations: { 'zh-CN': '三个层次' },
							slug: 'overview/three-layers',
						},
						{
							label: 'Learning paths',
							translations: { 'zh-CN': '学习路径' },
							slug: 'overview/learning-paths',
						},
						{ label: 'About', translations: { 'zh-CN': '关于' }, slug: 'about' },
						{
							label: 'Add a page',
							translations: { 'zh-CN': '如何添加页面' },
							slug: 'contributing',
						},
					],
				},
				group('Biochemical', '生物化学干预', 'biochemical'),
				group('Neurohacking', '脑科学与神经增强', 'neurohacking'),
				group('Bionic augmentation', '仿生与智能义肢', 'bionic'),
				group('Cyborg and grinder', '人体植入与赛博格', 'cyborg'),
				group('Genetic', '基因与细胞', 'genetic'),
				group('Longevity', '长寿与抗衰老', 'longevity'),
				group('Quantified self', '自我量化', 'quantified-self'),
				group('Microbiome', '微生物组', 'microbiome'),
				group('Lifestyle and environment', '环境与行为', 'lifestyle'),
				{
					label: 'Guides',
					translations: { 'zh-CN': '导读' },
					items: [
						{ label: 'Maturity', translations: { 'zh-CN': '成熟度' }, slug: 'overview/maturity' },
						{
							label: 'Closed loop',
							translations: { 'zh-CN': '闭环' },
							slug: 'overview/closed-loop',
						},
						{
							label: 'Concepts',
							translations: { 'zh-CN': '概念辨析' },
							slug: 'overview/concepts',
						},
						{
							label: 'Evidence and safety',
							translations: { 'zh-CN': '证据与安全' },
							slug: 'overview/evidence-and-safety',
						},
						{
							label: 'EEG, AI, and a robotic arm',
							translations: { 'zh-CN': '脑电、AI 与机械臂' },
							slug: 'overview/eeg-ai-robotic-arm',
						},
					],
				},
				{
					label: 'Reference',
					translations: { 'zh-CN': '参考' },
					items: [
						group('Companies', '公司', 'companies'),
						group('Clinical trials', '临床试验', 'trials'),
						group('Studies', '研究', 'studies'),
						group('Vendor records', '厂商记录', 'vendors'),
						group('Regulation', '法规', 'regulation'),
						group('Glossary', '术语', 'glossary'),
						group('News', '动态', 'news'),
					],
				},
				group('About and policy', '关于与政策', 'policies'),
			],
		}),
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
				},
			},
		}),
	],
});
