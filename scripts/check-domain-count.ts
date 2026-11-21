/**
 * Fails if stale "nine domains / 九个领域 / เก้าโดเมน" copy remains
 * outside historical internal notes, or if the committed diagrams
 * do not match a fresh render from method-domains.ts.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { domainCountCopy, METHOD_DOMAIN_COUNT, methodDomains } from '../src/data/method-domains.ts';

const root = path.resolve(import.meta.dirname, '..');
const errors: string[] = [];

if (METHOD_DOMAIN_COUNT !== 10) {
	errors.push(`Expected 10 method domains (taxonomy v3), found ${METHOD_DOMAIN_COUNT}`);
}

if (new Set(methodDomains.map((d) => d.slug)).size !== METHOD_DOMAIN_COUNT) {
	errors.push('Duplicate slugs in methodDomains');
}

const stale = [
	/\bnine[- ]domains?\b/i,
	/\b9[- ]domains?\b/i,
	/\bExplore 9 domains\b/,
	/九个领域/,
	/九领域/,
	/9\s*个领域/,
	/เก้าโดเมน/,
	/9\s*โดเมน/,
];

const skipDir = new Set(['node_modules', '.git', 'dist', '.astro']);
const skipFile = (rel: string) =>
	rel.startsWith('docs-internal/') ||
	rel.endsWith('package-lock.json') ||
	rel.endsWith('check-domain-count.ts');

function walk(dir: string, visit: (file: string) => void) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (skipDir.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, visit);
		else visit(full);
	}
}

walk(root, (file) => {
	const rel = path.relative(root, file);
	if (skipFile(rel)) return;
	if (!/\.(mdx?|ts|astro|js|mjs|svg|json|css|txt)$/.test(file) && path.basename(file) !== 'README.md') return;
	const text = fs.readFileSync(file, 'utf8');
	for (const pattern of stale) {
		const lines = text.split('\n');
		lines.forEach((line, i) => {
			if (pattern.test(line)) {
				errors.push(`${rel}:${i + 1}: stale domain-count wording: ${line.trim()}`);
			}
		});
	}
});

const tmp = fs.mkdtempSync(path.join(root, 'dist', '..') && path.join('/tmp', 'bh-diagram-'));
const before = new Map(
	['domain-map.svg', 'domain-map-zh.svg', 'domain-map-th.svg'].map((name) => {
		const p = path.join(root, 'public/diagrams', name);
		return [name, fs.readFileSync(p, 'utf8')];
	}),
);
execFileSync(process.execPath, ['--experimental-strip-types', path.join(root, 'scripts/render-domain-map.ts')], {
	cwd: root,
	stdio: 'pipe',
});
for (const [name, previous] of before) {
	const next = fs.readFileSync(path.join(root, 'public/diagrams', name), 'utf8');
	if (next !== previous) {
		errors.push(`public/diagrams/${name} is out of date; run: node --experimental-strip-types scripts/render-domain-map.ts`);
		fs.writeFileSync(path.join(root, 'public/diagrams', name), previous);
	}
	if (!next.includes(`/${methodDomains[0]!.slug}/`)) {
		errors.push(`public/diagrams/${name} is missing per-domain links`);
	}
	const hrefCount = [...next.matchAll(/<a href="/g)].length;
	if (hrefCount !== METHOD_DOMAIN_COUNT) {
		errors.push(`public/diagrams/${name} has ${hrefCount} links, expected ${METHOD_DOMAIN_COUNT}`);
	}
}
fs.rmSync(tmp, { recursive: true, force: true });

const required = [
	['src/content/docs/overview/what-is-biohacking.md', domainCountCopy.en.phrase],
	['src/content/docs/zh-cn/overview/what-is-biohacking.md', domainCountCopy.zh.phrase],
	['src/content/docs/overview/concepts.md', `${domainCountCopy.en.word}-domain map`],
	['src/content/docs/zh-cn/overview/concepts.md', `${domainCountCopy.zh.word}领域地图`],
];
for (const [file, needle] of required) {
	const text = fs.readFileSync(path.join(root, file), 'utf8');
	if (!text.includes(needle)) {
		errors.push(`${file} should mention "${needle}"`);
	}
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`Domain count check passed: ${METHOD_DOMAIN_COUNT} method domains (${domainCountCopy.en.phrase}).`);
