export { renderers } from '../renderers.mjs';

const runtime = "node";
const GET = ({ redirect }) => redirect("/", 302);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  runtime
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
