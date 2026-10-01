import { SITE } from '../data/site';
// En préproduction, tout le site est bloqué pour les moteurs de recherche.
export function GET() {
  const body = SITE.preprod
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
