export const prerender = false;

export function GET() {
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  
  // Retorna dados zerados se Google Sheets não estiver configurado
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_EMAIL || !process.env.GOOGLE_SERVICE_KEY) {
    return new Response(JSON.stringify({ 
      totalMonthly: 0, 
      goal, 
      supporters: 0, 
      updatedAt: new Date().toISOString(),
      stale: true 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60, stale-while-revalidate=300'
      }
    });
  }

  // TODO: Implementar leitura real do Google Sheets quando as variáveis estiverem configuradas
  return new Response(JSON.stringify({
    totalMonthly: 0,
    goal,
    supporters: 0,
    updatedAt: new Date().toISOString(),
    stale: false
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=60, stale-while-revalidate=300'
    }
  });
}