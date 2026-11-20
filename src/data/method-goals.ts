import type { GoalId } from './domain-keywords';
import type { LocaleId } from '../lib/locale';

export type Localized = Record<LocaleId, string>;

const L = (en: string, zh: string, th: string): Localized => ({ en, zh, th });

export type MethodGoal = {
	slug: string;
	href: string;
	name: Localized;
	/** What this method does for a person. Shown under the tile description. */
	line: Localized;
	serves: Partial<Record<GoalId, Localized>>;
};

export const methodOrder = [
	'quantified-self',
	'lifestyle',
	'biochemical',
	'peptides',
	'genetic',
	'cellular',
	'microbiome',
	'neurohacking',
	'cyborg',
	'bionic',
] as const;

export const methods: Record<(typeof methodOrder)[number], MethodGoal> = {
	'quantified-self': {
		slug: 'quantified-self',
		href: '/quantified-self/',
		name: L('Quantified self', '量化自我', 'การวัดตนเอง'),
		line: L(
			'See the body clearly, so every adjustment has a measurement behind it.',
			'看清身体状态，让每次调整都有据可依。',
			'มองสถานะของร่างกายให้ชัด เพื่อให้ทุกการปรับมีข้อมูลรองรับ',
		),
		serves: {
			restore: L(
				'Shows where a lost function stands now, before anyone tries to bring it back.',
				'先看清受损功能现在处在哪，再谈把它拉回来。',
				'แสดงว่าฟังก์ชันที่เสียอยู่ตรงไหน ก่อนจะพยายามดึงกลับ',
			),
			enhance: L(
				'Gives a before-and-after record when someone tries to go past a usual level.',
				'当人想超过通常水平时，留下调整前后的记录。',
				'บันทึกก่อนและหลัง เมื่อมีคนพยายามให้เกินระดับปกติ',
			),
			extend: L(
				'Keeps a long record so age-related change is visible, not guessed.',
				'长期记录，让随年龄的变化看得见，而不是靠猜。',
				'เก็บบันทึกยาว เพื่อให้การเปลี่ยนแปลงตามวัยมองเห็นได้ ไม่ใช่การเดา',
			),
		},
	},
	lifestyle: {
		slug: 'lifestyle',
		href: '/lifestyle/',
		name: L('Environmental signals', '环境信号', 'สัญญาณสิ่งแวดล้อม'),
		line: L(
			'Set the body clock and metabolism, and support sleep and recovery.',
			'校准生物钟与代谢，提升睡眠与恢复。',
			'จูนนาฬิกาชีวภาพและเมแทบอลิซึม เพื่อให้นอนหลับและฟื้นตัวดีขึ้น',
		),
		serves: {
			enhance: L(
				'Uses light, cold, and heat to move daily function past a sluggish baseline.',
				'用光照、冷和热，把日常状态从迟钝里往上调。',
				'ใช้แสง ความเย็น และความร้อน เพื่อยกการทำงานประจำวันให้พ้นจากภาวะเฉื่อย',
			),
			extend: L(
				'Keeps the clock and metabolism aligned, which is how this method is filed under healthspan.',
				'把生物钟和代谢对齐，因此归在健康寿命这一目标下。',
				'จัดนาฬิกาและเมแทบอลิซึมให้ตรงกัน จึงถูกจัดไว้ใต้เป้าหมายช่วงสุขภาพดี',
			),
		},
	},
	biochemical: {
		slug: 'biochemical',
		href: '/biochemical/',
		name: L('Biochemical', '生化小分子', 'ชีวเคมีโมเลกุลเล็ก'),
		line: L(
			'Tune metabolism and brain chemistry, and raise energy and focus.',
			'调节代谢与大脑化学，提升精力与专注。',
			'ปรับเมแทบอลิซึมและเคมีในสมอง เพื่อเพิ่มพลังและความใส่ใจ',
		),
		serves: {
			restore: L(
				'Small molecules aimed at pulling metabolism or a symptom back toward a usable range.',
				'用小分子把代谢或一种症状拉回还能用的范围。',
				'โมเลกุลเล็กที่มุ่งดึงเมแทบอลิซึมหรืออาการกลับสู่ช่วงที่ใช้การได้',
			),
			enhance: L(
				'The same chemistry, used to push energy and focus past a usual day.',
				'同一套化学，用来把精力和专注推过普通的一天。',
				'เคมีชุดเดียวกัน ใช้ดันพลังและความใส่ใจให้เกินวันปกติ',
			),
			extend: L(
				'Where this wiki files small molecules discussed for aging. Each claim stays on its own page.',
				'与衰老一起被讨论的小分子归在这里。每条主张仍留在各自的页面。',
				'ที่วิกินี้จัดโมเลกุลเล็กที่ถูกพูดถึงเรื่องความชรา แต่ละข้ออ้างยังอยู่ที่หน้าของมัน',
			),
		},
	},
	peptides: {
		slug: 'peptides',
		href: '/peptides/',
		name: L('Peptides', '肽', 'เปปไทด์'),
		line: L(
			'Use precise signaling molecules to support repair and to regulate weight and metabolism.',
			'用精准的信号分子促进修复、调控体重与代谢。',
			'ใช้โมเลกุลสัญญาณที่จำเพาะ เพื่อช่วยซ่อมแซม และควบคุมน้ำหนักกับเมแทบอลิซึม',
		),
		serves: {
			restore: L(
				'Signal molecules filed here when the aim is repair of tissue or a hormone axis.',
				'目标是修复组织或一条激素轴时，信号分子归在这里。',
				'เมื่อเป้าหมายคือซ่อมเนื้อเยื่อหรือแกนฮอร์โมน โมเลกุลสัญญาณถูกจัดไว้ที่นี่',
			),
			enhance: L(
				'The same signals, used to regulate weight and metabolism beyond ordinary diet.',
				'同一类信号，用来在日常饮食之外调控体重和代谢。',
				'สัญญาณชุดเดียวกัน ใช้ควบคุมน้ำหนักและเมแทบอลิซึมนอกเหนืออาหารปกติ',
			),
			extend: L(
				'Metabolic signals that people discuss for longer healthspan. Outcomes stay on the substance pages.',
				'人们为更长的健康寿命讨论的代谢信号。结果留在各物质页。',
				'สัญญาณเมแทบอลิซึมที่คนพูดถึงเพื่อช่วงสุขภาพที่ยาวขึ้น ผลยังอยู่ที่หน้าสาร',
			),
		},
	},
	genetic: {
		slug: 'genetic',
		href: '/genetic/',
		name: L('Genetic', '基因', 'พันธุกรรม'),
		line: L(
			'Read inherited risk and correct it, so disease is headed off at the source.',
			'读懂并修正遗传风险，从源头预防疾病。',
			'อ่านความเสี่ยงทางพันธุกรรมและแก้ไข เพื่อกันโรคตั้งแต่ต้นทาง',
		),
		serves: {
			restore: L(
				'Correct an inherited cause that is already producing disease.',
				'修正已经在造成疾病的遗传原因。',
				'แก้สาเหตุทางพันธุกรรมที่กำลังทำให้เกิดโรคอยู่แล้ว',
			),
			extend: L(
				'Read risk that shows up with age, and file attempts to act before function is lost.',
				'读懂随年龄显现的风险，并归档功能失去之前的干预尝试。',
				'อ่านความเสี่ยงที่ปรากฏตามวัย และจัดความพยายามที่จะลงมือก่อนฟังก์ชันจะหาย',
			),
		},
	},
	cellular: {
		slug: 'cellular',
		href: '/cellular/',
		name: L('Cellular and regenerative', '细胞与再生', 'เซลล์และการฟื้นฟู'),
		line: L(
			'Replace damaged parts so the body keeps renewing itself.',
			'替换受损零件，让身体持续更新。',
			'เปลี่ยนชิ้นส่วนที่เสีย เพื่อให้ร่างกายสร้างตัวเองต่อไป',
		),
		serves: {
			restore: L(
				'Replace cells or tissue that are already damaged.',
				'替换已经受损的细胞或组织。',
				'เปลี่ยนเซลล์หรือเนื้อเยื่อที่เสียไปแล้ว',
			),
			extend: L(
				'Renewal aimed at postponing the loss of function that comes with age.',
				'以更新来推迟随年龄而来的功能丢失。',
				'การสร้างใหม่ที่มุ่งชะลอการสูญเสียฟังก์ชันตามวัย',
			),
		},
	},
	microbiome: {
		slug: 'microbiome',
		href: '/microbiome/',
		name: L('Microbiome', '微生物组', 'จุลินทรีย์'),
		line: L(
			'Rebuild the gut ecosystem, and improve digestion, immunity, and mood.',
			'重建肠道生态，改善消化、免疫与情绪。',
			'สร้างระบบนิเวศในลำไส้ขึ้นใหม่ เพื่อให้การย่อย ภูมิคุ้มกัน และอารมณ์ดีขึ้น',
		),
		serves: {
			restore: L(
				'Rebuild a gut community that has been disrupted.',
				'重建已经紊乱的肠道群落。',
				'สร้างชุมชนจุลินทรีย์ในลำไส้ที่เสียสมดุลขึ้นใหม่',
			),
			extend: L(
				'Filed under healthspan because digestion, immunity, and mood are part of staying well.',
				'归在健康寿命下，因为消化、免疫和情绪都是维持良好状态的一部分。',
				'จัดไว้ใต้ช่วงสุขภาพดี เพราะการย่อย ภูมิคุ้มกัน และอารมณ์เป็นส่วนของการอยู่ดี',
			),
		},
	},
	neurohacking: {
		slug: 'neurohacking',
		href: '/neurohacking/',
		name: L('Neurotech', '神经科技', 'เทคโนโลยีประสาท'),
		line: L(
			'Restore or enhance sensing, movement, and thinking.',
			'恢复或增强感知、运动与认知。',
			'ฟื้นหรือเสริมการรับรู้ การเคลื่อนไหว และการรู้คิด',
		),
		serves: {
			restore: L(
				'Bring back sensing, movement, or speech that an injury or illness took.',
				'把损伤或疾病拿走的感知、运动或言语找回来。',
				'นำการรับรู้ การเคลื่อนไหว หรือการพูดที่การบาดเจ็บหรือโรคพรากไป ให้กลับมา',
			),
			enhance: L(
				'Add to sensing or thinking that is already there.',
				'在已有的感知或思维上再加一层。',
				'เพิ่มบนการรับรู้หรือการคิดที่มีอยู่แล้ว',
			),
		},
	},
	cyborg: {
		slug: 'cyborg',
		href: '/cyborg/',
		name: L('Cyborg implants', '植入与赛博格', 'ไซบอร์ก'),
		line: L(
			'Extend what a body can do, and connect it straight to the digital world.',
			'扩展人体能力，让身体直接连上数字世界。',
			'ขยายสิ่งที่ร่างกายทำได้ และเชื่อมเข้ากับโลกดิจิทัลโดยตรง',
		),
		serves: {
			enhance: L(
				'Hardware under the skin that adds a capability the body did not have. It does not read nerves.',
				'皮下硬件增加身体原本没有的能力。它不读取神经。',
				'ฮาร์ดแวร์ใต้ผิวหนังที่เพิ่มความสามารถที่ร่างกายไม่มี และมันไม่อ่านเส้นประสาท',
			),
		},
	},
	bionic: {
		slug: 'bionic',
		href: '/bionic/',
		name: L('Bionics', '仿生', 'ไบโอนิก'),
		line: L(
			'Restore a lost limb’s function, and push past ordinary physical limits.',
			'恢复失去的肢体功能，突破体能极限。',
			'คืนการทำงานของแขนขาที่สูญเสีย และก้าวข้ามขีดจำกัดทางกาย',
		),
		serves: {
			restore: L(
				'Replace a missing limb’s function with a prosthesis or an orthosis.',
				'用假肢或矫形器补回失去的肢体功能。',
				'ใช้อวัยวะเทียมหรืออุปกรณ์ดาม เพื่อคืนการทำงานของแขนขาที่หายไป',
			),
			enhance: L(
				'Exoskeletons and powered limbs filed when the aim is more than ordinary strength.',
				'当目标超过日常体能时，外骨骼和动力肢体归在这里。',
				'โครงกระดูกกลและแขนขาขับเคลื่อน ถูกจัดไว้เมื่อเป้าหมายเกินกำลังปกติ',
			),
		},
	},
};

export function methodBySlug(slug: string): MethodGoal | undefined {
	return methods[slug as keyof typeof methods];
}

export function methodsFor(goal: GoalId): MethodGoal[] {
	return methodOrder.map((slug) => methods[slug]).filter((method) => method.serves[goal]);
}
