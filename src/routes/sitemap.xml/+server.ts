import type { RequestHandler } from '@sveltejs/kit';

const pages = ['/', '/resume', '/contact'];
export const GET: RequestHandler = async () => {
  const links = pages
    .map((p) => `<url><loc>${'https://example.com'}${p}</loc><changefreq>weekly</changefreq></url>`)
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${links}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
