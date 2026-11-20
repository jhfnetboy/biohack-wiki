import { thUi } from '../data/th-ui';

export type LocaleId = 'en' | 'zh' | 'th';

/** English is the root locale. Chinese and Thai are prefixed. */
export function localeId(lang?: string): LocaleId {
	const value = (lang ?? 'en').toLowerCase();
	if (value.startsWith('zh')) return 'zh';
	if (value.startsWith('th')) return 'th';
	return 'en';
}

export function localePrefix(id: LocaleId): string {
	if (id === 'zh') return '/zh-cn';
	if (id === 'th') return '/th';
	return '';
}

/** Chinese uses the explicit string. Thai looks up the English source. */
export function pick(id: LocaleId, en: string, zh: string): string {
	if (id === 'zh') return zh;
	if (id === 'th') return thUi[en] ?? en;
	return en;
}
