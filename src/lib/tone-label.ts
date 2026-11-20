import type { LocaleId } from './locale';

const labels: Record<Exclude<LocaleId, 'en'>, Record<string, string>> = {
	zh: { sourced: '有来源', stub: '存根', mixed: '混合' },
	th: { sourced: 'มีแหล่งอ้างอิง', stub: 'ฉบับร่าง', mixed: 'ผสม' },
};

/** Maturity-row badge. English keeps the filing word. */
export function toneLabel(tone: string, id: LocaleId): string {
	if (id === 'en') return tone;
	return labels[id][tone] ?? tone;
}
