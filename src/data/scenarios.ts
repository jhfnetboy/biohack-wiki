import type { GoalId } from './domain-keywords';
import type { LocaleId } from '../lib/locale';

export type Localized = Record<LocaleId, string>;

export type Scenario = {
	name: Localized;
	uses: Localized;
	goals: GoalId[];
	status: Localized;
	note: Localized;
	href?: string;
	stub?: boolean;
};

const L = (en: string, zh: string, th: string): Localized => ({ en, zh, th });

const stubNote = L(
	'Stub, needs sourcing. No outcome is stated.',
	'存根，需要来源。不写结局。',
	'ฉบับร่าง ยังต้องหาแหล่งอ้างอิง ไม่ได้ระบุผลลัพธ์',
);

export const domainScenarios: Record<string, Scenario[]> = {
	biochemical: [
		{
			name: L('Caffeine with L-theanine', '咖啡因与 L-茶氨酸', 'คาเฟอีนกับ L-theanine'),
			uses: L('Caffeine and L-theanine, discussed for focus.', '咖啡因和 L-茶氨酸，被讨论用于专注。', 'คาเฟอีนและ L-theanine ที่ถูกพูดถึงเรื่องสมาธิ'),
			goals: ['enhance'],
			status: L('Supplement talk. Research not opened.', '补充剂讨论。研究没有打开。', 'การพูดถึงผลิตภัณฑ์เสริม ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Creatine', '肌酸', 'ครีเอทีน'),
			uses: L('Creatine, discussed for strength and cognition.', '肌酸，被讨论用于力量和认知。', 'ครีเอทีน ที่ถูกพูดถึงเรื่องกำลังและการรู้คิด'),
			goals: ['enhance'],
			status: L('Research not opened.', '研究没有打开。', 'ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Melatonin', '褪黑素', 'เมลาโทนิน'),
			uses: L('Melatonin, discussed for sleep timing.', '褪黑素，被讨论用于睡眠时间。', 'เมลาโทนิน ที่ถูกพูดถึงเรื่องจังหวะการนอน'),
			goals: ['enhance'],
			status: L('Supplement talk. Research not opened.', '补充剂讨论。研究没有打开。', 'การพูดถึงผลิตภัณฑ์เสริม ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Metformin and rapamycin', '二甲双胍与雷帕霉素', 'เมตฟอร์มินและราพามัยซิน'),
			uses: L(
				'Metformin and rapamycin. TAME is a named metformin trial. The NIA ITP page is the mouse-program stub.',
				'二甲双胍和雷帕霉素。TAME 是点名的二甲双胍试验。NIA ITP 页是小鼠计划的存根。',
				'เมตฟอร์มินและราพามัยซิน TAME เป็นชื่อการทดลองเมตฟอร์มิน หน้า NIA ITP เป็นฉบับร่างของโครงการในหนู',
			),
			goals: ['extend'],
			status: L('Longevity research. No result copied.', '长寿研究。没有抄录结果。', 'งานวิจัยอายุยืน ไม่ได้คัดลอกผล'),
			note: L(
				'Stub, needs sourcing for TAME. The ITP page states no mouse result.',
				'TAME 是存根，需要来源。ITP 页不写小鼠结果。',
				'TAME เป็นฉบับร่างที่ยังต้องหาแหล่งอ้างอิง หน้า ITP ไม่ได้ระบุผลในหนู',
			),
			href: '/goals/longevity/nia-itp/',
			stub: true,
		},
	],
	peptides: [
		{
			name: L('GLP-1 agonists', 'GLP-1 激动剂', 'ตัวกระตุ้น GLP-1'),
			uses: L(
				'Semaglutide and tirzepatide. Approved products exist; those labels were not opened.',
				'司美格鲁肽和替尔泊肽。存在已批准产品；那些说明书没有打开。',
				'เซมากลูไทด์และเทอร์เซพาไทด์ มีผลิตภัณฑ์ที่อนุมัติแล้ว แต่ยังไม่ได้เปิดฉลากนั้น',
			),
			goals: ['restore'],
			status: L(
				'Approved products exist. This wiki’s opened FDA page is about unapproved versions.',
				'存在已批准产品。本维基打开的 FDA 页面讲的是未经批准的版本。',
				'มีผลิตภัณฑ์ที่อนุมัติแล้ว หน้า FDA ที่วิกินี้เปิดเป็นเรื่องเวอร์ชันที่ยังไม่อนุมัติ',
			),
			note: L(
				'Stub, needs sourcing for the approval labels. No efficacy comparison.',
				'批准说明书是存根，需要来源。没有疗效对比。',
				'ฉลากที่อนุมัติเป็นฉบับร่าง ยังต้องหาแหล่งอ้างอิง ไม่มีการเปรียบเทียบประสิทธิผล',
			),
			href: '/peptides/glp-1-agonists/',
			stub: true,
		},
		{
			name: L('GHK-Cu', 'GHK-Cu', 'GHK-Cu'),
			uses: L(
				'GHK-Cu. The sourced note is injectable GHK-Cu on an FDA withdrawn-nomination list.',
				'GHK-Cu。有来源的笔记是 FDA 撤回提名清单上的注射用 GHK-Cu。',
				'GHK-Cu บันทึกที่มีแหล่งอ้างอิงคือ GHK-Cu แบบฉีดในรายการเสนอชื่อที่ FDA ถอน',
			),
			goals: ['enhance'],
			status: L(
				'Topical skin research is not summarized.',
				'外用皮肤研究没有总结。',
				'ยังไม่ได้สรุปงานวิจัยการใช้ทางผิวหนัง',
			),
			note: stubNote,
			href: '/peptides/ghk-cu/',
			stub: true,
		},
		{
			name: L('BPC-157', 'BPC-157', 'BPC-157'),
			uses: L(
				'BPC-157. FDA lists it among compounding substances with safety concerns.',
				'BPC-157。FDA 把它列在有安全顾虑的复配物质中。',
				'BPC-157 FDA ระบุในสารสำหรับผสมที่มีข้อกังวลด้านความปลอดภัย',
			),
			goals: ['restore'],
			status: L('Not an approved drug. No efficacy claim.', '不是已批准药物。不写疗效。', 'ไม่ใช่ยาที่อนุมัติแล้ว ไม่ได้อ้างประสิทธิผล'),
			note: L(
				'Taken from the opened FDA compounding-risk page.',
				'取自已打开的 FDA 复配风险页。',
				'นำมาจากหน้าความเสี่ยงของการผสมยาของ FDA ที่เปิดแล้ว',
			),
			href: '/peptides/bpc-157/',
		},
		{
			name: L('Purity and a COA', '纯度与检验报告', 'ความบริสุทธิ์และใบรับรองผลวิเคราะห์'),
			uses: L(
				'A certificate of analysis and third-party testing. Not a body effect.',
				'检验报告和第三方检测。不是身体效应。',
				'ใบรับรองผลการวิเคราะห์และการตรวจโดยบุคคลที่สาม ไม่ใช่ผลต่อร่างกาย',
			),
			goals: ['restore', 'enhance', 'extend'],
			status: L('Quality problem. How to read a COA is filed.', '质量问题。如何读检验报告已归档。', 'ปัญหาคุณภาพ วิธีอ่านใบรับรองถูกจัดเก็บไว้แล้ว'),
			note: L(
				'Prices and lab tables stay on VeriSeas, not here.',
				'价格和检测表在 VeriSeas，不在这里。',
				'ราคาและตารางผลแล็บอยู่ที่ VeriSeas ไม่ใช่ที่นี่',
			),
			href: '/peptides/reading-a-coa/',
		},
	],
	neurohacking: [
		{
			name: L('Neuralink N1', 'Neuralink N1', 'Neuralink N1'),
			uses: L(
				'The N1 implant, named for paralysis trials. Electrodes are intracortical.',
				'N1 植入物，用于点名的瘫痪试验。电极在皮层内。',
				'อุปกรณ์ฝัง N1 ที่ถูกระบุในการทดลองอัมพาต อิเล็กโทรดอยู่ในคอร์เทกซ์',
			),
			goals: ['restore'],
			status: L('Clinical trial. Results are not stated.', '临床试验。不写结果。', 'การทดลองทางคลินิก ไม่ได้ระบุผล'),
			note: L(
				'Stub, needs sourcing for the trial record. Not a subcortical implant.',
				'试验记录是存根，需要来源。不是皮层下植入。',
				'บันทึกการทดลองเป็นฉบับร่าง ยังต้องหาแหล่งอ้างอิง ไม่ใช่อุปกรณ์ฝังใต้คอร์เทกซ์',
			),
			href: '/neurohacking/bci/neuralink-n1/',
			stub: true,
		},
		{
			name: L('Synchron Stentrode', 'Synchron Stentrode', 'Synchron Stentrode'),
			uses: L(
				'An intravascular BCI, named for paralysis.',
				'血管内脑机接口，用于点名的瘫痪场景。',
				'ส่วนต่อประสานสมองกับคอมพิวเตอร์ในหลอดเลือด สำหรับอัมพาต',
			),
			goals: ['restore'],
			status: L('Clinical trial. Results are not stated.', '临床试验。不写结果。', 'การทดลองทางคลินิก ไม่ได้ระบุผล'),
			note: stubNote,
			href: '/neurohacking/bci/synchron-stentrode/',
			stub: true,
		},
		{
			name: L('TMS', 'TMS', 'TMS'),
			uses: L(
				'Transcranial magnetic stimulation, discussed for depression.',
				'经颅磁刺激，被讨论用于抑郁。',
				'การกระตุ้นด้วยแม่เหล็กผ่านกะโหลก ที่ถูกพูดถึงเรื่องซึมเศร้า',
			),
			goals: ['restore'],
			status: L('Clearance text was not opened.', '许可文本没有打开。', 'ยังไม่ได้เปิดข้อความการรับรอง'),
			note: stubNote,
			href: '/neurohacking/neuromodulation/tms/',
			stub: true,
		},
		{
			name: L('EEG neurofeedback', '脑电神经反馈', 'นิวโรฟีดแบ็ก EEG'),
			uses: L('Consumer and clinic EEG headsets.', '消费级和临床脑电头戴设备。', 'หูฟัง EEG สำหรับผู้บริโภคและคลินิก'),
			goals: ['enhance'],
			status: L('Device class was not opened.', '器械类别没有打开。', 'ยังไม่ได้เปิดประเภทเครื่องมือ'),
			note: stubNote,
			href: '/neurohacking/noninvasive/',
			stub: true,
		},
	],
	cyborg: [
		{
			name: L('NFC and RFID chips', 'NFC 与 RFID 芯片', 'ชิป NFC และ RFID'),
			uses: L(
				'A chip in the hand, discussed for doors or payments.',
				'手部芯片，被讨论用于开门或支付。',
				'ชิปในมือ ที่ถูกพูดถึงเรื่องเปิดประตูหรือการชำระเงิน',
			),
			goals: ['enhance'],
			status: L('Anecdotal grinder practice.', 'Grinder 社区的轶事。', 'แนวปฏิบัติแบบเล่าต่อของกลุ่ม grinder'),
			note: stubNote,
			href: '/cyborg/grinder-implants/',
			stub: true,
		},
		{
			name: L('Fingertip magnets', '指尖磁体', 'แม่เหล็กที่ปลายนิ้ว'),
			uses: L('A small magnet under the skin of a finger.', '手指皮下的小磁体。', 'แม่เหล็กขนาดเล็กใต้ผิวหนังนิ้ว'),
			goals: ['enhance'],
			status: L('Anecdotal. No incident list was opened.', '轶事。没有打开事件清单。', 'เรื่องเล่า ยังไม่ได้เปิดรายการเหตุการณ์'),
			note: stubNote,
			href: '/cyborg/grinder-implants/',
			stub: true,
		},
		{
			name: L('Sensors that skip the nerves', '不接神经的传感器', 'เซนเซอร์ที่ไม่ต่อเส้นประสาท'),
			uses: L(
				'An implanted sensor that does not read or write neural signals.',
				'不读写神经信号的植入传感器。',
				'เซนเซอร์ฝังที่ไม่อ่านหรือเขียนสัญญาณประสาท',
			),
			goals: ['enhance'],
			status: L('Examples were not sourced.', '例子没有来源。', 'ตัวอย่างยังไม่มีแหล่งอ้างอิง'),
			note: stubNote,
			href: '/cyborg/grinder-implants/',
			stub: true,
		},
	],
	'quantified-self': [
		{
			name: L('Continuous glucose monitor', '连续血糖监测', 'เครื่องวัดกลูโคสต่อเนื่อง'),
			uses: L('A CGM such as the devices named on the CGM page.', 'CGM 页点名的那类设备。', 'CGM แบบที่หน้าระบุชื่อไว้'),
			goals: ['restore'],
			status: L('Medical devices exist. Accuracy is not stated.', '存在医疗器械。不写准确率。', 'มีเครื่องมือแพทย์ ไม่ได้ระบุความแม่นยำ'),
			note: stubNote,
			href: '/quantified-self/cgm/',
			stub: true,
		},
		{
			name: L('Heart-rate variability', '心率变异性', 'ความแปรปรวนของอัตราหัวใจ'),
			uses: L('A ring, watch, or strap that reports HRV.', '报告心率变异性的戒指、手表或胸带。', 'แหวน นาฬิกา หรือสายรัดที่รายงาน HRV'),
			goals: ['enhance'],
			status: L('A reading is not a diagnosis.', '读数不是诊断。', 'ค่าที่อ่านได้ไม่ใช่การวินิจฉัย'),
			note: stubNote,
			href: '/quantified-self/hrv/',
			stub: true,
		},
		{
			name: L('Sleep tracking', '睡眠追踪', 'การติดตามการนอน'),
			uses: L('A wearable that stages sleep.', '做睡眠分期的可穿戴设备。', 'อุปกรณ์สวมใส่ที่แบ่งระยะการนอน'),
			goals: ['enhance'],
			status: L('Consumer wellness. Validation was not opened.', '消费级健康设备。验证没有打开。', 'อุปกรณ์สุขภาพผู้บริโภค ยังไม่ได้เปิดการตรวจสอบ'),
			note: stubNote,
			stub: true,
		},
	],
	lifestyle: [
		{
			name: L('Morning light', '晨光', 'แสงยามเช้า'),
			uses: L('Daylight to the eyes, discussed for the circadian clock.', '照到眼睛的日光，被讨论用于生物钟。', 'แสงกลางวันที่เข้าตา ที่ถูกพูดถึงเรื่องนาฬิกาชีวภาพ'),
			goals: ['enhance'],
			status: L('Research not opened. No brightness number.', '研究没有打开。没有亮度数字。', 'ยังไม่ได้เปิดงานวิจัย ไม่มีตัวเลขความสว่าง'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Cold', '寒冷', 'ความเย็น'),
			uses: L('Cold water or cold air. No temperature is published.', '冷水或冷空气。不公布温度。', 'น้ำเย็นหรืออากาศเย็น ไม่ได้เผยแพร่อุณหภูมิ'),
			goals: ['enhance'],
			status: L('Research not opened.', '研究没有打开。', 'ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Heat', '炎热', 'ความร้อน'),
			uses: L('A sauna or other heat. No temperature is published.', '桑拿或其他热暴露。不公布温度。', 'ซาวน่าหรือความร้อนอื่น ไม่ได้เผยแพร่อุณหภูมิ'),
			goals: ['enhance'],
			status: L('Research not opened.', '研究没有打开。', 'ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Eating window', '进食窗口', 'หน้าต่างการกิน'),
			uses: L('Time-restricted eating. No schedule is published.', '限时进食。不公布时间表。', 'การกินแบบจำกัดเวลา ไม่ได้เผยแพร่ตาราง'),
			goals: ['extend'],
			status: L('Research not opened.', '研究没有打开。', 'ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
	],
	genetic: [
		{
			name: L('Approved gene therapies', '已批准的基因治疗', 'ยีนบำบัดที่อนุมัติแล้ว'),
			uses: L('Nucleic-acid medicines. The approval list was not opened.', '核酸药物。批准清单没有打开。', 'ยาที่เป็นกรดนิวคลีอิก ยังไม่ได้เปิดรายการที่อนุมัติ'),
			goals: ['restore'],
			status: L('Approved products exist. Names were not copied.', '存在已批准产品。没有抄录名称。', 'มีผลิตภัณฑ์ที่อนุมัติแล้ว ไม่ได้คัดลอกชื่อ'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('CRISPR medicines', 'CRISPR 药物', 'ยา CRISPR'),
			uses: L(
				'A CRISPR-based medicine has been discussed for sickle cell disease. The file was not opened.',
				'有一种基于 CRISPR 的药物被讨论用于镰状细胞病。档案没有打开。',
				'มียาที่ใช้ CRISPR ที่ถูกพูดถึงเรื่องโรคเม็ดเลือดรูปเคียว ยังไม่ได้เปิดเอกสาร',
			),
			goals: ['restore'],
			status: L('Approval file was not opened.', '批准档案没有打开。', 'ยังไม่ได้เปิดเอกสารการอนุมัติ'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Consumer DNA tests', '消费级基因检测', 'การตรวจดีเอ็นเอสำหรับผู้บริโภค'),
			uses: L('A saliva DNA test sold to consumers.', '卖给消费者的唾液 DNA 检测。', 'การตรวจดีเอ็นเอจากน้ำลายที่ขายให้ผู้บริโภค'),
			goals: ['enhance'],
			status: L('What the report can say was not opened.', '报告能说明什么没有打开。', 'ยังไม่ได้เปิดว่าผลตรวจบอกอะไรได้'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Epigenetic clocks', '表观遗传时钟', 'นาฬิกาอีพิเจเนติกส์'),
			uses: L('A blood or saliva test that estimates biological age.', '用血液或唾液估计生物年龄的检测。', 'การตรวจเลือดหรือน้ำลายที่ประมาณอายุทางชีวภาพ'),
			goals: ['extend'],
			status: L('Error bars were not opened.', '误差没有打开。', 'ยังไม่ได้เปิดช่วงความคลาดเคลื่อน'),
			note: stubNote,
			stub: true,
		},
	],
	cellular: [
		{
			name: L('CAR-T and other approved cell products', 'CAR-T 等已批准细胞产品', 'CAR-T และผลิตภัณฑ์เซลล์ที่อนุมัติแล้ว'),
			uses: L('Living immune cells returned to the same person. The product list was not opened.', '回输给本人的活免疫细胞。产品清单没有打开。', 'เซลล์ภูมิคุ้มกันมีชีวิตที่ให้กลับคนเดิม ยังไม่ได้เปิดรายการผลิตภัณฑ์'),
			goals: ['restore'],
			status: L('Approved products exist. Names were not copied.', '存在已批准产品。没有抄录名称。', 'มีผลิตภัณฑ์ที่อนุมัติแล้ว ไม่ได้คัดลอกชื่อ'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Stem-cell clinic offers', '干细胞诊所服务', 'ข้อเสนอคลินิกสเต็มเซลล์'),
			uses: L('Unapproved clinic offers. They are not listed and not reviewed.', '未经批准的诊所服务。不列举，也不评。', 'ข้อเสนอคลินิกที่ยังไม่อนุมัติ ไม่ได้ระบุชื่อและไม่ได้ประเมิน'),
			goals: ['restore'],
			status: L('Not a product list.', '不是产品清单。', 'ไม่ใช่รายการผลิตภัณฑ์'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Platelet-rich plasma', '富血小板血浆', 'พลาสมาที่มีเกล็ดเลือดเข้มข้น'),
			uses: L('PRP, a person’s own platelets. Evidence was not opened.', 'PRP，本人的血小板。证据没有打开。', 'PRP เกล็ดเลือดของคนคนนั้น ยังไม่ได้เปิดหลักฐาน'),
			goals: ['restore'],
			status: L('Clinical use is discussed. Studies were not opened.', '临床使用被讨论。研究没有打开。', 'มีการพูดถึงการใช้ทางคลินิก ยังไม่ได้เปิดงานวิจัย'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Partial reprogramming', '部分重编程', 'การรีโปรแกรมบางส่วน'),
			uses: L('Yamanaka factors are the research name. No protocol.', '山中因子是研究中的名称。没有流程。', 'ปัจจัยยามานากะเป็นชื่อในงานวิจัย ไม่มีโปรโตคอล'),
			goals: ['extend'],
			status: L('Research-only.', '仅研究。', 'งานวิจัยเท่านั้น'),
			note: stubNote,
			stub: true,
		},
	],
	microbiome: [
		{
			name: L('Fecal microbiota transplant', '粪菌移植', 'การปลูกถ่ายจุลินทรีย์จากอุจจาระ'),
			uses: L('Donor stool for a gut infection. The FDA page was not opened.', '供体粪便用于肠道感染。FDA 页面没有打开。', 'อุจจาระผู้บริจาคสำหรับการติดเชื้อในลำไส้ ยังไม่ได้เปิดหน้า FDA'),
			goals: ['restore'],
			status: L('Regulated in some uses. The rule was not opened.', '某些用途受监管。规则没有打开。', 'มีการกำกับในบางการใช้ ยังไม่ได้เปิดกฎ'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Probiotics', '益生菌', 'โพรไบโอติก'),
			uses: L('Live microbes sold as foods or supplements.', '作为食品或补充剂出售的活微生物。', 'จุลินทรีย์มีชีวิตที่ขายเป็นอาหารหรือผลิตภัณฑ์เสริม'),
			goals: ['restore'],
			status: L('Evidence was not summarized.', '证据没有总结。', 'ยังไม่ได้สรุปหลักฐาน'),
			note: stubNote,
			stub: true,
		},
		{
			name: L('Stool sequencing', '粪便测序', 'การหาลำดับจากอุจจาระ'),
			uses: L('A consumer test of gut microbes.', '消费者肠道微生物检测。', 'การตรวจจุลินทรีย์ลำไส้สำหรับผู้บริโภค'),
			goals: ['enhance'],
			status: L('What the report means was not opened.', '报告意味着什么没有打开。', 'ยังไม่ได้เปิดว่าผลรายงานหมายถึงอะไร'),
			note: stubNote,
			stub: true,
		},
	],
	bionic: [
		{
			name: L('Myoelectric hands', '肌电假手', 'มือเทียมไมโออิเล็กทริก'),
			uses: L('A powered prosthetic hand controlled by muscle signals.', '由肌肉信号控制的动力假手。', 'มือเทียมขับเคลื่อนที่ควบคุมด้วยสัญญาณกล้ามเนื้อ'),
			goals: ['restore'],
			status: L('Commercial devices. Comparisons are stubs.', '商业器械。对比是存根。', 'อุปกรณ์เชิงพาณิชย์ การเปรียบเทียบเป็นฉบับร่าง'),
			note: L(
				'WHO’s assistive-technology fact sheet is the sourced overview.',
				'WHO 辅助技术事实清单是有来源的总览。',
				'เอกสารข้อเท็จจริงเทคโนโลยีสิ่งอำนวยความสะดวกของ WHO เป็นภาพรวมที่มีแหล่งอ้างอิง',
			),
			href: '/bionic/bionic-hands/',
		},
		{
			name: L('Rehab exoskeletons', '康复外骨骼', 'โครงกระดูกกลเพื่อฟื้นฟู'),
			uses: L('A powered frame that assists walking in rehab.', '在康复中辅助行走的动力支架。', 'โครงขับเคลื่อนที่ช่วยการเดินในการฟื้นฟู'),
			goals: ['restore'],
			status: L('Clinical devices. Evidence was not opened.', '临床器械。证据没有打开。', 'เครื่องมือทางคลินิก ยังไม่ได้เปิดหลักฐาน'),
			note: stubNote,
			href: '/bionic/exoskeletons/',
			stub: true,
		},
		{
			name: L('Osseointegration', '骨整合', 'การยึดกับกระดูก'),
			uses: L('A mount fixed to bone for a prosthesis.', '固定在骨骼上、用来连接假肢的基座。', 'ฐานที่ยึดกับกระดูกสำหรับอวัยวะเทียม'),
			goals: ['restore'],
			status: L('Surgical practice. Details were not opened.', '外科实践。细节没有打开。', 'การปฏิบัติทางศัลยกรรม ยังไม่ได้เปิดรายละเอียด'),
			note: stubNote,
			href: '/bionic/tmr-osseointegration/',
			stub: true,
		},
	],
};

export function scenariosFor(slug: string): Scenario[] {
	return domainScenarios[slug] ?? [];
}
