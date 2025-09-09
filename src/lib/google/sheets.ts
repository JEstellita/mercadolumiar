import { google } from 'googleapis';

export function getSheetsReadonly() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_EMAIL,
    undefined,
    (process.env.GOOGLE_SERVICE_KEY || '').replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );
  return google.sheets({ version: 'v4', auth });
}

export function getSheetsRW() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_EMAIL,
    undefined,
    (process.env.GOOGLE_SERVICE_KEY || '').replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );
  return google.sheets({ version: 'v4', auth });
}

export const SHEET_ID = process.env.GOOGLE_SHEETS_ID!;
export const TAB_ARRECAD = 'Arrecadacao!A:H';
export const TAB_PAYMENTS = 'Payments!A:H'; // opcional, para eventos de pagamento
