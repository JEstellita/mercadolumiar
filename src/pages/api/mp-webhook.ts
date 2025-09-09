import type { APIRoute } from 'astro';
import crypto from 'node:crypto';
import { google } from 'googleapis';
import { fetch } from 'undici';

export const runtime = 'node';
export const prerender = false;

function getSheets() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_EMAIL,
    undefined,
    (process.env.GOOGLE_SERVICE_KEY || '').replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );
  return google.sheets({ version: 'v4', auth });
}

function verifySignature({ body, headers }: { body: any; headers: Headers }) {
  const sig = headers.get('x-signature') || '';             // "ts=...,v1=..."
  const reqId = headers.get('x-request-id') || '';
  const secret = process.env.MP_WEBHOOK_SECRET || '';
  const map = Object.fromEntries(sig.split(',').map(p => p.trim().split('=')));
  const ts = map.ts, v1 = map.v1;
  const id = body?.data?.id || body?.id || '';
  const manifest = `id:${id};request-id:${reqId};ts:${ts}`;
  const calc = crypto.createHmac('sha256', secret).update(manifest).digest('hex');
  return { ok: (calc === v1), reqId, dataId: id };
}

async function fetchPreapproval(preapprovalId: string) {
  const r = await fetch(`https://api.mercadopago.com/preapproval/${preapprovalId}`, {
    headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` }
  });
  if (!r.ok) throw new Error('mp preapproval fetch failed');
  return r.json() as any;
}

export const POST: APIRoute = async ({ request }) => {
  const raw = await request.text();
  let body: any;
  try { body = JSON.parse(raw); } catch { return new Response('bad json', { status: 400 }); }

  const { ok, reqId, dataId } = verifySignature({ body, headers: request.headers });
  if (!ok) return new Response('invalid signature', { status: 401 });

  // Tenta dados diretos; se faltar, busca preapproval
  let amount = body?.auto_recurring?.transaction_amount ?? body?.transaction_amount ?? null;
  let status = body?.status ?? body?.action ?? null;
  let payer_email = body?.payer?.email ?? body?.payer_email ?? null;
  let payer_name = body?.payer?.name ?? body?.payer_name ?? null;
  let preapproval_id = body?.preapproval_id ?? body?.data?.id ?? body?.id ?? null;

  if (!amount || !status) {
    if (!preapproval_id) preapproval_id = dataId;
    try {
      const pre = await fetchPreapproval(preapproval_id);
      amount = pre?.auto_recurring?.transaction_amount ?? amount ?? 0;
      status = pre?.status ?? status ?? 'unknown';
      payer_email = pre?.payer_email ?? payer_email ?? '';
      payer_name = payer_email ? payer_email.split('@')[0] : (payer_name ?? '');
    } catch { /* continua com o que tiver */ }
  }

  // Idempotência básica: não regravar mesmo request-id
  const sheets = getSheets();
  const sheetId = process.env.GOOGLE_SHEETS_ID!;
  const range = 'Arrecadacao!A:H';

  // (opcional) consultar últimos 50 para checar request_id
  try {
    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId, range
    });
    const rows = read.data.values || [];
    const seen = rows.slice(-50).some(r => (r[7] === reqId));
    if (seen) return new Response('ok-dup', { status: 200 });
  } catch { /* ignore */ }

  const now = new Date().toISOString();
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[ now, 'mercado_pago', amount || 0, status || 'unknown',
                 payer_name || '', payer_email || '', preapproval_id || '', reqId || '' ]]
    }
  });

  return new Response('ok', { status: 200 });
};
