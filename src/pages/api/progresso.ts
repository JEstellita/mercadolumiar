import type { APIRoute } from 'astro';
import { getSheetsReadonly, SHEET_ID, TAB_ARRECAD } from '../../lib/google/sheets';

export const runtime = 'node';
export const prerender = false;

const APPROVED = new Set(['authorized','active','approved','paid']);

export const GET: APIRoute = async () => {
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  try {
    const sheets = getSheetsReadonly();
    const r = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: TAB_ARRECAD });
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
      updatedAt: new Date().toISOString()
    };

    return new Response(JSON.stringify(payload), {
      headers: {
        'content-type': 'application/json',
        'cache-control': 's-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ totalMonthly: 0, goal, supporters: 0, stale: true }), {
      headers: { 'content-type': 'application/json' }, status: 200
    });
  }
};