import { b as getSheetsReadonly, T as TAB_ARRECAD, S as SHEET_ID } from '../../chunks/sheets_BGpDKojz.mjs';
export { renderers } from '../../renderers.mjs';

const runtime = "node";
const prerender = false;
const APPROVED = /* @__PURE__ */ new Set(["authorized", "active", "approved", "paid"]);
const GET = async () => {
  const goal = Number(process.env.PUBLIC_GOAL_MONTHLY || 150);
  try {
    const sheets = getSheetsReadonly();
    const r = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: TAB_ARRECAD });
    const rows = r.data.values || [];
    const data = rows.slice(1);
    let total = 0;
    const supporters = /* @__PURE__ */ new Set();
    for (const row of data) {
      const amount = Number((row[2] || "0").toString().replace(",", "."));
      const status = (row[3] || "").toString().toLowerCase();
      const preId = (row[6] || "").toString();
      if (APPROVED.has(status)) {
        total += Number.isFinite(amount) ? amount : 0;
        if (preId) supporters.add(preId);
      }
    }
    const payload = {
      totalMonthly: Math.max(0, Math.round(total * 100) / 100),
      goal,
      supporters: supporters.size,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return new Response(JSON.stringify(payload), {
      headers: {
        "content-type": "application/json",
        "cache-control": "s-maxage=60, stale-while-revalidate=300"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ totalMonthly: 0, goal, supporters: 0, stale: true }), {
      headers: { "content-type": "application/json" },
      status: 200
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender,
  runtime
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
