import type { APIRoute } from 'astro';

export const prerender = false;

export function GET() {
  return new Response(JSON.stringify({
    status: 'ok',
    message: 'API funcionando!',
    timestamp: new Date().toISOString(),
    data: {
      hasGoogleSheets: !!process.env.GOOGLE_SHEETS_ID,
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_EMAIL,
      hasServiceKey: !!process.env.GOOGLE_SERVICE_KEY
    }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
