import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DWs6iKHP.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DKX5Ry2o.mjs';
import { $ as $$ProgressBar } from '../chunks/ProgressBar_CyvbLE2m.mjs';
import { $ as $$CtaButtons } from '../chunks/CtaButtons_DVNAlSxJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let progress = { totalMonthly: 0, goal: Number(150), supporters: 0, stale: true };
  try {
    const r = await fetch("/api/progresso");
    progress = await r.json();
  } catch {
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Compre local, construa futuro." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="padding:2rem 0 1rem;"> <h1 style="font-size:2rem; line-height:1.2; margin:0 0 .5rem;">Compre local, construa futuro.</h1> <p style="opacity:.9; max-width:60ch">Um site para comprar <strong>direto de quem produz</strong> em Lumiar e Biorregião.</p> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} </section> ${renderComponent($$result2, "ProgressBar", $$ProgressBar, { "total": progress.totalMonthly, "goal": progress.goal, "supporters": progress.supporters, "stale": progress.stale })} <section style="margin-top:2rem;"> <h2>Como funciona</h2> <ul style="margin:.5rem 0 0 1rem;"> <li>Contribuição livre — qualquer valor mensal ajuda.</li> <li>Meta base: R$150/mês para cobrir plataforma e domínio.</li> <li>Acima disso: investimos em divulgação e publicação de novas bancas.</li> </ul> </section> ` })}`;
}, "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/index.astro", void 0);
const $$file = "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
