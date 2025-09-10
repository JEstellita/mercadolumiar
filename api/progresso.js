export default function handler(req, res) {
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  
  // Retorna dados zerados se Google Sheets não estiver configurado
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_EMAIL || !process.env.GOOGLE_SERVICE_KEY) {
    return res.status(200).json({ 
      totalMonthly: 0, 
      goal, 
      supporters: 0, 
      updatedAt: new Date().toISOString(),
      stale: true 
    });
  }

  // TODO: Implementar leitura real do Google Sheets quando as variáveis estiverem configuradas
  res.status(200).json({
    totalMonthly: 0,
    goal,
    supporters: 0,
    updatedAt: new Date().toISOString(),
    stale: false
  });
}
