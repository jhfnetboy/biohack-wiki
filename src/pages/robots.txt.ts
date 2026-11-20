import type { APIRoute } from 'astro';
import { allowIndexing } from '../lib/indexing';

export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site);
	const body = allowIndexing()
		? `User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`
		: `User-agent: *\nDisallow: /\n\nSitemap: ${sitemap.href}\n`;
	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
