import crypto from 'node:crypto';
import { fetch } from 'undici';
import { g as getSheetsRW, T as TAB_ARRECAD, S as SHEET_ID, a as TAB_PAYMENTS } from '../../chunks/sheets_BGpDKojz.mjs';
export { renderers } from '../../renderers.mjs';

const runtime = "node";
const prerender = false;
function parseSig(sig) {
  if (!sig) return null;
  const map = Object.fromEntries(sig.split(",").map((p) => p.trim().split("=")));
  return { ts: map.ts, v1: map.v1 };
}
function detectTopic(headers, body) {
  const h = (k) => headers.get(k) || "";
  const topic = (h("x-topic") || h("x-event-type") || h("x-type") || body?.type || body?.entity || "").toString().toLowerCase();
  const isPreapproval = topic.includes("preapproval") || topic.includes("subscription") || topic.includes("planos");
  const isPayment = topic.includes("payment") || topic.includes("pagamento");
  return { isPreapproval, isPayment, topic };
}
async function fetchPreapproval(preapprovalId) {
  const r = await fetch(`https://api.mercadopago.com/preapproval/${preapprovalId}`, {
    headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` }
  });
  if (!r.ok) throw new Error("preapproval fetch failed");
  return r.json();
}
const POST = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const len = Number(request.headers.get("content-length") || "0");
  if (len > 2e5) {
    return new Response("Payload Too Large", { status: 413 });
  }
  const raw = await request.text();
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response("bad json", { status: 400 });
  }
  const allowTest = process.env.MP_WEBHOOK_ALLOW_TEST === "true";
  const sigHeader = request.headers.get("x-signature");
  const reqId = request.headers.get("x-request-id") || "";
  const parsed = parseSig(sigHeader);
  if (!parsed && !allowTest) return new Response("missing signature", { status: 401 });
  if (parsed && process.env.MP_WEBHOOK_SECRET) {
    const id = body?.data?.id || body?.id || "";
    const manifest = `id:${id};request-id:${reqId};ts:${parsed.ts}`;
    const calc = crypto.createHmac("sha256", process.env.MP_WEBHOOK_SECRET).update(manifest).digest("hex");
    if (calc !== parsed.v1 && !allowTest) return new Response("invalid signature", { status: 401 });
  }
  const { isPreapproval, isPayment } = detectTopic(request.headers, body);
  console.log("[mp-webhook]", {
    topic: detectTopic(request.headers, body).topic,
    hasSig: !!sigHeader,
    isPreapproval,
    isPayment,
    reqId: reqId.substring(0, 8) + "...",
    payloadSize: len
  });
  let amount = body?.auto_recurring?.transaction_amount ?? body?.transaction_amount ?? null;
  let status = (body?.status ?? body?.action ?? "").toString().toLowerCase() || null;
  let payer_email = body?.payer?.email ?? body?.payer_email ?? "";
  let payer_name = body?.payer?.name ?? body?.payer_name ?? "";
  let preapproval_id = body?.preapproval_id ?? body?.data?.id ?? body?.id ?? "";
  if (isPreapproval && (!amount || !status)) {
    try {
      if (!preapproval_id) preapproval_id = body?.data?.id || "";
      const pre = await fetchPreapproval(preapproval_id);
      amount = pre?.auto_recurring?.transaction_amount ?? amount ?? 0;
      status = (pre?.status || status || "unknown").toString().toLowerCase();
      payer_email = pre?.payer_email ?? payer_email ?? "";
      payer_name = payer_email ? payer_email.split("@")[0] : payer_name || "";
    } catch {
    }
  }
  const sheets = getSheetsRW();
  try {
    const read = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: TAB_ARRECAD });
    const rows = read.data.values || [];
    const dup = rows.slice(-50).some((r) => r[7] === reqId);
    if (dup) return new Response("ok-dup", { status: 200 });
  } catch {
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const targetRange = isPreapproval ? TAB_ARRECAD : isPayment ? TAB_PAYMENTS : TAB_ARRECAD;
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: targetRange,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        now,
        // A timestamp
        isPreapproval ? "preapproval" : isPayment ? "payment" : "other",
        // B source
        amount || 0,
        // C amount
        status || "unknown",
        // D status
        payer_name || "",
        // E payer_name
        payer_email || "",
        // F payer_email
        preapproval_id || "",
        // G preapproval_id
        reqId || ""
        // H request_id
      ]]
    }
  });
  console.log("[mp-webhook] append ok", { targetRange, amount, status });
  return new Response("ok", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender,
  runtime
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
