> **Owner decision 2026-11-20 (overrides §3.2 ②):** rename "Lifestyle & Environment" to **Environmental Signals · 环境信号** (th: สัญญาณสิ่งแวดล้อม), keywords **Light · Cold & Heat / 光照 · 冷热 / แสง · ร้อนเย็น**. Scope: deliberate, dosed, measurable physical and timing signals that flip built-in switches (light → circadian clock; cold → brown fat/norepinephrine; heat → heat-shock proteins; hypoxia → EPO/red cells; time-restricted eating/fasting → autophagy, insulin sensitivity). Unifying idea: hormesis. Generic sleep/exercise advice is background, not the core. Keep slug `lifestyle` (redirect-safe) or add `environment` with redirect, agent's call. Body anchor: eyes.
> Owner approved the rest of this v3 proposal (10 method domains + 3 goals: Restore / Enhance / Extend).

# 08 · BioHack Wiki 一级领域分类 v3 提案

- 编写时间：2026-11-20 20:10（UTC+7）
- 状态：**提案，仅做分析，未改 repo**。仓库 jhfnetboy/biohack-wiki，本地克隆在 /workspace/biohack-wiki，线上站点 https://biohack-wiki.pages.dev 。
- 起因：用户 raw #023、#024 指出，“长寿”是一个需求或目标，覆盖所有领域，和肽、基因、量化自我这些按手段划分的领域不在同一个维度上，彼此“不能评级”。用户要求先把分类定清楚再画图。
- 本文的依据：
  - raw #009，即用户粘贴的 ChatGPT《Biohacking 全景介绍》全文；
  - raw #010 的分享链接和其中的 5 张图；
  - 04、07 两份 IA 文档；
  - 仓库现状；
  - 本次打开过的外部资料（链接见文末）。

---

## 0. 结论先行

- **唯一的分类轴：你给身体带进去的是什么，也就是干预介质（modality）。**
  - 每个领域回答“用什么手段 hack 人”，不回答“为了什么”，也不回答“作用在哪个器官”。
  - 10 个领域按从信息到分子、到生命体、再到机器的顺序排开，都处在同一个维度上，因此可以并列比较。
- **10 个领域：**
  - 量化自我、生活方式与环境；
  - 生化小分子、肽；
  - 基因、细胞与再生、微生物组；
  - 神经科技、植入与赛博格、仿生。
- **长寿退出领域层，升级为“目标”（Goal）。**目标有三个：
  - 修复 Restore，对应治疗；
  - 增强 Enhance；
  - 延寿 Extend，即延长健康寿命 healthspan。
- **两条辅助轴不当一级导航，作为标签和筛选：**
  - 每个条目的 frontmatter 同时标出它服务哪些目标，以及作用在哪个身体部位或系统；
  - 首页人体图上的连线，就是“领域 → 身体部位”的对应关系。

---

## 1. ChatGPT 对话里的分类：忠实摘要与评价

### 1.1 文件可读性说明
- `/workspace/peptides/research/chatgpt-share.html` **无法提供正文**。它只有 2.8 KB，是 ChatGPT 分享页的空壳，正文由 JS 渲染，页面里只有标题 “Check out this chat”。
- 本次用 WebFetch 重新抓取原链接，结果相同，只拿到 “Check out this chat”。
- 正文来源：用户在 raw #009 粘贴的长文，标题为“Biohacking 全景介绍：从生物化学、脑科学到人机融合”。其中含 “mh.bmj.com+1”“FDA+1”“Neuralink+1”“PubMed Central (PMC)+1” 等 ChatGPT 引用标记，以及 images.openai.com 的配图链接，可以确认是该对话的正文。下面的摘要都基于 raw #009。
- `/workspace/peptides/research/chatgpt-share-images/` 里的 5 张图我逐张看过，**都不是分类图**：
  - img1：BCI 双向闭环示意，标注 Motor cortex、Somatosensory cortex、Robotic arm、“Incoming signal on touch / Outgoing signal to move”；
  - img2：仿生肌电手；
  - img3：康复外骨骼；
  - img4：虎口皮下 RFID 芯片；
  - img5：带压力热图的电子皮肤机械手。
  
  这些图对应正文第五节“智能义肢和人体增强”，用户也说过“有一些图片你可以参考”。它们是第三方版权图，只能作风格参考。

### 1.2 ChatGPT 的分类（原标题照录）
**「一、Biohacking 的主要领域」**：九个方向，原文说明“这是为了理解技术生态而做的分类，不是官方标准”。

