import type { APIRoute } from 'astro';

export const runtime = 'node';
export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify({ 
      ok: true, 
      timestamp: new Date().toISOString(),
      status: 'healthy' 
    }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      ok: false, 
      timestamp: new Date().toISOString(),
      error: 'Internal server error' 
    }), {
      headers: { 'content-type': 'application/json' },
      status: 500
    });
  }
};
