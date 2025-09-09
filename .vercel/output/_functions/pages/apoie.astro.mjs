import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DWs6iKHP.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DKX5Ry2o.mjs';
import { $ as $$CtaButtons } from '../chunks/CtaButtons_DVNAlSxJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Apoie = createComponent(($$result, $$props, $$slots) => {
  const goal = Number(150);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Apoie o Mercado Biorregional Lumiar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Apoie o Mercado Biorregional Lumiar</h1> <div class="prose prose-invert max-w-none mb-8"> <p class="text-lg">
A contribuição mensal pode ser de qualquer valor. Meta base: R$${goal}/mês para manter a plataforma e o domínio. 
      Acima disso: divulgação — impulsionar posts, criar materiais, fotografar produtos e publicar novas bancas com mais agilidade. 
      Se fizer sentido, seu apoio — do tamanho que for — já ajuda muito.
</p> </div> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} <h2 style="margin-top:2rem;">Perguntas frequentes</h2> <div class="space-y-4 mt-4"> <details class="border border-gray-700 rounded-lg p-4"> <summary class="font-semibold cursor-pointer hover:text-green-400 transition-colors">
Posso contribuir com valor único?
</summary> <p class="mt-2 text-gray-300">
Foco mensal, mas qualquer valor ajuda.
</p> </details> <details class="border border-gray-700 rounded-lg p-4"> <summary class="font-semibold cursor-pointer hover:text-green-400 transition-colors">
Como vejo o progresso?
</summary> <p class="mt-2 text-gray-300">
Barra no topo do site.
</p> </details> <details class="border border-gray-700 rounded-lg p-4"> <summary class="font-semibold cursor-pointer hover:text-green-400 transition-colors">
Sou produtor(a), como participo?
</summary> <p class="mt-2 text-gray-300">
Fale no WhatsApp (botão).
</p> </details> <details class="border border-gray-700 rounded-lg p-4"> <summary class="font-semibold cursor-pointer hover:text-green-400 transition-colors">
O que é feito com os recursos?
</summary> <p class="mt-2 text-gray-300">
Primeiro infraestrutura; depois divulgação e novas bancas.
</p> </details> </div> ` })}`;
}, "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/apoie.astro", void 0);
const $$file = "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/apoie.astro";
const $$url = "/apoie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Apoie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