| # | 中文 | 英文 | 主要研究与实践（原文） |
|---|---|---|---|
| 1 | 生物化学干预 | Biochemical Hacking | 多肽、激素、代谢调节、营养补充剂 |
| 2 | 脑科学与神经增强 | Neurohacking | 脑机接口、神经刺激、认知增强、神经反馈 |
| 3 | 仿生与智能义肢 | Bionic Augmentation | 机械义肢、神经控制假肢、外骨骼、触觉反馈 |
| 4 | 人体植入与赛博格 | Cyborg / Grinder | RFID/NFC 芯片、磁感应植入、植入式传感器 |
| 5 | 基因与细胞工程 | Genetic Biohacking | CRISPR、基因表达、细胞工程、合成生物学 |
| 6 | 长寿与抗衰老 | Longevity Hacking | 细胞衰老、代谢健康、衰老标志物、再生医学 |
| 7 | 自我量化与生物传感 | Quantified Self | 智能戒指、CGM、心率变异性、睡眠与健康数据 |
| 8 | 微生物组工程 | Microbiome Hacking | 肠道菌群、益生菌、个体化营养、微生态研究 |
| 9 | 环境与行为干预 | Lifestyle / Environmental Hacking | 昼夜节律、光照、运动、温度暴露、睡眠优化 |

**其余结构性内容：**
- **「二、可以从三个技术层次理解 Biohacking」**：
  - 第一层 Observe：观察与测量；
  - 第二层 Intervene：生物干预与调节；
  - 第三层 Augment：人体增强与融合。
- **「三、Peptides（多肽）为什么属于 Biohacking？」**：
  - 原文结论是“Peptide Hacking 是 Biochemical Hacking 的子领域，而不是它的全部”；
  - 原文特意指出 NAD+、肌酸、二甲双胍、雷帕霉素“并不是多肽”。
- **「五、智能义肢和人体增强也属于 Biohacking 吗？」**：
  - 提出 Restoration（功能恢复）和 Enhancement（能力增强）这对概念。
- **「七、哪些领域已经成熟，哪些还处于探索阶段？」**：
  - 成熟度对比表。
- **「八、……最有意思的是什么？」**：
  - Closed-loop Biohacking：Sensing → AI Models → Control。

### 1.3 好在哪里
1. **覆盖面完整。**它把脑科学、义肢、植入、基因、微生物都纳入了 biohacking，而不是只讲补剂，符合用户“全景”的要求。
2. **已经埋下了正确的辅助轴。**“三层”（Observe / Intervene / Augment）和 “Restoration vs Enhancement” 本身就是正交维度，本提案沿用。
3. **对肽的定位科学上正确。**肽是化学类别，不等于统一功效。它还主动区分了“非多肽”，例如 NAD+、二甲双胍。
4. **措辞克制。**原文强调“技术越前沿，并不代表临床证据越充分”，并区分已获批药物和实验性物质。

### 1.4 问题在哪里（用户的直觉是对的）
1. **九个领域混用了至少四种划分标准：**
   - 按**手段或介质**：生化、基因、微生物组、生活方式、植入；
   - 按**身体部位**：脑（Neurohacking 的“脑”）；
   - 按**技术形态**：仿生、赛博格、量化自我；
   - 按**目标**：长寿与抗衰老。
2. **“长寿”是目标，不是手段。**
   - 它列出的内容“细胞衰老、代谢健康、衰老标志物、再生医学”分别属于细胞、生化、测量三个手段，与其他领域重叠。
   - López-Otín 等 2023 年在 Cell 发表的 12 个衰老标志横跨基因组、蛋白稳态、线粒体、营养感知、细胞间通讯、菌群失调等，正好说明“长寿”切过所有领域，见 §4.3。
   - Geroscience（Kennedy 等，Cell 2014）同样把衰老视为多种慢病共同的上游驱动因素，它是一个**目标或框架**，不是一种技术。
3. **“基因与细胞工程”把两种介质捆在一起。**DNA/RNA（改说明书）和活细胞（换零件）是两回事。FDA 也把 gene therapy 和 cellular therapy 分开定义。
4. **肽被放在子领域。**这对 VeriSeas 不利，而且肽在监管和质量上确实有独立边界，见 §5。
5. **Neurohacking 内部混杂。**它同时装了化学手段（nootropics、认知增强药）、行为手段（神经反馈训练）和电子手段（TMS、BCI），按“脑”这个部位归类，与“按手段”冲突。

---

## 2. 现有 9（+肽）领域诊断

仓库现状：
- `src/content.config.ts` 中 `domains = biochemical, neurohacking, bionic, cyborg, genetic, longevity, quantified-self, microbiome, lifestyle, cross-cutting`；
- 肽目前是 biochemical 下的 topic（`peptides/index.mdx` 中 `domain: "biochemical"`）。

