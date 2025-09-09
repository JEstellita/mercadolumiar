import type { APIRoute } from 'astro';

export const runtime = 'node';
export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: true, timestamp: new Date().toISOString() }), {
    headers: { 'content-type': 'application/json' }
  });
};
