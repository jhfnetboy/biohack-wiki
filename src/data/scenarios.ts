import type { GoalId } from './domain-keywords';
import type { LocaleId } from '../lib/locale';

export type Localized = Record<LocaleId, string>;
export type EvidenceBadge = 'approved' | 'trial' | 'early' | 'limited';

export type Scenario = {
	name: Localized;
	summary: Localized;
	goals: GoalId[];
	badge: EvidenceBadge;
	href?: string;
	sources?: { url: string; label: string }[];
	stub?: boolean;
};

const L = (en: string, zh: string, th: string): Localized => ({ en, zh, th });

const notYet = L(
	'Evidence for this scenario has not been summarized here yet.',
	'这里还没有整理这个场景的证据。',
	'ยังไม่ได้สรุปหลักฐานของสถานการณ์นี้ที่นี่',
);

export const domainScenarios: Record<string, Scenario[]> = {
	biochemical: [
		{
			name: L('Caffeine with L-theanine', '咖啡因配 L-茶氨酸', 'คาเฟอีนคู่กับแอล-ธีอะนีน'),
			summary: L(
				'One small randomized crossover study found that caffeine plus L-theanine improved some attention measures, including accuracy on a rapid visual task, compared with placebo.',
				'一项小型随机交叉研究发现，咖啡因加上 L-茶氨酸后，快速视觉任务的准确率等一些注意力指标优于安慰剂。',
				'การทดลองไขว้แบบสุ่มขนาดเล็กพบว่าคาเฟอีนร่วมกับแอล-ธีอะนีนทำให้ตัวชี้วัดความใส่ใจบางอย่างดีกว่ายาหลอก รวมถึงความถูกต้องในงานภาพที่ต้องตอบเร็ว',
			),
			goals: ['enhance'],
			badge: 'limited',
			sources: [{
				url: 'https://pubmed.ncbi.nlm.nih.gov/18006208/',
				label: 'Haskell et al., Biological Psychology, 2008. PubMed 18006208',
			}],
		},
		{
			name: L('Creatine', '肌酸', 'ครีเอทีน'),
			summary: L(
				'The International Society of Sports Nutrition position stand says creatine monohydrate is the most effective supplement it reviewed for raising high-intensity exercise capacity and lean mass during training. The same review cites studies in which creatine improved some cognitive tests.',
				'国际运动营养学会的立场声明认为，在它回顾的补充剂里，一水肌酸最能在训练中提高高强度运动能力和瘦体重。同一篇综述还引用了肌酸改善部分认知测验的研究。',
				'แถลงการณ์ของสมาคมโภชนาการการกีฬานานาชาติระบุว่าครีเอทีนโมโนไฮเดรตเป็นผลิตภัณฑ์เสริมที่ได้ผลที่สุดในเอกสารที่ทบทวน สำหรับการเพิ่มความสามารถในการออกกำลังความเข้มสูงและมวลไร้ไขมันระหว่างฝึก บทความเดียวกันอ้างการศึกษาที่ครีเอทีนทำให้แบบทดสอบการรู้คิดบางชุดดีขึ้น',
			),
			goals: ['enhance'],
			badge: 'limited',
			sources: [{
				url: 'https://pubmed.ncbi.nlm.nih.gov/28615996/',
				label: 'Kreider et al., JISSN, 2017. PubMed 28615996',
			}],
		},
		{
			name: L('Melatonin for jet lag', '褪黑素与时差', 'เมลาโทนินกับอาการเจ็ตแล็ก'),
			summary: L(
				'A Cochrane review of randomized trials found that melatonin, taken near bedtime at the destination, reduced jet lag after flights that crossed five or more time zones.',
				'Cochrane 对随机试验的综述发现，在目的地临近就寝时使用褪黑素，能减轻跨越五个及以上时区后的时差反应。',
				'บททบทวน Cochrane ของการทดลองแบบสุ่มพบว่าเมลาโทนินที่กินใกล้เวลานอนของจุดหมาย ลดอาการเจ็ตแล็กหลังเที่ยวบินที่ข้ามห้าเขตเวลาขึ้นไป',
			),
			goals: ['enhance'],
			badge: 'limited',
			sources: [{
				url: 'https://www.cochrane.org/evidence/CD001520_melatonin-prevention-and-treatment-jet-lag',
				label: 'Herxheimer and Petrie, Cochrane, 2002. CD001520',
			}],
		},
		{
			name: L('Metformin and rapamycin', '二甲双胍与雷帕霉素', 'เมตฟอร์มินและราพามัยซิน'),
			summary: L(
				'AFAR describes TAME as a planned six-year trial of metformin in older adults and says it is still raising money to launch it, so the trial has no result here. Separately, a 2009 mouse study from the NIA Interventions Testing Program found that rapamycin, started late in life, extended median and maximal lifespan in both sexes.',
				'美国衰老研究联合会把 TAME 描述为计划中的六年二甲双胍试验，并表示仍在筹资启动，因此这里没有试验结果。另一边，美国衰老研究所干预测试计划 2009 年的小鼠研究发现，晚年才开始喂食的雷帕霉素延长了雌雄小鼠的中位寿命和最长寿命。',
				'AFAR อธิบาย TAME ว่าเป็นการทดลองเมตฟอร์มินหกปีที่วางแผนไว้ในผู้สูงวัย และบอกว่ายังระดมทุนเพื่อเริ่ม จึงยังไม่มีผลที่นี่ อีกด้าน การศึกษาหนูปี 2009 ของโครงการทดสอบการแทรกแซง NIA พบว่าราพามัยซินที่เริ่มให้เมื่ออายุมากแล้ว ยืดทั้งอายุขัยมัธยฐานและอายุขัยสูงสุดในหนูทั้งสองเพศ',
			),
			goals: ['extend'],
			badge: 'early',
			sources: [
				{
					url: 'https://www.afar.org/news/afar-initiative-in-the-news-npr-spotlights-tame-trial-and-afar-scientific-leadership',
					label: 'AFAR, TAME trial described as still being launched, 22 April 2024',
				},
				{
					url: 'https://pubmed.ncbi.nlm.nih.gov/19587680/',
					label: 'Harrison et al., Nature, 2009. PubMed 19587680',
				},
			],
		},
	],
	peptides: [
		{
			name: L('Semaglutide and tirzepatide', '司美格鲁肽与替尔泊肽', 'เซมากลูไทด์และเทอร์เซพาไทด์'),
			summary: L(
				'FDA has approved semaglutide (Wegovy) to reduce excess body weight, and approved tirzepatide both as Mounjaro for type 2 diabetes and as Zepbound for chronic weight management. SURMOUNT-1, a 72-week trial, reported substantial weight reduction with weekly tirzepatide in adults with obesity who did not have diabetes.',
				'FDA 已批准司美格鲁肽（Wegovy）用于减轻过多体重，并批准替尔泊肽以 Mounjaro 用于 2 型糖尿病、以 Zepbound 用于长期体重管理。SURMOUNT-1 是一项 72 周试验，报告在没有糖尿病的肥胖成人中，每周一次替尔泊肽带来了明显且持续的体重下降。',
				'FDA อนุมัติเซมากลูไทด์ (Wegovy) เพื่อลดน้ำหนักส่วนเกิน และอนุมัติเทอร์เซพาไทด์ทั้งในชื่อ Mounjaro สำหรับเบาหวานชนิดที่ 2 และ Zepbound สำหรับการควบคุมน้ำหนักระยะยาว SURMOUNT-1 การทดลอง 72 สัปดาห์ รายงานว่าเทอร์เซพาไทด์รายสัปดาห์ทำให้น้ำหนักลดลงมากและคงอยู่ในผู้ใหญ่ที่มีโรคอ้วนที่ไม่ได้เป็นเบาหวาน',
			),
			goals: ['restore'],
			badge: 'approved',
			href: '/peptides/glp-1-agonists/',
			sources: [
				{
					url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-new-medication-chronic-weight-management',
					label: 'FDA announcement, Zepbound (tirzepatide), 8 Nov 2023',
				},
				{
					url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s023lbl.pdf',
					label: 'Wegovy (semaglutide) prescribing information, FDA',
				},
				{
					url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
					label: 'Jastreboff et al., SURMOUNT-1, NEJM 2022',
				},
			],
		},
		{
			name: L('GHK-Cu', 'GHK-Cu', 'GHK-Cu'),
			summary: L(
				'This wiki’s GHK-Cu page records that FDA lists injectable GHK-Cu among withdrawn compounding nominations. Research on topical use for skin has not been summarized here.',
				'本维基的 GHK-Cu 页记录了 FDA 将注射用 GHK-Cu 列在已撤回的复配提名中。外用于皮肤的研究还没有在这里总结。',
				'หน้า GHK-Cu ของวิกินี้บันทึกว่า FDA ใส่ GHK-Cu แบบฉีดไว้ในรายการเสนอชื่อสำหรับผสมยาที่ถูกถอน งานวิจัยการใช้ทางผิวหนังยังไม่ได้สรุปที่นี่',
			),
			goals: ['enhance'],
			badge: 'limited',
			href: '/peptides/ghk-cu/',
			sources: [{
				url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks',
				label: 'FDA, bulk substances that may present safety risks',
			}],
			stub: true,
		},
		{
			name: L('BPC-157', 'BPC-157', 'BPC-157'),
			summary: L(
				'FDA lists BPC-157 among compounding nominations that were withdrawn, and says it has no or only limited safety information for the proposed routes, so it cannot tell whether compounded products would cause harm. This wiki has not summarized animal studies.',
				'FDA 把 BPC-157 列在已撤回的复配提名里，并表示对拟用途径没有或仅有有限的安全信息，因此无法判断复配产品是否会造成伤害。本维基没有总结动物研究。',
				'FDA ใส่ BPC-157 ไว้ในรายการเสนอชื่อผสมยาที่ถูกถอน และบอกว่ามีข้อมูลความปลอดภัยไม่เลยหรือมีจำกัดสำหรับทางที่ใช้ จึงบอกไม่ได้ว่าผลิตภัณฑ์ที่ผสมจะก่ออันตรายหรือไม่ วิกินี้ยังไม่ได้สรุปการศึกษาในสัตว์',
			),
			goals: ['restore'],
			badge: 'limited',
			href: '/peptides/bpc-157/',
			sources: [{
				url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks',
				label: 'FDA, bulk substances that may present safety risks',
			}],
		},
		{
			name: L('Purity and a certificate of analysis', '纯度与检验报告', 'ความบริสุทธิ์และใบรับรองผลวิเคราะห์'),
			summary: L(
				'FDA says unapproved versions of GLP-1 drugs are not reviewed for quality before they are marketed. Reading a certificate of analysis is filed on this wiki; the certificate itself is not proof that a product is appropriate to use.',
				'FDA 指出，未经批准的 GLP-1 药物版本在上市前不会经过质量审评。本维基有一页说明如何阅读检验报告；报告本身并不能证明产品适合使用。',
				'FDA ระบุว่าเวอร์ชันยา GLP-1 ที่ยังไม่อนุมัติไม่ได้รับการตรวจคุณภาพก่อนวางตลาด วิกินี้มีหน้าอธิบายวิธีอ่านใบรับรองผลวิเคราะห์ ตัวใบรับรองเองไม่ได้พิสูจน์ว่าผลิตภัณฑ์เหมาะที่จะใช้',
			),
			goals: ['restore', 'enhance', 'extend'],
			badge: 'limited',
			href: '/peptides/reading-a-coa/',
			sources: [{
				url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
				label: 'FDA, concerns with unapproved GLP-1 drugs',
			}],
		},
	],
	neurohacking: [
		{
			name: L('Neuralink N1', 'Neuralink N1', 'Neuralink N1'),
			summary: L(
				'Neuralink’s April 2024 update says the first person received the N1 in January, in the PRIME study, and that the device is an intracortical implant whose threads are inserted into the cortex at the precentral gyrus. The stated aim is to let people with quadriplegia control external devices. That placement is in the cortex, not under it.',
				'Neuralink 在 2024 年 4 月的更新中说，第一位接受者于 1 月在 PRIME 研究中植入了 N1，这是一种皮层内装置，细丝插入皮层的中央前回。其目标是让四肢瘫痪的人控制外部设备。这个位置在皮层内，不是皮层下。',
				'บันทึกของ Neuralink เมื่อเมษายน 2024 บอกว่าคนแรกได้รับ N1 ในเดือนมกราคม ในการศึกษา PRIME และว่าอุปกรณ์นี้ฝังในคอร์เทกซ์ โดยสอดเส้นเข้าที่คอร์เทกซ์บริเวณพรีเซนทรัลไจรัส เป้าหมายคือให้ผู้ที่เป็นอัมพาตทั้งสี่ข้าควบคุมอุปกรณ์ภายนอก ตำแหน่งนี้อยู่ในคอร์เทกซ์ ไม่ใช่ใต้คอร์เทกซ์',
			),
			goals: ['restore'],
			badge: 'trial',
			href: '/neurohacking/bci/neuralink-n1/',
			sources: [{
				url: 'https://neuralink.com/updates/prime-study-progress-update/',
				label: 'Neuralink, PRIME study update, 12 April 2024',
			}],
		},
		{
			name: L('Synchron Stentrode', 'Synchron Stentrode', 'Synchron Stentrode'),
			summary: L(
				'Synchron reported results from the COMMAND study of its endovascular brain-computer interface in six people with severe arm paralysis. The company said all six met the primary safety endpoint of no device-related serious adverse event causing death or permanent increase in disability over one year. This is the company’s announcement, not an independent write-up.',
				'Synchron 公布了 COMMAND 研究的结果：六名严重手臂瘫痪者接受了血管内脑机接口。公司称六人都达到主要安全终点，即一年内没有因装置导致死亡或永久性加重残疾的严重不良事件。这是公司公告，不是独立综述。',
				'Synchron รายงานผลการศึกษา COMMAND ของส่วนต่อประสานสมองกับคอมพิวเตอร์ในหลอดเลือด ในคนหกคนที่เป็นอัมพาตแขนรุนแรง บริษัทบอกว่าทั้งหกบรรลุจุดสิ้นสุดด้านความปลอดภัยหลัก คือไม่มีเหตุการณ์ไม่พึงประสงค์ร้ายแรงจากอุปกรณ์ที่ทำให้เสียชีวิตหรือพิการถาวรเพิ่มขึ้นในหนึ่งปี นี่คือแถลงการณ์ของบริษัท ไม่ใช่บทสรุปอิสระ',
			),
			goals: ['restore'],
			badge: 'trial',
			href: '/neurohacking/bci/synchron-stentrode/',
			sources: [{
				url: 'https://www.businesswire.com/news/home/20240930433219/en/Synchron-Announces-Positive-Results-from-U.S.-COMMAND-Study-of-Endovascular-Brain-Computer-Interface',
				label: 'Synchron, COMMAND study announcement, 30 Sept 2024',
			}],
		},
		{
			name: L('TMS for depression', '用于抑郁的 TMS', 'TMS สำหรับภาวะซึมเศร้า'),
			summary: L(
				'FDA cleared the NeuroStar TMS system in 2008 for adults with major depressive disorder who had not improved enough on one prior antidepressant. The clearance is for a prescription device used under a psychiatrist’s supervision.',
				'FDA 在 2008 年许可 NeuroStar TMS 系统，用于一种抗抑郁药治疗后改善仍不理想的成人重性抑郁障碍。这是在精神科医师监督下凭处方使用的器械。',
				'FDA รับรองระบบ NeuroStar TMS ในปี 2008 สำหรับผู้ใหญ่ที่มีโรคซึมเศร้าหลักที่ยาต้านเศร้าก่อนหน้าหนึ่งชนิดยังช่วยได้ไม่พอ เป็นเครื่องมือตามใบสั่งที่ใช้ภายใต้การดูแลจิตแพทย์',
			),
			goals: ['restore'],
			badge: 'approved',
			href: '/neurohacking/neuromodulation/tms/',
			sources: [{
				url: 'https://www.accessdata.fda.gov/cdrh_docs/pdf8/K083538.pdf',
				label: 'FDA 510(k) K083538, NeuroStar TMS, 16 Dec 2008',
			}],
		},
		{
			name: L('EEG neurofeedback', '脑电神经反馈', 'นิวโรฟีดแบ็กด้วย EEG'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			href: '/neurohacking/noninvasive/',
			stub: true,
		},
	],
	cyborg: [
		{
			name: L('Hand chips for doors or payments', '用于开门或支付的手部芯片', 'ชิปในมือเพื่อเปิดประตูหรือจ่ายเงิน'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			href: '/cyborg/grinder-implants/',
			stub: true,
		},
		{
			name: L('Fingertip magnets', '指尖磁体', 'แม่เหล็กที่ปลายนิ้ว'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			href: '/cyborg/grinder-implants/',
			stub: true,
		},
		{
			name: L('Sensors that do not touch the nerves', '不接触神经的传感器', 'เซนเซอร์ที่ไม่แตะเส้นประสาท'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			href: '/cyborg/grinder-implants/',
			stub: true,
		},
	],
	'quantified-self': [
		{
			name: L('Continuous glucose monitors', '连续血糖监测', 'เครื่องวัดกลูโคสต่อเนื่อง'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			href: '/quantified-self/cgm/',
			stub: true,
		},
		{
			name: L('Heart-rate variability', '心率变异性', 'ความแปรปรวนของอัตราหัวใจ'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			href: '/quantified-self/hrv/',
			stub: true,
		},
		{
			name: L('Sleep tracking', '睡眠追踪', 'การติดตามการนอน'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			stub: true,
		},
	],
	lifestyle: [
		{
			name: L('Morning light', '晨光', 'แสงยามเช้า'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Cold', '冷暴露', 'ความเย็น'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Heat', '热暴露', 'ความร้อน'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Eating window', '进食窗口', 'หน้าต่างการกิน'),
			summary: notYet,
			goals: ['extend'],
			badge: 'limited',
			stub: true,
		},
	],
	genetic: [
		{
			name: L('Approved gene therapies', '已获批的基因治疗', 'ยีนบำบัดที่ได้รับอนุมัติ'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('CRISPR medicines', 'CRISPR 药物', 'ยา CRISPR'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Consumer DNA tests', '消费级基因检测', 'การตรวจดีเอ็นเอสำหรับผู้บริโภค'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Epigenetic clocks', '表观遗传时钟', 'นาฬิกาอีพิเจเนติกส์'),
			summary: notYet,
			goals: ['extend'],
			badge: 'limited',
			stub: true,
		},
	],
	cellular: [
		{
			name: L('Approved cell products', '已获批的细胞产品', 'ผลิตภัณฑ์เซลล์ที่ได้รับอนุมัติ'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Stem-cell clinic offers', '干细胞诊所的宣传', 'ข้อเสนอจากคลินิกสเต็มเซลล์'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Platelet-rich plasma', '富血小板血浆', 'พลาสมาเกล็ดเลือดเข้มข้น'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Partial reprogramming', '部分重编程', 'การรีโปรแกรมบางส่วน'),
			summary: notYet,
			goals: ['extend'],
			badge: 'limited',
			stub: true,
		},
	],
	microbiome: [
		{
			name: L('Fecal microbiota transplant', '粪菌移植', 'การปลูกถ่ายจุลินทรีย์จากอุจจาระ'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Probiotics', '益生菌', 'โพรไบโอติก'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			stub: true,
		},
		{
			name: L('Stool sequencing', '粪便测序', 'การหาลำดับจากอุจจาระ'),
			summary: notYet,
			goals: ['enhance'],
			badge: 'limited',
			stub: true,
		},
	],
	bionic: [
		{
			name: L('Myoelectric hands', '肌电假手', 'มือเทียมไมโออิเล็กทริก'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			href: '/bionic/bionic-hands/',
			stub: true,
		},
		{
			name: L('Rehab exoskeletons', '康复外骨骼', 'โครงกระดูกกลเพื่อฟื้นฟู'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			href: '/bionic/exoskeletons/',
			stub: true,
		},
		{
			name: L('Bone-anchored prostheses', '骨固定假肢', 'อวัยวะเทียมที่ยึดกับกระดูก'),
			summary: notYet,
			goals: ['restore'],
			badge: 'limited',
			href: '/bionic/tmr-osseointegration/',
			stub: true,
		},
	],
};

export function scenariosFor(slug: string): Scenario[] {
	return domainScenarios[slug] ?? [];
}

export const evidenceBadge: Record<EvidenceBadge, Localized> = {
	approved: L('Approved', '已获批', 'อนุมัติแล้ว'),
	trial: L('Clinical trial', '临床试验', 'การทดลองทางคลินิก'),
	early: L('Animal or early research', '仅动物或早期研究', 'การศึกษาในสัตว์หรือระยะต้น'),
	limited: L('Limited evidence', '证据有限', 'หลักฐานจำกัด'),
};