| 现有领域 | 实际所在的轴 | 问题 | 处理 |
|---|---|---|---|
| biochemical 生物化学干预 | 介质：化学分子 | 名字太宽，在化学意义上包含肽，与肽并列时会“包含自己的兄弟” | 收窄为“非氨基酸链的小分子与营养素” |
| peptides 肽 | 介质：氨基酸链信号分子 | 目前是子领域 | 升为一级 |
| neurohacking 脑科学与神经增强 | **身体部位**（脑）+ 多种介质 | 与生化（nootropics）、植入（BCI）、量化（EEG）都有重叠 | 收窄为“直接读写神经信号的物理/电子手段”：神经科技 |
| bionic 仿生与智能义肢 | 技术形态：体外或替代性硬件 | 基本在手段轴上 | 保留，明确“替代或外挂肢体与感官” |
| cyborg 人体植入与赛博格 | 技术形态：体内硬件 | 与 BCI、植入式传感器有交叉 | 保留，明确“不读写大脑的皮下植入物” |
| genetic 基因与细胞工程 | 介质：DNA/RNA + 活细胞 | 两种介质混装 | 拆为“基因”与“细胞与再生” |
| **longevity 长寿与抗衰老** | **目标** | 与所有领域重叠，不可比 | **移出领域层，改为目标** |
| quantified-self 自我量化 | 层次：Observe（只读） | 和“三层”中的 Observe 重名；脑电、基因检测、菌群检测归属模糊 | 保留为“通用生理指标与数据”；专科检测归各自领域 |
| microbiome 微生物组 | 介质：活微生物 | 在轴上 | 保留 |
| lifestyle 环境与行为 | 介质：行为与环境输入 | 在轴上（NCCIH 的 “physical / psychological input” 同理） | 保留 |

---

## 3. 推荐方案：单一分类轴，10 个并列领域

### 3.1 分类轴的定义
**轴：干预介质（modality），即“你给身体带进去的是什么”。**
- 每个条目只有一个**主领域**，由它的介质决定。
- 作用在哪里（脑、肠、关节等）是**辅助标签**，不决定领域。为什么（修复、增强、延寿）也是辅助标签。

外部依据：
- NIH NCCIH 把补充与整合健康方法按 “primary therapeutic input（how the therapy is taken in or delivered）” 分为 nutritional、psychological、physical 等类，同样是按输入介质划分，再承认组合存在。本提案是同一思路在 biohacking 上的细化。
- FDA 的产品边界同样按介质切分：drug、biologic（蛋白 > 40 个氨基酸，见 21 CFR 600.3(h)(6)）、gene therapy、cellular therapy、device。监管和证据可以直接对齐。

**判定口诀：从里到外，五组十域。**

| 组 | 介质 | 领域 |
|---|---|---|
| 信息与生活 | 只读数据；行为与环境 | 1 量化自我；2 生活方式与环境 |
| 化学 | 非氨基酸链分子；氨基酸链信号分子 | 3 生化小分子；4 肽 |
| 生命体 | DNA/RNA；活细胞与组织；活微生物 | 5 基因；6 细胞与再生；7 微生物组 |
| 机器 | 读写神经的能量与电子；皮下硬件；外挂或替代硬件 | 8 神经科技；9 植入与赛博格；10 仿生 |

**冲突时的裁决规则，保证互斥：**
1. **神经接口优先。**只要功能是直接读或写神经信号（EEG、TMS、tDCS、VNS、BCI），不论侵入与否，都归 8 神经科技。
2. **按介质，不按靶点。**
   - Senolytics（如 dasatinib + quercetin）是小分子 → 3，标签“靶点：衰老细胞”，并交叉链接到 6；
   - Nootropics 是分子 → 3，标签“靶点：脑”；
   - 益生元、以改变菌群为目的的饮食 → 7（判定：只要目的是改变菌群组成，就归 7）。
3. **是不是氨基酸链？**是 → 4 肽，否 → 3 生化。
   - FDA 把 ≤ 40 个氨基酸定义为 peptide，> 40 为 protein（biologic）。
   - 胰岛素（51 aa）、hGH 等蛋白类激素机制同属“信号”，质量和检测问题也相同，因此也收在 4，加“protein”子标签。
   - 类固醇激素和甲状腺激素是小分子 → 3。
4. **基因 vs 细胞。**交付物是核酸（DNA/RNA、编辑工具）→ 5；交付物是活细胞或组织 → 6。体外基因修饰后回输的细胞（如 CAR-T）主归 6，标签链接 5。
5. **检测归被检测的层。**基因检测 → 5，菌群检测 → 7，脑电 → 8。通用生理指标和数据方法（心率、HRV、血糖、睡眠、血检、n=1 实验）→ 1。

