export const prerender = false;

export async function GET() {
  return Response.json({
    status: 'ok',
    message: 'API funcionando!',
    timestamp: new Date().toISOString(),
    data: {
      hasGoogleSheets: !!process.env.GOOGLE_SHEETS_ID,
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_EMAIL,
      hasServiceKey: !!process.env.GOOGLE_SERVICE_KEY
    }
  });
}
