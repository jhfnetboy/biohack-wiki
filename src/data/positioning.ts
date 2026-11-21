import { domainCountCopy } from './method-domains';

export type Pillar = { title: string; text: string };

/** Site positioning. For anyone: people and organizations. Open and open source. */
export const positioning = {
	en: {
		statement:
			'Biohacking is deliberately intervening in your own biology — and checking the result — in order to restore, enhance, or extend healthspan. This wiki groups the methods into ten domains. It is an open, open-source reference helping any person or organization research those areas and inform their decisions. Professionally tracked, continuously updated, objective and neutral.',
		headline: 'The open biohacking wiki',
		subline:
			'Biohacking is deliberately intervening in your own biology — and checking the result — in order to restore, enhance, or extend healthspan. This wiki groups the methods into ten domains, and is an open-source reference for any person or organization.',
		badges: ['Tracked', 'Updated', 'Neutral', 'Open source'],
		tagline:
			'Open, open-source wiki: ten method domains toward restore, enhance, or extend. Objective, continuously updated, and not medical advice.',
		pillars: [
			{
				title: 'Comprehensive coverage',
				text: `${domainCountCopy.en.phraseCap} in service of three goals — Restore, Enhance, and Extend — from peptides and neurotechnology to microbiome and environmental signals, with the same sourcing rules everywhere.`,
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
			'生物黑客，是为了修复、增强或延寿，有意识地干预自己的身体，并查看结果；本维基把这些手段分成十个领域。开放、开源，帮助任何人和组织查阅并为决策提供参考。专业跟进，持续更新，客观中立。',
		headline: '开放的生物黑客百科',
		subline:
			'生物黑客，是为了修复、增强或延寿，有意识地干预自己的身体，并查看结果；本维基把这些手段分成十个领域。开源、人人可用，为决策提供参考。',
		badges: ['专业跟进', '持续更新', '客观中立', '开源'],
		tagline: '开放、开源的生物黑客 wiki。手段分成十个领域，目的是修复、增强或延寿。客观中立，持续更新，不是医疗建议。',
		pillars: [
			{
				title: '全面覆盖',
				text: `${domainCountCopy.zh.phrase}，服务于修复、增强、延寿三个目的，从肽和神经技术到微生物组与环境信号，全站使用同一套来源规则。`,
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
	th: {
		statement:
			'ไบโอแฮกกิง คือการแทรกแซงชีววิทยาของตนเองอย่างตั้งใจ และตรวจสอบผล เพื่อฟื้นฟู เสริมศักยภาพ หรือยืดสุขภาพ วิกินี้จัดวิธีที่ใช้เป็นสิบโดเมน เป็นแหล่งอ้างอิงแบบเปิดและโอเพนซอร์ส ที่ช่วยให้บุคคลหรือองค์กรศึกษาและใช้ประกอบการตัดสินใจ มีการติดตามอย่างมืออาชีพ อัปเดตต่อเนื่อง เป็นกลาง',
		headline: 'วิกิไบโอแฮกกิงแบบเปิด',
		subline:
			'ไบโอแฮกกิง คือการแทรกแซงชีววิทยาของตนเองอย่างตั้งใจ และตรวจสอบผล เพื่อฟื้นฟู เสริมศักยภาพ หรือยืดสุขภาพ วิกินี้จัดวิธีที่ใช้เป็นสิบโดเมน เป็นแหล่งอ้างอิงโอเพนซอร์สสำหรับบุคคลหรือองค์กร',
		badges: ['มืออาชีพ', 'อัปเดต', 'เป็นกลาง', 'โอเพนซอร์ส'],
		tagline:
			'วิกิไบโอแฮกกิงแบบเปิดและโอเพนซอร์ส: สิบโดเมนวิธี เพื่อฟื้นฟู เสริมศักยภาพ หรือยืดสุขภาพ เป็นกลาง อัปเดตต่อเนื่อง ไม่ใช่คำแนะนำทางการแพทย์',
		pillars: [
			{
				title: 'ครอบคลุม',
				text: `${domainCountCopy.th.phrase} เพื่อสามเป้าหมาย — ฟื้นฟู เสริมศักยภาพ และยืดสุขภาพ — ตั้งแต่เปปไทด์และประสาทเทคโนโลยีจนถึงจุลินทรีย์และสัญญาณสิ่งแวดล้อม ใช้กฎแหล่งอ้างอิงเดียวกัน`,
			},
			{
				title: 'ช่วยตัดสินใจ',
				text: 'ข้อมูลเพื่อการตัดสินใจของบุคคลหรือองค์กร ไม่ใช่คำแนะนำทางการแพทย์ การวินิจฉัย หรือแผนการรักษา',
			},
			{
				title: 'ติดตามและอัปเดต',
				text: 'หน้าบันทึกวันที่ตรวจและเอกสารที่เปิดแล้ว ฉบับร่างจะถูกกำกับไว้จนกว่าจะตรวจแหล่งข้อมูล',
			},
			{
				title: 'เป็นกลาง',
				text: 'ระดับหลักฐานมาจากแบบการศึกษาที่อ้าง ไม่มีการจัดอันดับที่ได้รับการสนับสนุน และไม่มีหน้าร้าน',
			},
			{
				title: 'เปิดและโอเพนซอร์ส',
				text: 'เนื้อหาใช้ CC BY-SA 4.0 โค้ดใช้ MIT คลัง GitHub เป็นสาธารณะ และทุกหน้ามีลิงก์แก้ไข',
			},
		] satisfies Pillar[],
	},
} as const;

export const repoUrl = 'https://github.com/jhfnetboy/biohack-wiki';