### 3.2 十个领域详表

> 身体锚点按首页“人在中间、左右各 5 张卡片”从头到脚排布，方便连线不交叉。左栏：8、5、4、7、10；右栏：2、6、3、1、9。设计时可以微调。

#### ① Quantified Self · 量化自我（slug 保留 `quantified-self`）
- **Banner：** Measure · Data ／ 测量 · 数据
- **一句话：**用传感器和检测把身体状态变成可追踪的数据，只读，不改变身体。
- **包含：**智能戒指、手表、CGM、HRV、睡眠监测、家用血检和常规生物标志物、体成分、n=1 自我实验方法、数据整合与隐私。
- **不包含：**
  - 脑电和神经记录 → ⑧；
  - 基因检测、表观遗传时钟 → ⑤；
  - 菌群测序 → ⑦；
  - 根据数据采取的行动归各自领域。
- **示例主题：**CGM 准确度、HRV 的意义与局限、“传感器数据不等于诊断”、可穿戴的 FDA General Wellness 边界。
- **身体锚点：**手腕（右栏第 4 位）。
- **旧页面：**`quantified-self/*`（cgm、hrv）。

#### ② Lifestyle & Environment · 生活方式与环境（slug 保留 `lifestyle`）
- **Banner：** Rhythm · Habits ／ 节律 · 习惯
- **一句话：**只用行为和环境输入（光、温度、运动、进食时间、呼吸）来调节身体，不引入任何外来物质或设备。
- **包含：**昼夜节律与光照、睡眠行为、运动与训练、冷热暴露（冷水、桑拿）、断食与进食窗口、呼吸法、冥想。
- **不包含：**
  - 补剂和药物 → ③④；
  - 以改变菌群为目的的饮食 → ⑦；
  - 用设备直接刺激神经 → ⑧；
  - 只是测量睡眠 → ①。
- **示例主题：**晨光与生物钟、冷暴露证据、间歇性断食证据等级、运动与认知。
- **身体锚点：**眼睛（光照经视网膜进入生物钟，右栏第 1 位）。
- **旧页面：**`lifestyle/*`。

#### ③ Biochemical · 生化小分子（slug 保留 `biochemical`，中文名改为“生化小分子”）
- **Banner：** Molecules · Metabolism ／ 分子 · 代谢
- **一句话：**把非氨基酸链的化学分子（营养素、补剂、小分子药物、类固醇激素）送进身体。效果随剂量变化，停用后通常会消退。
- **包含：**维生素和矿物质、肌酸、NAD+ 前体、二甲双胍、雷帕霉素、nootropics（化学类）、类固醇和甲状腺激素、senolytics（小分子）、酮体补充。
- **不包含：**
  - 任何氨基酸链（肽和蛋白类激素）→ ④；
  - 活菌 → ⑦；
  - 核酸药物 → ⑤。
- **示例主题：**NIA ITP 中被测试过的化合物、nootropics 证据（ADDF Cognitive Vitality）、补剂监管与掺假。
- **身体锚点：**肝脏，代谢中心（右栏第 3 位）。
- **旧页面：**`biochemical/index`、`biochemical/metabolic`、`biochemical/nootropics`、`biochemical/hormones`（类固醇部分；肽类激素段落交叉链接到 ④）。

#### ④ Peptides · 肽（slug `peptides`，未来对应 `peptides.` 子域名）
- **Banner：** Signal · Purity ／ 信号 · 纯度
- **一句话：**由氨基酸短链构成的信号分子，与受体结合来传递指令。难点在合成、纯度、检测和供应链。
- **包含：**
  - GLP-1 类（semaglutide、tirzepatide 等）；
  - GH 轴（CJC-1295、ipamorelin、tesamorelin）；
  - 修复类研究肽（BPC-157、TB-500）、GHK-Cu、MOTS-c、Semax/Selank；
  - 蛋白类激素（胰岛素、hGH，标“protein”）；
  - 合成工艺（SPPS/LPPS）、API/CDMO、冻干与储存、COA 解读、第三方检测（VeriSeas、Finnrick 数据入口）。
- **不包含：**
  - 非氨基酸链分子 → ③，例如 NAD+、二甲双胍，沿用 ChatGPT 原文的提醒；
  - 编码肽的基因疗法 → ⑤。
- **示例主题：**每个肽的证据等级和监管状态、FDA 503A Category 2、Import Alert 66-80、如何读 COA。
- **身体锚点：**心脏与血流，信号经血液送到受体（左栏第 3 位）。
- **旧页面：**`peptides/*` 全部；`regulation/fda-503a-category-2`、`import-alert-66-80`、`research-use-peptides-us`、`pcac-2026-07-23` 主归监管，并交叉链接到 ④。

