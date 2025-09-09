import type { APIRoute } from 'astro';
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\nSitemap: ${(import.meta.env.PUBLIC_SITE_URL || '').replace(/\/$/,'')}/sitemap-index.xml\n`, {
    headers: { 'content-type': 'text/plain' }
  });
