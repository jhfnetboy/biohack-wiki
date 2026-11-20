const zhTones: Record<string, string> = {
	sourced: '有来源',
	stub: '存根',
	mixed: '混合',
};

/** Maturity-row badge text. English keeps the filing word; Chinese uses a short label. */
export function toneLabel(tone: string, isZh: boolean): string {
	if (!isZh) return tone;
	return zhTones[tone] ?? tone;
}