#### ⑤ Genetic · 基因（slug 保留 `genetic`，中文名改为“基因”）
- **Banner：** Code · Editing ／ 基因密码 · 编辑
- **一句话：**读或改写身体的“说明书”，即 DNA/RNA。改写往往是一次性的，而且可能不可逆。
- **包含：**基因检测与营养基因组学、表观遗传时钟、基因治疗（获批 vs 实验）、CRISPR、mRNA 和反义核酸、合成生物学、DIYbio 社区与生物安全。
- **不包含：**
  - 活细胞产品（干细胞、CAR-T 主归）→ ⑥；
  - 肽和蛋白 → ④。
- **示例主题：**FDA 已批准的基因治疗清单、DIY 基因编辑的风险与法规、“直接面向消费者的基因检测能告诉你什么”。
- **身体锚点：**口腔（唾液 DNA 采样），或用放大镜插图展示细胞核里的双螺旋（左栏第 2 位）。
- **旧页面：**`genetic/index`（细胞相关段落拆到 ⑥）。

#### ⑥ Cellular & Regenerative · 细胞与再生（新 slug `cellular`）
- **Banner：** Cells · Regeneration ／ 细胞 · 再生
- **一句话：**把活细胞或组织作为“零件”来修复、替换或重编程衰老和受损的组织。
- **包含：**干细胞疗法（获批 vs 未获批诊所）、PRP、组织工程、部分重编程（Yamanaka 因子，属研究阶段）、血浆置换研究、CAR-T 等细胞产品。
- **不包含：**
  - 小分子 senolytics → ③，以“靶点：衰老细胞”标签交叉显示；
  - 核酸编辑 → ⑤；
  - 肽类修复剂（BPC-157）→ ④。
- **示例主题：**FDA 对未获批干细胞诊所的警示、再生医学 101、重编程研究进展。
- **身体锚点：**肩或膝关节（组织修复，右栏第 2 位）。
- **旧页面：**原 `genetic` 的细胞部分、原 `longevity` 中“再生医学”段落。

#### ⑦ Microbiome · 微生物组（slug 保留 `microbiome`）
- **Banner：** Gut · Microbes ／ 肠道 · 菌群
- **一句话：**通过改变身体里共生的活微生物（主要在肠道）来影响代谢、免疫和情绪。
- **包含：**益生菌、益生元、合生元、以菌群为目标的饮食、菌群测序、FMT 及其监管。
- **不包含：**一般营养补剂 → ③；单纯的饮食作息 → ②。
- **示例主题：**FMT 的 FDA 监管、菌群检测的可信度、“菌群失调”这一衰老标志。
- **身体锚点：**肠道，下腹（左栏第 4 位）。
- **旧页面：**`microbiome/*`。

#### ⑧ Neurotech · 神经科技（slug 保留 `neurohacking`，显示名改为 “Neurotech · 神经科技”）
- **Banner：** Brain · Interface ／ 脑 · 接口
- **一句话：**用电、磁、光或电极直接读写神经信号，从脑电监测、神经刺激一直到脑机接口。
- **包含：**消费级 EEG、fNIRS、神经反馈、TMS、tDCS、VNS、DBS、侵入式、血管内和非侵入式 BCI，以及语音解码。
- **不包含：**
  - nootropics → ③；
  - 冥想 → ②；
  - 不接神经的皮下芯片 → ⑨；
  - 机械手本身 → ⑩（脑控机械臂这类组合主归 ⑧，交叉链接 ⑩）。
- **示例主题：**Neuralink N1、Synchron Stentrode、21 CFR 882 神经器械分类、健康人使用 tDCS 的证据。
- **身体锚点：**大脑（左栏第 1 位）。
- **旧页面：**`neurohacking/*` 全部；`companies/neuralink`、`blackrock-neurotech`、`precision-neuroscience` 交叉链接。

#### ⑨ Cyborg Implants · 植入与赛博格（slug 保留 `cyborg`）
- **Banner：** Implant · Chip ／ 植入 · 芯片
- **一句话：**把不连接大脑的硬件放进皮下，比如芯片、磁体和传感器，给身体增加新的接口或感觉。
- **包含：**RFID/NFC 芯片、磁感应植入、皮下 LED 或传感器、Grinder 文化与风险伦理。
- **不包含：**
  - 读写神经的植入物 → ⑧；
  - 医疗级心脏起搏器等，只作背景链接；
  - 体外佩戴的设备 → ① 或 ⑩。
- **示例主题：**植入芯片的感染与 MRI 风险、Grinder 社区史（BMJ Medical Humanities 的 DIYbio 分支）。
- **身体锚点：**手（虎口芯片，右栏第 5 位）。
- **旧页面：**`cyborg/*`（grinder-implants）。

