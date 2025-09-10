import type { APIRoute } from 'astro';
import { getSheetsRW, SHEET_ID, TAB_ARRECAD } from '../../lib/google/sheets';

export const runtime = 'node';
export const prerender = false;

export const POST: APIRoute = async () => {
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_EMAIL || !process.env.GOOGLE_SERVICE_KEY) {
    return new Response(JSON.stringify({
      error: 'Variáveis de ambiente do Google Sheets não configuradas'
    }), {
      headers: { 'content-type': 'application/json' },
      status: 500
    });
  }

  try {
    const sheets = getSheetsRW();
    
    // Dados de teste para simular assinaturas
    const testData = [
      [
        '2025-09-10T10:00:00.000Z',
        'preapproval',
        '15.00',
        'active',
        'João Silva',
        'joao.silva@email.com',
        'TEST_PREAPPROVAL_001',
        'test_request_001'
      ],
      [
        '2025-09-10T11:00:00.000Z',
        'preapproval', 
        '15.00',
        'active',
        'Maria Santos',
        'maria.santos@email.com',
        'TEST_PREAPPROVAL_002',
        'test_request_002'
      ],
      [
        '2025-09-10T12:00:00.000Z',
        'preapproval',
        '15.00', 
        'active',
        'Pedro Oliveira',
        'pedro.oliveira@email.com',
        'TEST_PREAPPROVAL_003',
        'test_request_003'
      ]
    ];

    // Adicionar dados de teste
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: TAB_ARRECAD,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: testData
      }
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Dados de teste adicionados com sucesso',
      testData: {
        rowsAdded: testData.length,
        totalValue: 45.00,
        supporters: 3
      }
    }), {
      headers: { 'content-type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Erro ao adicionar dados de teste',
      message: error instanceof Error ? error.message : 'Erro desconhecido'
    }), {
      headers: { 'content-type': 'application/json' },
      status: 500
    });
  }
};
