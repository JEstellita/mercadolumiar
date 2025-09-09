import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dDJr31h3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jA3CkfZ-.mjs';
export { renderers } from '../renderers.mjs';

const $$Produtores = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Produtores \u2022 Cadastro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Produtores</h1> <p>Quer cadastrar sua banca? Fale com a gente no WhatsApp — combinamos fotos, descrição e logística.</p> <p><a class="btn" href="/whatsapp" style="background:var(--accent); color:#0b0b0b; padding:.8rem 1rem; border-radius:.8rem; font-weight:700;">Quero participar</a></p> ` })}`;
}, "D:/mercadolumiar/src/pages/produtores.astro", void 0);

const $$file = "D:/mercadolumiar/src/pages/produtores.astro";
const $$url = "/produtores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Produtores,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
