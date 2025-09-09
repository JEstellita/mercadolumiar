import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DWs6iKHP.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DKX5Ry2o.mjs';
export { renderers } from '../renderers.mjs';

const $$Produtores = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Produtores \u2022 Cadastro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Produtores</h1> <div class="prose prose-invert max-w-none mb-6"> <p class="text-lg">
Quer cadastrar sua banca? Fale com a gente no WhatsApp — combinamos fotos, descrição e logística.
</p> </div> <a class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors" href="/whatsapp" aria-label="Entrar em contato via WhatsApp para cadastrar como produtor" onclick="window.dispatchEvent(new CustomEvent('track', {detail:{event:'click_cta', target:'whatsapp'}}))">
Quero participar
</a> ` })}`;
}, "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/produtores.astro", void 0);

const $$file = "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/produtores.astro";
const $$url = "/produtores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Produtores,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
