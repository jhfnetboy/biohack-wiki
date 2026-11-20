/** True only when the deploy explicitly opts in. Unset means the site stays out of indexes. */
export function allowIndexing(): boolean {
	const raw = (process.env.ALLOW_INDEXING ?? '').trim().toLowerCase();
	return raw === 'true' || raw === '1' || raw === 'yes';
}

export function robotsHeaderValue(): string {
	return 'noindex, nofollow';
}
