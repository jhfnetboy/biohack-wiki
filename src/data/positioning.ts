export type Pillar = { title: string; text: string };

/** Site positioning. For anyone: people and organizations. Open and open source. */
export const positioning = {
	en: {
		statement:
			'An open, open-source wiki helping anyone, people and organizations alike, research and understand every area of biohacking and informing their decisions. Professionally tracked, continuously updated, objective and neutral.',
		headline: 'The open biohacking wiki',
		subline:
			'An open-source reference for anyone, people and organizations, to research every area of biohacking and make better-informed decisions.',
		badges: [
			'Professionally tracked',
			'Continuously updated',
			'Objective and neutral',
			'Open source · CC BY-SA / MIT',
		],
		tagline:
			'Open, open-source wiki for anyone researching biohacking and informing decisions. Objective, continuously updated, and not medical advice.',
		pillars: [
			{
				title: 'Comprehensive coverage',
				text: 'Nine domains, from peptides and neurotechnology to microbiome and daily environment, with the same sourcing rules everywhere.',
			},
			{
				title: 'Decision support',
				text: 'Information to support decisions by any person or organization. Not medical advice, a diagnosis, or a treatment plan.',
			},
			{
				title: 'Professional tracking and continuous updates',
				text: 'Pages record when they were reviewed and which document was opened. Stubs stay marked until a source is checked.',
			},
			{
				title: 'Objective and neutral',
				text: 'Evidence is graded from the study design that was cited. There are no sponsored rankings and no vendor storefronts.',
			},
			{
				title: 'Open and open source',
				text: 'Content is CC BY-SA 4.0. Code is MIT. The GitHub repository is public, and every page has an edit link.',
			},
		] satisfies Pillar[],
	},
	zh: {
		statement:
			'开放、开源的 Biohacking wiki，帮助任何人和组织研究、了解 Biohacking 的各个领域，并为决策提供信息参考。专业跟进，持续更新，客观中立。',
		headline: '开放的生物黑客百科',
		subline:
			'开源、人人可用的参考资料，帮助任何人和组织研究、了解 Biohacking 的各个领域，为决策提供参考。',
		badges: ['专业跟进', '持续更新', '客观中立', '开源 · CC BY-SA / MIT'],
		tagline: '开放、开源的 Biohacking wiki，帮助任何人和组织研究并做决策参考。客观中立，持续更新，不是医疗建议。',
		pillars: [
			{
				title: '全面覆盖',
				text: '九个领域，从肽和神经技术到微生物组与日常环境，全站使用同一套来源规则。',
			},
			{
				title: '决策参考',
				text: '为任何人和组织的决策提供信息。不是医疗建议、诊断或治疗方案。',
			},
			{
				title: '专业跟进，持续更新',
				text: '页面记下审阅日期和打开过的文件。在来源被核对之前，存根会一直标明。',
			},
			{
				title: '客观中立',
				text: '证据等级只来自被引用的研究设计。没有赞助排名，也没有厂商店面。',
			},
			{
				title: '开放、开源',
				text: '内容采用 CC BY-SA 4.0，代码采用 MIT。GitHub 仓库公开，每个页面都有编辑链接。',
			},
		] satisfies Pillar[],
	},
} as const;

export const repoUrl = 'https://github.com/jhfnetboy/biohack-wiki';
