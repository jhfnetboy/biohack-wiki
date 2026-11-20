import type { ImageMetadata } from 'astro';
import hero from '../assets/illustrations/hero.webp';
import domainBiochemical from '../assets/illustrations/domain-biochemical.webp';
import domainNeurohacking from '../assets/illustrations/domain-neurohacking.webp';
import domainBionic from '../assets/illustrations/domain-bionic.webp';
import domainCyborg from '../assets/illustrations/domain-cyborg.webp';
import domainGenetic from '../assets/illustrations/domain-genetic.webp';
import domainLongevity from '../assets/illustrations/domain-longevity.webp';
import domainQuantified from '../assets/illustrations/domain-quantified-self.webp';
import domainMicrobiome from '../assets/illustrations/domain-microbiome.webp';
import domainLifestyle from '../assets/illustrations/domain-lifestyle.webp';
import domainPeptides from '../assets/illustrations/domain-peptides.webp';
import bodyCenter from '../assets/illustrations/body-center.webp';
import bodyCenterCutout from '../assets/illustrations/body-center-cutout.webp';
import sceneBci from '../assets/illustrations/scene-bci.webp';
import sceneHand from '../assets/illustrations/scene-prosthetic-hand.webp';
import sceneExo from '../assets/illustrations/scene-exoskeleton.webp';
import sceneEskin from '../assets/illustrations/scene-eskin.webp';
import sceneLoop from '../assets/illustrations/scene-closed-loop.webp';
import scenePrinciples from '../assets/illustrations/scene-principles.webp';

export type Illustration = {
	src: ImageMetadata;
	alt: string;
	altZh: string;
};

/** Alt text always states that the picture is an AI-generated illustration. */
export const illustrations: Record<string, Illustration> = {
	hero: {
		src: hero,
		alt: 'AI-generated illustration. Luminous human silhouette showing layers of measurement, biochemical intervention, and neural augmentation.',
		altZh: 'AI 生成插图。由柔光构成的人体轮廓，分层表现测量、生化干预与神经增强。',
	},
	'domain-biochemical': {
		src: domainBiochemical,
		alt: 'AI-generated illustration. Peptide-like molecular chains above laboratory glassware.',
		altZh: 'AI 生成插图。实验室器皿上方的多肽分子链。',
	},
	'domain-neurohacking': {
		src: domainNeurohacking,
		alt: 'AI-generated illustration. A brain, neural network, and a generic EEG headset.',
		altZh: 'AI 生成插图。大脑、神经网络与通用脑电头戴装置。',
	},
	'domain-bionic': {
		src: domainBionic,
		alt: 'AI-generated illustration. A myoelectric prosthetic hand.',
		altZh: 'AI 生成插图。肌电仿生假手。',
	},
	'domain-cyborg': {
		src: domainCyborg,
		alt: 'AI-generated illustration. A small implant chip under the skin of a hand.',
		altZh: 'AI 生成插图。手部皮下的小型植入芯片。',
	},
	'domain-genetic': {
		src: domainGenetic,
		alt: 'AI-generated illustration. A DNA helix with an abstract gene-editing scissors motif.',
		altZh: 'AI 生成插图。DNA 双螺旋与抽象的基因编辑剪刀意象。',
	},
	'domain-cellular': {
		src: domainLongevity,
		alt: 'AI-generated illustration. Healthy cells around a glass hourglass, used here for cellular renewal.',
		altZh: 'AI 生成插图。健康细胞环绕沙漏，这里用来表示细胞与组织再生。',
	},
	'domain-peptides': {
		src: domainPeptides,
		alt: 'AI-generated illustration. A peptide chain, a glass vial, and a certificate of analysis.',
		altZh: 'AI 生成插图。多肽链、玻璃瓶和检验报告。',
	},
	'body-center': {
		src: bodyCenter,
		alt: 'AI-generated illustration. A luminous translucent human figure standing centered on a dark field.',
		altZh: 'AI 生成插图。居中站立的半透明发光人体。',
	},
	'body-center-cutout': {
		src: bodyCenterCutout,
		alt: 'AI-generated illustration. A translucent teal human figure, cropped close, with no background.',
		altZh: 'AI 生成插图。裁切紧密的半透明青色人体，没有背景。',
	},
	'domain-quantified-self': {
		src: domainQuantified,
		alt: 'AI-generated illustration. A generic smart ring, watch, CGM-style sensor, and unlabeled data curves.',
		altZh: 'AI 生成插图。通用智能戒指、手表、持续血糖监测贴片与无标注数据曲线。',
	},
	'domain-microbiome': {
		src: domainMicrobiome,
		alt: 'AI-generated illustration. A stylized gut microbiome community.',
		altZh: 'AI 生成插图。风格化的肠道微生物群落。',
	},
	'domain-lifestyle': {
		src: domainLifestyle,
		alt: 'AI-generated illustration. A circadian arc with light, cold-water, and heat motifs, reused for environmental signals.',
		altZh: 'AI 生成插图。带光照、冷水和热暴露意象的昼夜弧线，这里用来表示环境信号。',
	},
	'scene-bci': {
		src: sceneBci,
		alt: 'AI-generated illustration. A person in a rehab clinic controlling a robotic arm with a brain-computer interface.',
		altZh: 'AI 生成插图。康复临床场景中，一人通过脑机接口控制机械臂。',
	},
	'scene-prosthetic-hand': {
		src: sceneHand,
		alt: 'AI-generated illustration. A myoelectric prosthetic hand gently holding a cup.',
		altZh: 'AI 生成插图。肌电假手轻握一只杯子。',
	},
	'scene-exoskeleton': {
		src: sceneExo,
		alt: 'AI-generated illustration. A powered exoskeleton assisting walking in a rehabilitation center.',
		altZh: 'AI 生成插图。动力外骨骼在康复中心辅助行走。',
	},
	'scene-eskin': {
		src: sceneEskin,
		alt: 'AI-generated illustration. Close-up of an electronic-skin tactile sensor on a robotic fingertip.',
		altZh: 'AI 生成插图。机械指尖上的电子皮肤触觉传感贴片特写。',
	},
	'scene-closed-loop': {
		src: sceneLoop,
		alt: 'AI-generated illustration. A closed loop of sensing, AI analysis, controlled intervention, and evaluation.',
		altZh: 'AI 生成插图。传感、智能分析、受控干预与效果评估组成的闭环。',
	},
	'scene-principles': {
		src: scenePrinciples,
		alt: 'AI-generated illustration. Balanced scales and a protective shield over human and technology motifs.',
		altZh: 'AI 生成插图。天平与护盾，表现拥抱科技并保护人的权益。',
	},
};

export const domainScenes: Record<string, string[]> = {
	neurohacking: ['scene-bci'],
	bionic: ['scene-prosthetic-hand', 'scene-exoskeleton', 'scene-eskin'],
};
