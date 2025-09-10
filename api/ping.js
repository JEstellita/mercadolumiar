export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'API funcionando!',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    data: {
      hasGoogleSheets: !!process.env.GOOGLE_SHEETS_ID,
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_EMAIL,
      hasServiceKey: !!process.env.GOOGLE_SERVICE_KEY
    }
  });
}
