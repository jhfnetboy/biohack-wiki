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
						{ label: 'About', translations: { 'zh-CN': '关于' }, slug: 'about' },
						{
							label: 'Add a page',
							translations: { 'zh-CN': '如何添加页面' },
							slug: 'contributing',
						},
					],
				},
				group('Peptides', '肽与蛋白', 'peptides'),
				group('Neural interfaces / BCI', '神经接口与脑机接口', 'neurotech/bci'),
				group('Non-invasive neurotech', '非侵入式神经技术', 'neurotech/noninvasive'),
				group('Neuromodulation', '神经调控', 'neurotech/neuromodulation'),
				group('Prosthetics and assistive tech', '义肢与辅助技术', 'assistive'),
				group('Geroscience and longevity', '衰老与长寿', 'longevity'),
				group('Hormones', '激素与内分泌', 'hormones'),
				group('Metabolic health', '代谢与营养', 'metabolic'),
				group('Nootropics', '认知增强', 'nootropics'),
				group('Sleep and recovery', '睡眠与恢复', 'recovery'),
				group('Wearables and quantified self', '可穿戴与量化自我', 'quantified-self'),
				group('Gene, cell, and DIY bio', '基因、细胞与 DIY 生物', 'diybio'),
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
				const slug = new URL(page).pathname.replace(/^\/|\/$/g, '');
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
