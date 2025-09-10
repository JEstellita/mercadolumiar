import type { APIRoute } from 'astro';

export const prerender = false; // Força server-side rendering para esta rota

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    message: 'API funcionando!',
    timestamp: new Date().toISOString(),
    environment: {
      hasGoogleSheetsId: !!process.env.GOOGLE_SHEETS_ID,
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_EMAIL, 
      hasServiceKey: !!process.env.GOOGLE_SERVICE_KEY,
      nodeVersion: process.version
    }
  }), {
    headers: {
      'content-type': 'application/json'
    }
  });
};
