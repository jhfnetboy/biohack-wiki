import fs from 'node:fs';

/**
 * First-occurrence glossary links.
 * Terms live in src/data/glossary-links.json so the glossary headings and the
 * linker cannot drift. Each phrase is linked at most once per page, and only
 * to an anchor on the glossary for the page's locale.
 */
const terms = JSON.parse(
	fs.readFileSync(new URL('../data/glossary-links.json', import.meta.url), 'utf8'),
);

function compileTerms() {
	return terms
		.map((term) => ({
			...term,
			re: new RegExp(boundary(term.phrase), term.caseSensitive ? 'g' : 'gi'),
		}))
		.sort((a, b) => b.phrase.length - a.phrase.length);
}

function boundary(phrase) {
	const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return `(?<![A-Za-z0-9])${escaped}(?![A-Za-z0-9])`;
}

function localePrefix(fileURL) {
	const path = fileURL?.pathname ?? '';
	if (path.includes('/zh-cn/')) return '/zh-cn';
	if (path.includes('/th/')) return '/th';
	return '';
}

function insideSkip(node, ctx) {
	let current = node;
	while (current) {
		const parent = ctx.parent(current);
		if (!parent) return false;
		if (parent.type === 'link' || parent.type === 'linkReference' || parent.type === 'heading') {
			return true;
		}
		current = parent;
	}
	return false;
}

export function glossaryAutolink(ctx) {
	const path = ctx.fileURL?.pathname ?? '';
	if (path.includes('/glossary/')) return false;
	const prepared = compileTerms();
	const prefix = localePrefix(ctx.fileURL);
	const used = new Set();

	return {
		name: 'biohack-glossary-autolink',
		text(node, visit) {
			if (!node.value || insideSkip(node, visit)) return;
			const matches = [];
			for (const term of prepared) {
				if (used.has(term.slug)) continue;
				term.re.lastIndex = 0;
				let found;
				while ((found = term.re.exec(node.value))) {
					matches.push({
						start: found.index,
						end: found.index + found[0].length,
						slug: term.slug,
						text: found[0],
					});
					if (found[0].length === 0) break;
				}
			}
			if (matches.length === 0) return;
			matches.sort((a, b) => a.start - b.start || b.end - a.end);
			const chosen = [];
			let cursor = 0;
			for (const match of matches) {
				if (match.start < cursor) continue;
				if (used.has(match.slug)) continue;
				chosen.push(match);
				used.add(match.slug);
				cursor = match.end;
			}
			if (chosen.length === 0) return;
			const pieces = [];
			let at = 0;
			for (const match of chosen) {
				if (match.start > at) pieces.push({ type: 'text', value: node.value.slice(at, match.start) });
				pieces.push({
					type: 'link',
					url: `${prefix}/glossary/#${match.slug}`,
					children: [{ type: 'text', value: match.text }],
				});
				at = match.end;
			}
			if (at < node.value.length) pieces.push({ type: 'text', value: node.value.slice(at) });
			visit.replaceNode(node, pieces);
		},
	};
}
