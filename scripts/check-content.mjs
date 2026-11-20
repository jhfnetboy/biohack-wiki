import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../src/content/docs');
const errors = [];

function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full);
		else if (/\.mdx?$/.test(entry.name)) check(full);
	}
}

function field(frontmatter, name) {
	const match = frontmatter.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'));
	return match ? match[1].trim().replace(/^['"]|['"]$/g, '') : undefined;
}

function check(file) {
	const raw = fs.readFileSync(file, 'utf8');
	const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
	const rel = path.relative(root, file);
	if (!frontmatter) {
		errors.push(`${rel}: missing frontmatter`);
		return;
	}
	const status = field(frontmatter, 'status');
	const entityType = field(frontmatter, 'entityType');
	const noindex = field(frontmatter, 'noindex');
	const description = field(frontmatter, 'description');
	const title = field(frontmatter, 'title');
	if (!title) errors.push(`${rel}: title is required`);
	if (!entityType) errors.push(`${rel}: entityType is required`);
	if (!description || description.length < 40 || description.length > 200) {
		errors.push(`${rel}: description must be 40–200 characters (got ${description?.length ?? 0})`);
	}
	if (!/^\d{4}-\d{2}-\d{2}$/.test(field(frontmatter, 'lastReviewed') ?? '')) {
		errors.push(`${rel}: lastReviewed must be YYYY-MM-DD`);
	}
	if (status === 'stub' && noindex !== 'true') {
		errors.push(`${rel}: stub pages must set noindex: true`);
	}
	const needsSources = status === 'reviewed' && entityType !== 'navigation' && entityType !== 'policy';
	const hasSource = /^\s*-\s+url:/m.test(frontmatter);
	if (needsSources && !hasSource) {
		errors.push(`${rel}: reviewed ${entityType} pages need at least one source`);
	}
	if (/typical_vial_mg|where to buy|how to inject|reconstitution volume/i.test(raw)) {
		errors.push(`${rel}: prohibited dosing, injection, or purchasing guidance`);
	}
}

walk(root);
if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`Checked content files under ${root}`);