#### ⑩ Bionics · 仿生（slug 保留 `bionic`）
- **Banner：** Prosthesis · Exoskeleton ／ 义肢 · 外骨骼
- **一句话：**用机械和电子装置替代或外挂肢体与感官，恢复或扩展运动和感觉能力。
- **包含：**肌电义肢、TMR 与骨整合、外骨骼、触觉反馈、电子皮肤、感官替代、WHO 辅助器具。
- **不包含：**
  - 解码神经的部分 → ⑧；
  - 皮下芯片 → ⑨。
- **示例主题：**EMG 模式识别、外骨骼康复证据、WHO Priority Assistive Products List。
- **身体锚点：**腿（外骨骼或下肢义肢，左栏第 5 位）。
- **旧页面：**`bionic/*`；`regulation/who-assistive-technology` 交叉链接。

### 3.3 为什么这 10 个可以“互相比较”
- 每个领域都能用同一句话填空：“我用 ___ 来 hack 人体”，答案分别是数据、习惯、小分子、肽、基因、细胞、微生物、神经接口、植入硬件、外挂硬件。
- 任何一项具体技术都只有一个主领域，冲突由 §3.1 的五条规则裁决。
- 同一维度上还能比较可逆性、风险和成熟度：
  - ①② 几乎完全可逆、风险最低；
  - ③④ 剂量依赖、可逆；
  - ⑤⑥ 可能不可逆；
  - ⑧⑨⑩ 涉及手术时风险上升。
  
  这正好可以作为首页“从外到内、从轻到重”的叙事线。

---

## 4. 长寿放在哪里：从“领域”改为“目标”

### 4.1 三个目标（Goal）
| 目标 | EN | 定义 | 依据 |
|---|---|---|---|
| 修复 | Restore | 让失去或受损的功能恢复到正常水平（治疗、康复） | SEP：therapy 是 restore or sustain normal health；ChatGPT 原文的 Restoration |
| 增强 | Enhance | 让正常功能超过一般水平，或获得新能力 | SEP：enhancement 是 beyond what is necessary to restore or sustain health；ChatGPT 原文的 Enhancement |
| 延寿 | Extend | 推迟衰老相关的功能下降，延长健康寿命（healthspan），而不只是延长寿命 | ChatGPT 原文“延长健康寿命（Healthspan），而不是单纯增加寿命”；Geroscience |

- **为什么是三个，而不是两个：**
  - 只用 Restore / Enhance，“预防衰老”无处可放：健康人吃二甲双胍算不上治疗，也算不上增强。
  - 文献中已有“restorative or preventive”的提法（Coenen 等，转引自 PMC5635529），因此单列 Extend。
- **SEP 的提醒：**“there are no enhancement technologies per se”，同一技术用途不同就属于不同目标。这正好证明**目标必须是标签，不能是领域**。同一个外骨骼，给截瘫患者用是 Restore，给仓储工人用是 Enhance。

### 4.2 怎么展示
- **Frontmatter：**把现有字段 `purpose: restoration | enhancement | both` 扩展为多选 `goals: [restore, enhance, extend]`。旧值映射：
  - restoration → restore；
  - enhancement → enhance；
  - both → [restore, enhance]。
- **首页：**
  - 人体中心外圈画三道细环或三色光晕（修复、增强、延寿），作为“目标筛选器”；
  - 点击“延寿”时，10 张领域卡片里与延寿相关的条目会高亮；
  - 文案可以写成“中心是人；十种手段，三个目标”。
- **页面：**每张卡片和每个条目右上角显示目标徽章；保留 Observe / Intervene / Augment 作为“层次”徽章。
- **专题页：**新建 `/goals/longevity/`（同理有 `/goals/restore/`、`/goals/enhance/`）。原 longevity 的内容迁到这里，由它来讲衰老生物学，并以“衰老标志 × 领域”矩阵作为导航枢纽。

### 4.3 衰老标志 × 领域：证明长寿横跨所有领域
López-Otín 等 2023 年列出的 12 个标志，对应到本方案的领域（对应关系是我的编辑判断，用于导航，不是论文原文的分类）：

| 衰老标志 | 主要相关领域 |
|---|---|
| 基因组不稳定、端粒损耗 | ⑤ 基因、⑥ 细胞 |
| 表观遗传改变 | ⑤ 基因（表观时钟）、⑥（重编程） |
| 蛋白稳态丧失、自噬受损 | ③ 生化（雷帕霉素等）、② 生活方式（断食） |
| 营养感知失调 | ③ 生化、④ 肽（GLP-1）、② 生活方式 |
| 线粒体功能障碍 | ③ 生化（NAD+ 前体）、④ 肽（MOTS-c） |
| 细胞衰老 | ⑥ 细胞、③（senolytics） |
| 干细胞耗竭 | ⑥ 细胞 |
| 细胞间通讯改变 | ④ 肽（信号分子） |
| 慢性炎症 | ③、⑦ |
| 菌群失调 | ⑦ 微生物组 |
| （监测生物年龄） | ① 量化自我、⑤ 表观时钟 |

