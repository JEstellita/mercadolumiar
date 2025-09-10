import type { APIRoute } from 'astro';
import { getSheetsReadonly, SHEET_ID, TAB_ARRECAD } from '../../lib/google/sheets';

export const prerender = false;

const APPROVED = new Set(['authorized','active','approved','paid']);

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
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  
  // Verificar se as variáveis necessárias estão configuradas
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_EMAIL || !process.env.GOOGLE_SERVICE_KEY) {
    console.log('[progresso] Google Sheets não configurado, retornando dados padrão');
    return new Response(JSON.stringify({ 
      totalMonthly: 0, 
      goal, 
      supporters: 0, 
      updatedAt: new Date().toISOString(),
      stale: true 
    }), {
      headers: { 
        'content-type': 'application/json',
        'cache-control': 's-maxage=60, stale-while-revalidate=300'
      }
    });
  }

  try {
    const sheets = getSheetsReadonly();
    const r = await sheets.spreadsheets.values.get({ 
      spreadsheetId: SHEET_ID, 
      range: TAB_ARRECAD 
    });
    const rows = r.data.values || [];
    const data = rows.slice(1); // pula cabeçalho

    let total = 0;
    const supporters = new Set<string>();
    for (const row of data) {
      const amount = Number((row[2] || '0').toString().replace(',','.'));
      const status = (row[3] || '').toString().toLowerCase();
      const preId  = (row[6] || '').toString();
      if (APPROVED.has(status)) {
        total += Number.isFinite(amount) ? amount : 0;
        if (preId) supporters.add(preId);
      }
    }

    const payload = {
      totalMonthly: Math.max(0, Math.round(total * 100) / 100),
      goal,
      supporters: supporters.size,
      updatedAt: new Date().toISOString(),
      stale: false
    };

    return new Response(JSON.stringify(payload), {
      headers: {
        'content-type': 'application/json',
        'cache-control': 's-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (e) {
    console.error('[progresso] Erro ao buscar dados:', e);
    return new Response(JSON.stringify({ 
      totalMonthly: 0, 
      goal, 
      supporters: 0, 
      updatedAt: new Date().toISOString(),
      stale: true 
    }), {
      headers: { 'content-type': 'application/json' }, 
      status: 200
    });
  }
};