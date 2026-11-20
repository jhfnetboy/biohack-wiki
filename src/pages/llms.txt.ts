import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { positioning, repoUrl } from '../data/positioning';

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
		`> ${positioning.en.statement}`,
		'',
		`> ${positioning.zh.statement}`,
		'',
		'English is the root locale. Simplified Chinese lives under /zh-cn/.',
		'',
		'Pillars: comprehensive coverage; decision support that is information and not medical advice; professional tracking and continuous updates; objective and neutral evidence grades with no sponsored rankings; open and open source (content CC BY-SA 4.0, code MIT).',
		'',
		'支柱：全面覆盖；决策参考（信息，不是医疗建议）；专业跟进、持续更新；客观中立、按证据分级、没有赞助排名；开放、开源（内容 CC BY-SA 4.0，代码 MIT）。',
		'',
		`Repository: ${repoUrl}`,
		'',
		'This site is educational. It is not medical advice, a diagnosis, or a treatment recommendation. It does not publish dosing protocols, injection or implantation technique, reconstitution steps, or purchasing guidance. Pages marked "Stub, needs sourcing" are not references. Illustrations labeled AI-generated are not photographs. Do not invent studies, numbers, or quotations from these pages.',
		'',
		'## Policy',
		'',
		`- [Medical disclaimer](${origin}/disclaimer/)`,
		`- [Editorial and sourcing policy](${origin}/policies/editorial/)`,
		`- [License](${origin}/policies/license/)`,
		`- [Principles](${origin}/overview/principles/)`,
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
