/**
 * Canonical list of the wiki's first-level method domains (taxonomy v3).
 * Goals (Restore / Enhance / Extend) are a separate axis, not domains.
 * Count, names, and diagram labels should be derived from this file.
 */
export type MethodLocale = 'en' | 'zh' | 'th';

export type MethodDomain = {
	slug: string;
	slot: string;
	/** Sidebar / map title, English. */
	title: string;
	titleZh: string;
	titleTh: string;
	/** Short map subtitle. */
	blurb: string;
	blurbZh: string;
	blurbTh: string;
	/** Legacy pastel swatch; the v2 diagram uses theme tokens instead. */
	fill: string;
};

export const methodDomains = [
	{
		slug: 'quantified-self',
		slot: 'domain-quantified-self',
		title: 'Quantified self',
		titleZh: '量化自我',
		titleTh: 'การวัดตนเอง',
		blurb: 'wearables, CGM, HRV',
		blurbZh: '可穿戴、连续血糖、心率变异',
		blurbTh: 'อุปกรณ์สวมใส่, CGM, HRV',
		fill: '#fff4cc',
	},
	{
		slug: 'lifestyle',
		slot: 'domain-lifestyle',
		title: 'Environmental Signals',
		titleZh: '环境信号',
		titleTh: 'สัญญาณสิ่งแวดล้อม',
		blurb: 'light, cold, heat, timing',
		blurbZh: '光照、冷热、时间',
		blurbTh: 'แสง, ร้อนเย็น, เวลา',
		fill: '#efe7ff',
	},
	{
		slug: 'biochemical',
		slot: 'domain-biochemical',
		title: 'Biochemical',
		titleZh: '生化小分子',
		titleTh: 'ชีวเคมีโมเลกุลเล็ก',
		blurb: 'small molecules, hormones, nootropics',
		blurbZh: '小分子、激素、促认知',
		blurbTh: 'โมเลกุลเล็ก, ฮอร์โมน, สารเสริมการรู้คิด',
		fill: '#d7f5ea',
	},
	{
		slug: 'peptides',
		slot: 'domain-peptides',
		title: 'Peptides',
		titleZh: '肽',
		titleTh: 'เปปไทด์',
		blurb: 'amino-acid signals, purity',
		blurbZh: '氨基酸信号、纯度',
		blurbTh: 'สัญญาณกรดอะมิโน, ความบริสุทธิ์',
		fill: '#c5ebd8',
	},
	{
		slug: 'genetic',
		slot: 'domain-genetic',
		title: 'Genetic',
		titleZh: '基因',
		titleTh: 'พันธุกรรม',
		blurb: 'gene, RNA, synthetic biology',
		blurbZh: '基因、RNA、合成生物学',
		blurbTh: 'ยีน, RNA, ชีววิทยาสังเคราะห์',
		fill: '#f7dce3',
	},
	{
		slug: 'cellular',
		slot: 'domain-cellular',
		title: 'Cellular & Regenerative',
		titleZh: '细胞与再生',
		titleTh: 'เซลล์และการฟื้นฟู',
		blurb: 'stem cells, tissue, reprogramming',
		blurbZh: '干细胞、组织、重编程',
		blurbTh: 'เซลล์ต้นกำเนิด, เนื้อเยื่อ, การรีโปรแกรม',
		fill: '#f3d4e8',
	},
	{
		slug: 'microbiome',
		slot: 'domain-microbiome',
		title: 'Microbiome',
		titleZh: '微生物组',
		titleTh: 'จุลินทรีย์',
		blurb: 'gut, diet, microbes',
		blurbZh: '肠道、饮食、微生物',
		blurbTh: 'ลำไส้, อาหาร, จุลินทรีย์',
		fill: '#e3f6f2',
	},
	{
		slug: 'neurohacking',
		slot: 'domain-neurohacking',
		title: 'Neurotech',
		titleZh: '神经科技',
		titleTh: 'เทคโนโลยีประสาท',
		blurb: 'recording, stimulation, BCI',
		blurbZh: '记录、刺激、脑机接口',
		blurbTh: 'การบันทึก, การกระตุ้น, BCI',
		fill: '#d7e8f5',
	},
	{
		slug: 'cyborg',
		slot: 'domain-cyborg',
		title: 'Cyborg implants',
		titleZh: '植入与赛博格',
		titleTh: 'ไซบอร์ก',
		blurb: 'implants, magnets, sensors',
		blurbZh: '植入、磁铁、传感器',
		blurbTh: 'อุปกรณ์ฝัง, แม่เหล็ก, เซ็นเซอร์',
		fill: '#f7e7d8',
	},
	{
		slug: 'bionic',
		slot: 'domain-bionic',
		title: 'Bionics',
		titleZh: '仿生',
		titleTh: 'ไบโอนิก',
		blurb: 'prostheses, exoskeletons',
		blurbZh: '假肢、外骨骼',
		blurbTh: 'อวัยวะเทียม, โครงกระดูกกล',
		fill: '#e7e4f7',
	},
] as const satisfies readonly MethodDomain[];

export type MethodDomainSlug = (typeof methodDomains)[number]['slug'];

/** Number of first-level method domains. Always derived from the list above. */
export const METHOD_DOMAIN_COUNT = methodDomains.length;

const enWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'] as const;
const zhWords = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'] as const;
const thWords = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ', 'สิบเอ็ด', 'สิบสอง'] as const;

function word(list: readonly string[], n: number, label: string): string {
	const value = list[n];
	if (!value) {
		throw new Error(`Add a ${label} number word for METHOD_DOMAIN_COUNT=${n}`);
	}
	return value;
}

/** Locale phrases for the current domain count, e.g. "ten domains" / "十个领域". */
export const domainCountCopy = {
	en: {
		word: word(enWords, METHOD_DOMAIN_COUNT, 'English'),
		wordCap: word(enWords, METHOD_DOMAIN_COUNT, 'English').replace(/^./, (c) => c.toUpperCase()),
		phrase: `${word(enWords, METHOD_DOMAIN_COUNT, 'English')} domains`,
		phraseCap: `${word(enWords, METHOD_DOMAIN_COUNT, 'English').replace(/^./, (c) => c.toUpperCase())} domains`,
	},
	zh: {
		word: word(zhWords, METHOD_DOMAIN_COUNT, 'Chinese'),
		phrase: `${word(zhWords, METHOD_DOMAIN_COUNT, 'Chinese')}个领域`,
	},
	th: {
		word: word(thWords, METHOD_DOMAIN_COUNT, 'Thai'),
		phrase: `${word(thWords, METHOD_DOMAIN_COUNT, 'Thai')}โดเมน`,
	},
} as const;

export function localePrefix(locale: MethodLocale): string {
	if (locale === 'zh') return '/zh-cn';
	if (locale === 'th') return '/th';
	return '';
}

export function domainHref(slug: string, locale: MethodLocale): string {
	return `${localePrefix(locale)}/${slug}/`;
}

export function titleFor(domain: MethodDomain, locale: MethodLocale): string {
	if (locale === 'zh') return domain.titleZh;
	if (locale === 'th') return domain.titleTh;
	return domain.title;
}

export function blurbFor(domain: MethodDomain, locale: MethodLocale): string {
	if (locale === 'zh') return domain.blurbZh;
	if (locale === 'th') return domain.blurbTh;
	return domain.blurb;
}

export const methodDomainBySlug: Record<string, MethodDomain> = Object.fromEntries(
	methodDomains.map((domain) => [domain.slug, domain]),
);
