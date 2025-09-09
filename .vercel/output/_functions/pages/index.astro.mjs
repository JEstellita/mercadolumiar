import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DyFe-0yu.mjs';
import 'kleur/colors';
import { a as $$CtaButtons, $ as $$ProgressBar } from '../chunks/CtaButtons_DZtJlwt7.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let progress = { totalMonthly: 0, goal: Number(150), supporters: 0 };
  try {
    const r = await fetch("/api/progresso");
    progress = await r.json();
  } catch {
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <h1>Compre local, construa futuro.</h1> <p>Um site para comprar <strong>direto de quem produz</strong> em Lumiar e Biorregião.</p> ${renderComponent($$result, "CtaButtons", $$CtaButtons, {})} </section> ${renderComponent($$result, "ProgressBar", $$ProgressBar, { "total": progress.totalMonthly, "goal": progress.goal, "supporters": progress.supporters })} <section class="mt-12"> <h2>Como funciona</h2> <ul class="list-disc pl-6 space-y-2"> <li>Contribuição livre — qualquer valor mensal ajuda.</li> <li>Meta base: R$150/mês para cobrir plataforma e domínio.</li> <li>Acima disso: investimos em divulgação e publicação de novas bancas.</li> </ul> </section>`;
}, "D:/mercadolumiar/src/pages/index.astro", void 0);
const $$file = "D:/mercadolumiar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
