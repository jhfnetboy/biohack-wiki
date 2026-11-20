import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

/**
 * Twelve subject domains from the wiki taxonomy, plus a bucket for pages that
 * cut across domains (policy, glossary index, news).
 */
export const domains = [
	'peptides',
	'bci',
	'assistive',
	'noninvasive-neurotech',
	'neuromodulation',
	'longevity',
	'hormones',
	'metabolic',
	'nootropics',
	'recovery',
	'quantified-self',
	'diybio',
	'cross-cutting',
] as const;

export const entityTypes = [
	'compound',
	'device',
	'company',
	'trial',
	'study',
	'vendor',
	'regulation',
	'glossary',
	'guide',
	'topic',
	'comparison',
	'navigation',
	'policy',
] as const;

/** A = human RCT, B = human observational, C = animal, D = in vitro, E = anecdote. */
export const evidenceLevels = ['A', 'B', 'C', 'D', 'E', 'unrated'] as const;

const sourceSchema = z.object({
	url: z.url(),
	title: z.string().min(1),
	/** ISO date (YYYY-MM-DD) when the source was opened for this page. */
	accessed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	type: z.enum(['primary', 'secondary']).optional(),
});

const wikiFields = z.object({
	description: z.string().min(40).max(200),
	/** Simplified Chinese title. The visible title follows the page locale. */
	titleZh: z.string().optional(),
	entityType: z.enum(entityTypes),
	/** Primary domain used for filtering and the metadata strip. */
	domain: z.enum(domains).optional(),
	domains: z.array(z.enum(domains)).default([]),
	aliases: z.array(z.string()).default([]),
	evidenceLevel: z.enum(evidenceLevels).default('unrated'),
	/** Short plain-language regulatory status. Do not put dosing here. */
	regulatoryStatus: z.string().optional(),
	regulatory: z
		.object({
			us: z.string().optional(),
			eu: z.string().optional(),
			cn: z.string().optional(),
			au: z.string().optional(),
		})
		.optional(),
	lastReviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	sources: z.array(sourceSchema).default([]),
	status: z.enum(['draft', 'reviewed', 'stub']).default('draft'),
	reviewedBy: z.string().optional(),
	/** Stub and other thin pages stay out of the sitemap. */
	noindex: z.boolean().default(false),
	compoundClass: z.array(z.string()).optional(),
	sequence: z.string().optional(),
	molecularFormula: z.string().optional(),
	cas: z.string().optional(),
	pubchemCid: z.string().optional(),
	mechanism: z.string().optional(),
	targets: z.array(z.string()).optional(),
	approvedProducts: z.array(z.string()).optional(),
	deviceClass: z.enum(['I', 'II', 'III', 'unclassified', 'unknown']).optional(),
	cfrSection: z.string().optional(),
	invasiveness: z.enum(['invasive', 'minimally', 'noninvasive', 'unknown']).optional(),
	modality: z.string().optional(),
	manufacturer: z.string().optional(),
	channels: z.string().optional(),
	wireless: z.boolean().optional(),
	hq: z.string().optional(),
	founded: z.string().optional(),
	ticker: z.string().optional(),
	products: z.array(z.string()).optional(),
	irUrl: z.url().optional(),
	nctId: z.string().optional(),
	phase: z.string().optional(),
	trialStatus: z.string().optional(),
	sponsor: z.string().optional(),
	interventions: z.array(z.string()).optional(),
	conditions: z.array(z.string()).optional(),
	enrollment: z.string().optional(),
	pmid: z.string().optional(),
	doi: z.string().optional(),
	design: z.string().optional(),
	species: z.string().optional(),
	sampleSize: z.string().optional(),
	vendorCountry: z.string().optional(),
	vendorStatus: z.enum(['trading', 'closed', 'rebranded', 'unknown']).optional(),
	jurisdiction: z.string().optional(),
	agency: z.string().optional(),
	instrument: z
		.enum(['law', 'rule', 'guidance', 'list', 'alert', 'warning-letter', 'other'])
		.optional(),
	effectiveDate: z.string().optional(),
	documentUrl: z.url().optional(),
	term: z.string().optional(),
	termZh: z.string().optional(),
	shortDef: z.string().optional(),
	seeAlso: z.array(z.string()).optional(),
});

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: wikiFields }),
	}),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			extend: z.object({
				'disclaimer.banner': z.string().optional(),
				'disclaimer.link': z.string().optional(),
				'page.evidence': z.string().optional(),
				'page.regulatoryStatus': z.string().optional(),
				'page.lastReviewed': z.string().optional(),
				'page.entityType': z.string().optional(),
				'page.sources': z.string().optional(),
				'page.noSources': z.string().optional(),
				'page.backlinks': z.string().optional(),
				'page.noBacklinks': z.string().optional(),
				'page.stub': z.string().optional(),
				'page.unrated': z.string().optional(),
			}),
		}),
	}),
};
