import type { APIRoute } from 'astro';
import { getSheetsReadonly, SHEET_ID, TAB_ARRECAD } from '../../lib/google/sheets';

export const prerender = false;

export const GET: APIRoute = async () => {
  // Debug das variáveis de ambiente
  const debug = {
    hasSheetId: !!process.env.GOOGLE_SHEETS_ID,
    hasServiceEmail: !!process.env.GOOGLE_SERVICE_EMAIL,
    hasServiceKey: !!process.env.GOOGLE_SERVICE_KEY,
    sheetId: process.env.GOOGLE_SHEETS_ID,
    serviceEmail: process.env.GOOGLE_SERVICE_EMAIL,
    keyLength: process.env.GOOGLE_SERVICE_KEY?.length || 0
  };

  // Se não tem as variáveis, retorna o debug
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_EMAIL || !process.env.GOOGLE_SERVICE_KEY) {
    return new Response(JSON.stringify({
      error: 'Variáveis de ambiente não configuradas',
      debug,
      required: ['GOOGLE_SHEETS_ID', 'GOOGLE_SERVICE_EMAIL', 'GOOGLE_SERVICE_KEY']
    }, null, 2), {
      headers: { 'content-type': 'application/json' }
    });
  }

  try {
    const sheets = getSheetsReadonly();
    
    // Tentar ler a planilha
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: TAB_ARRECAD
    });

    const rows = response.data.values || [];
    const headers = rows[0] || [];
    const dataRows = rows.slice(1);

    return new Response(JSON.stringify({
      success: true,
      debug,
      planilha: {
        totalRows: rows.length,
        headers,
        dataRows: dataRows.length,
        sampleData: dataRows.slice(0, 3), // Primeiras 3 linhas como exemplo
        range: TAB_ARRECAD
      }
    }, null, 2), {
      headers: { 'content-type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Erro ao acessar Google Sheets',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      debug
    }, null, 2), {
      headers: { 'content-type': 'application/json' },
      status: 500
    });
  }
};
