export const prerender = false;

export async function GET() {
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  
  // Retorna dados zerados se Google Sheets não estiver configurado
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_EMAIL || !process.env.GOOGLE_SERVICE_KEY) {
    return Response.json({ 
      totalMonthly: 0, 
      goal, 
      supporters: 0, 
      updatedAt: new Date().toISOString(),
      stale: true 
    });
  }

  // TODO: Implementar leitura real do Google Sheets quando as variáveis estiverem configuradas
  return Response.json({
    totalMonthly: 0,
    goal,
    supporters: 0,
    updatedAt: new Date().toISOString(),
    stale: false
  });
}