import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site || 'https://mercadobiorregional.vercel.app';
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteUrl.toString().replace(/\/$/, '')}/sitemap-index.xml`;

  return new Response(robotsTxt, {
    headers: { 'content-type': 'text/plain' }
  });
};
