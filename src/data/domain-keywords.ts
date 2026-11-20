import type { LocaleId } from '../lib/locale';

/** Banner words for the ten method domains and the three goal hubs. */
export const domainKeywords = {
	'quantified-self': {
		en: ['Measure', 'Data'],
		zh: ['测量', '数据'],
		th: ['วัดผล', 'ข้อมูล'],
	},
	lifestyle: {
		en: ['Light', 'Cold & Heat'],
		zh: ['光照', '冷热'],
		th: ['แสง', 'ร้อนเย็น'],
	},
	biochemical: {
		en: ['Molecules', 'Metabolism'],
		zh: ['分子', '代谢'],
		th: ['โมเลกุล', 'เมแทบอลิซึม'],
	},
	peptides: {
		en: ['Signal', 'Purity'],
		zh: ['信号', '纯度'],
		th: ['สัญญาณ', 'ความบริสุทธิ์'],
	},
	genetic: {
		en: ['Code', 'Editing'],
		zh: ['基因密码', '编辑'],
		th: ['รหัส', 'การแก้ไข'],
	},
	cellular: {
		en: ['Cells', 'Regeneration'],
		zh: ['细胞', '再生'],
		th: ['เซลล์', 'การฟื้นฟู'],
	},
	microbiome: {
		en: ['Gut', 'Microbes'],
		zh: ['肠道', '菌群'],
		th: ['ลำไส้', 'จุลินทรีย์'],
	},
	neurohacking: {
		en: ['Brain', 'Interface'],
		zh: ['脑', '接口'],
		th: ['สมอง', 'อินเทอร์เฟซ'],
	},
	cyborg: {
		en: ['Implant', 'Chip'],
		zh: ['植入', '芯片'],
		th: ['ฝังชิป', 'ชิป'],
	},
	bionic: {
		en: ['Prosthesis', 'Exoskeleton'],
		zh: ['义肢', '外骨骼'],
		th: ['อวัยวะเทียม', 'โครงกระดูกภายนอก'],
	},
} as const;

export const goalKeywords = {
	restore: {
		en: ['Restore', 'Function'],
		zh: ['修复', '功能'],
		th: ['ฟื้นฟู', 'การทำงาน'],
	},
	enhance: {
		en: ['Enhance', 'Capacity'],
		zh: ['增强', '能力'],
		th: ['เสริม', 'ศักยภาพ'],
	},
	extend: {
		en: ['Extend', 'Healthspan'],
		zh: ['延寿', '健康寿命'],
		th: ['ยืดสุขภาพ', 'ช่วงสุขภาพดี'],
	},
} as const;

export type GoalId = keyof typeof goalKeywords;

export const goalLabels: Record<GoalId, Record<LocaleId, string>> = {
	restore: { en: 'Restore', zh: '修复', th: 'ฟื้นฟู' },
	enhance: { en: 'Enhance', zh: '增强', th: 'เสริมศักยภาพ' },
	extend: { en: 'Extend', zh: '延寿', th: 'ยืดสุขภาพ' },
};

/** Goals each method serves. Chips on tiles and domain landings. */
export const domainGoals: Record<string, GoalId[]> = {
	'quantified-self': ['restore', 'enhance', 'extend'],
	lifestyle: ['extend', 'enhance'],
	biochemical: ['restore', 'enhance', 'extend'],
	peptides: ['restore', 'enhance', 'extend'],
	genetic: ['restore', 'extend'],
	cellular: ['restore', 'extend'],
	microbiome: ['restore', 'extend'],
	neurohacking: ['enhance', 'restore'],
	cyborg: ['enhance'],
	bionic: ['restore', 'enhance'],
};

type KeywordSlug = keyof typeof domainKeywords;

export function keywordsFor(slug: string, id: LocaleId): readonly string[] {
	const row = domainKeywords[slug as KeywordSlug];
	if (!row) return [];
	return row[id];
}

export function keywordLine(slug: string, id: LocaleId): string {
	return keywordsFor(slug, id).join(' · ');
}

export function goalKeywordLine(goal: GoalId, id: LocaleId): string {
	return goalKeywords[goal][id].join(' · ');
}

export function goalLabel(goal: GoalId, id: LocaleId): string {
	return goalLabels[goal][id];
}
