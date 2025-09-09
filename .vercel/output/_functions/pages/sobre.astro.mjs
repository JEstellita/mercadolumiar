import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dDJr31h3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jA3CkfZ-.mjs';
export { renderers } from '../renderers.mjs';

const $$Sobre = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sobre" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sobre o projeto</h1> <p>O ${"Mercado Biorregional Lumiar"} conecta quem produz e quem compra na nossa biorregião, com simplicidade e transparência.</p> <p>Contato: <a href="/whatsapp">WhatsApp</a></p> ` })}`;
}, "D:/mercadolumiar/src/pages/sobre.astro", void 0);
const $$file = "D:/mercadolumiar/src/pages/sobre.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
