import type { APIRoute } from 'astro';
import { google } from 'googleapis';

export const runtime = 'node';
export const prerender = false;

function getSheets() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_EMAIL,
    undefined,
    (process.env.GOOGLE_SERVICE_KEY || '').replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );
  return google.sheets({ version: 'v4', auth });
}

const APPROVED = new Set(['authorized','active','approved','paid']);

export const GET: APIRoute = async () => {
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  try {
    const sheets = getSheets();
    const r = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
      range: 'Arrecadacao!A:H'
    });
    const rows = r.data.values || [];
    // pula header
    const data = rows.slice(1);
    // soma apenas status aprovados
    let total = 0;
    const supportersSet = new Set<string>();
    for (const row of data) {
      const amount = Number((row[2] || '0').toString().replace(',','.'));
      const status = (row[3] || '').toString().toLowerCase();
      const preId  = (row[6] || '').toString();
      if (APPROVED.has(status)) {
        total += isFinite(amount) ? amount : 0;
        if (preId) supportersSet.add(preId);
      }
    }
    const payload = {
      totalMonthly: Math.max(0, Math.round(total*100)/100),
      goal,
      supporters: supportersSet.size,
      updatedAt: new Date().toISOString()
    };
    return new Response(JSON.stringify(payload), {
      headers: { 'content-type': 'application/json', 'cache-control': 's-maxage=60, stale-while-revalidate=300' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ totalMonthly: 0, goal, supporters: 0, stale: true }), {
      headers: { 'content-type': 'application/json' }, status: 200
    });
  }
};
