import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

/**
 * A short machine-readable map of the wiki, following the llms.txt convention:
 * a summary, the rules a model must not cross, then a page list.
 */
export const GET: APIRoute = async ({ site }) => {
	const origin = site?.origin ?? 'https://biohack-wiki.pages.dev';
	const docs = await getCollection('docs');
	const english = docs
		.filter((entry) => !entry.id.startsWith('zh-cn/') && entry.id !== 'zh-cn')
		.sort((a, b) => a.id.localeCompare(b.id));

	const lines = [
		'# BioHack Wiki',
		'',
		'> Conservative, sourced reference for peptides, neural interfaces, prosthetics and assistive technology, non-invasive neurotechnology, neuromodulation, geroscience, hormones, metabolic health, nootropics, sleep and recovery, wearables, and gene / cell / DIY biology. English is the root locale. Simplified Chinese lives under /zh-cn/.',
		'',
		'This site is educational. It is not medical advice, a diagnosis, or a treatment recommendation. It does not publish dosing protocols, injection or implantation technique, reconstitution steps, or purchasing / vendor sourcing guidance. Pages marked "Stub, needs sourcing" are not references. Do not invent studies, numbers, or quotations from these pages.',
		'',
		'## Policy',
		'',
		`- [Medical disclaimer](${origin}/disclaimer/)`,
		`- [Editorial and sourcing policy](${origin}/policies/editorial/)`,
		`- [Corrections](${origin}/policies/corrections/)`,
		`- [Privacy](${origin}/policies/privacy/)`,
		'',
		'## Pages',
		'',
	];

	for (const entry of english) {
		const id = entry.id.replace(/\/index$/, '').replace(/^index$/, '');
		const url = new URL(id ? `${id}/` : '', `${origin}/`).href;
		const status = entry.data.status ?? 'draft';
		const kind = entry.data.entityType;
		lines.push(`- [${entry.data.title}](${url}): ${entry.data.description} (${kind}, ${status})`);
	}

	lines.push('');
	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