---

## 5. 明确回答：生化 vs 肽 vs 基因有什么区别（白话）
- **一句话：**生化和肽都是“往身体里加信使”，区别在信使是不是氨基酸链；基因不加信使，而是改写制造信使的“说明书”。
- **③ 生化小分子：**往身体里加各种小化学分子，比如维生素、肌酸、二甲双胍、睾酮。它们靠剂量起作用，吃了有效，停了效果会慢慢消退。
- **④ 肽：**也是加分子，但分子是由氨基酸连成的短链。它们就是人体自己用来“发消息”的信号，比如 GLP-1 告诉大脑“吃饱了”。
  - 从化学上看，肽属于生化的一个分支，ChatGPT 原文也这么说。
  - 但它在三方面自成一类：
    - **监管：**FDA 把 ≤ 40 个氨基酸定义为 peptide，> 40 是 protein，按生物制品管理；
    - **质量：**合成、纯度、冻干和 COA 检测是肽特有的难题；
    - **市场：**研究用肽灰色市场。
  - 这正是 VeriSeas 要解决的问题，所以单列为同级领域，判定规则也简单：是不是氨基酸链。
- **⑤ 基因：**不往身体里加信使，而是改写身体的说明书，也就是 DNA/RNA，比如基因检测和基因治疗。改动往往一次到位，可能终身有效，也可能不可逆。
- **顺带说明 ⑥ 细胞：**既不加分子，也不改说明书，而是直接加入或替换“活的零件”，即细胞和组织。

---

## 6. 备选方案及不采用的原因

| 方案 | 内容 | 优点 | 不采用的原因 |
|---|---|---|---|
| A. 按身体系统或功能（WHO intrinsic capacity：locomotor、sensory、vitality、cognition、psychological；或按器官：脑、代谢、肌骨、皮肤……） | 以人为中心，天然适合人体图 | 一种技术会落在多个系统里（GLP-1 同时涉及代谢、心血管、脑），条目会重复；肽、基因无法成为领域，VeriSeas 的入口会消失；只有 5 类，凑不满 10 个 | **作为辅助标签“作用部位”保留**，首页连线就是用它 |
| B. 按动机或文化（BMJ Medical Humanities 2025：DIYbio、spiritual augmentation、health and wellness optimisation、technological futurism） | 学术上讲清了“谁在 hack、为什么 hack” | 只有 4 类，按动机划分，与“目标”同维；同一产品会因使用者不同而换类 | 放进 About 和“什么是 biohacking”页作为背景 |
| C. 以三层为一级（Observe / Intervene / Augment） | 简洁 | 只有 3 类，太粗；肽不能成为同级领域 | 保留为“层次”徽章 |
| D. 按监管产品类别（supplement、drug、biologic、gene/cell、device、behavior） | 与合规直接对齐 | 不好记，对普通读者是行话；切法与本方案大体一致 | 本方案已吸收它的边界（40 aa、gene vs cell 分开）作为裁决规则 |

---

## 7. 迁移表（旧 → 新，不删除任何内容）

原则：
- **URL 尽量不变。**只改显示名、`domain` 字段和导航。
- 新增 `/cellular/` 和 `/goals/*`。
- `/longevity/*` 搬走后，在 `src/data/legacy-redirects.json` 里加 301。
- zh-cn、th 镜像目录同步。

| 旧路径 | 新主领域 / 位置 | 说明 |
|---|---|---|
| `biochemical/index.mdx` | ③ 生化小分子 | 改名“生化小分子”，去掉“肽是其子领域”的表述 |
| `biochemical/metabolic/` | ③ | — |
| `biochemical/nootropics/` | ③ | 标签“作用部位：脑”，交叉链接 ⑧ |
| `biochemical/hormones/` | ③（类固醇、甲状腺） | 肽类和蛋白类激素段落交叉链接 ④ |
| `peptides/index.mdx` 及全部 `peptides/*.md`（21 页） | ④ 肽 | `domain: biochemical` → `peptides` |
| `genetic/index.mdx` | ⑤ 基因 | 细胞工程段落移到 ⑥ |
| （新）`cellular/index.mdx` | ⑥ 细胞与再生 | 由 genetic 的细胞部分和 longevity 的再生医学段落组成，初始为 stub |
| `longevity/index.mdx` | `/goals/longevity/` 目标专题 | 301 重定向 |
| `longevity/hallmarks-of-aging.md` | `/goals/longevity/hallmarks-of-aging/` | 增加 §4.3 的“标志 × 领域”矩阵 |
| `longevity/nia-itp.md` | `/goals/longevity/nia-itp/` | 被测化合物标 ③ |
| `quantified-self/*`（cgm、hrv） | ① 量化自我 | — |
| `lifestyle/index.mdx` | ② 生活方式与环境 | — |
| `microbiome/index.mdx` | ⑦ 微生物组 | — |
| `neurohacking/*`（bci、neuromodulation、noninvasive 共 12 页） | ⑧ 神经科技 | 显示名改为 Neurotech；slug 不变 |
| `cyborg/grinder-implants.md` | ⑨ 植入与赛博格 | — |
| `bionic/*`（4 页） | ⑩ 仿生 | — |
| `overview/eeg-ai-robotic-arm.md` | 交叉案例（⑧ + ⑩） | 不变 |
| `overview/three-layers.md` | 不变，补充“领域 × 目标 × 层次”三轴说明 | — |
| `overview/*`（其余）、`regulation/*`、`companies/*`、`studies`、`trials`、`vendors`、`news`、`glossary`、`policies/*` | 横切栏目，不变 | 加领域标签 |

代码层面要改的文件（供后续执行参考，本次未改）：
- `src/content.config.ts`：domains 枚举加 `peptides`、`cellular`，移除 `longevity`；`purposes` 改为 `goals`；
- `src/data/domains.ts`；
- `src/data/illustrations.ts`：新增 cellular 插图，domain-longevity 插图改作目标页头图；
- `src/data/th-ui.ts`；
- `src/data/legacy-redirects.json`；
- `src/components/landing/HomeLanding.astro`；
- `overview/learning-paths.md`、`overview/maturity.md`、`studies/index.md`、`contributing.md`、`policies/attribution.md` 中对 longevity 的引用。

---

## 8. 本次打开过的来源
- ChatGPT 分享原链接（只能拿到空壳页）：https://chatgpt.com/share/6b000266-c304-83ec-9f86-508af82aa89c ；正文见 raw #009。
- BMJ Medical Humanities（2025/2026），“What are ‘biohackers’ hacking? Identifying motivations and meaning-making frameworks”，提出四分法：DIYbio、spiritual augmentation、health and wellness optimisation、technological futurism。https://mh.bmj.com/content/52/1/105
- “Hacking age”，Sociology Compass，介绍 grinders、quantified selfers、body hackers 等亚群。https://compass.onlinelibrary.wiley.com/doi/full/10.1111/soc4.13034
- Yetisen AK.，“Biohacking”，Trends in Biotechnology 2018。https://pubmed.ncbi.nlm.nih.gov/29550160/
- Stanford Encyclopedia of Philosophy，“Human Enhancement”，讨论 therapy 与 enhancement 的区分，以及 “no enhancement technologies per se”。https://plato.stanford.edu/entries/enhancement/
- “Limits to human enhancement: nature, disease, therapy or betterment?”，含 Coenen 等对 restorative/preventive 与 enhancement 的区分。https://pmc.ncbi.nlm.nih.gov/articles/PMC5635529/
- López-Otín C. 等，“Hallmarks of aging: An expanding universe”，Cell 2023。https://pubmed.ncbi.nlm.nih.gov/36599349/
- Kennedy BK. 等，“Geroscience: linking aging to chronic disease”，Cell 2014。https://pubmed.ncbi.nlm.nih.gov/25417146/
- NIH NCCIH，按 primary therapeutic input 分类。https://www.nccih.nih.gov/health/complementary-alternative-or-integrative-health-whats-in-a-name
- 21 CFR 600.3(h)(6)，protein 定义为 > 40 个氨基酸。https://www.ecfr.gov/current/title-21/chapter-I/subchapter-F/part-600/subpart-A/section-600.3
- FDA Federal Register 2020，“Definition of the Term ‘Biological Product’”。https://www.federalregister.gov/documents/2020/02/21/2020-03505/definition-of-the-term-biological-product
- FDA，“What is Gene Therapy?”。https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/what-gene-therapy
- WHO intrinsic capacity 指标（locomotor、sensory、vitality、cognitive、psychological）。https://www.who.int/data/gho/indicator-metadata-registry/imr-details/percentage-of-older-people-with-high-intrinsic-capacity--over-the-past-year
- 既有文档：`04-biohack-wiki-taxonomy.md` 中的 21 CFR 882、ADDF Cognitive Vitality、WHO 辅助器具等来源沿用，未重复打开。
