import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_dDJr31h3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jA3CkfZ-.mjs';
import 'clsx';
import { $ as $$CtaButtons } from '../chunks/CtaButtons_1U6Z1Eqb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mercadobiorregional.vercel.app");
const $$ProgressBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProgressBar;
  const { total = 0, goal = 150, supporters = 0, stale = false } = Astro2.props;
  const pct = Math.min(100, Math.round(total / goal * 100));
  return renderTemplate`${maybeRenderHead()}<section style="padding:1rem; border:1px solid #1f1f1f; border-radius:1rem;"> <div style="display:flex; justify-content:space-between; margin-bottom:.5rem;"> <h3 style="margin:0">Progresso da campanha</h3><span>${pct}%</span> </div> <div style="width:100%; height:12px; background:#1b1b1b; border-radius:8px;"> <div${addAttribute(`width:${pct}%; height:12px; background:var(--accent); border-radius:8px; transition:width .5s`, "style")}></div> </div> <p style="margin:.6rem 0 0;"> <strong>R$ ${total.toFixed(2)}</strong> de R$ ${goal}/mês • ${supporters} assinantes
${stale && renderTemplate`<span style="margin-left:.5rem; opacity:.7">(atualizando…)</span>`} </p> </section>`;
}, "D:/mercadolumiar/src/components/ProgressBar.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let progress = { totalMonthly: 0, goal: Number(150), supporters: 0, stale: true };
  try {
    const r = await fetch("/api/progresso");
    progress = await r.json();
  } catch {
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Compre local, construa futuro." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="padding:2rem 0 1rem;"> <h1 style="font-size:2rem; line-height:1.2; margin:0 0 .5rem;">Compre local, construa futuro.</h1> <p style="opacity:.9; max-width:60ch">Um site para comprar <strong>direto de quem produz</strong> em Lumiar e Biorregião.</p> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} </section> ${renderComponent($$result2, "ProgressBar", $$ProgressBar, { "total": progress.totalMonthly, "goal": progress.goal, "supporters": progress.supporters, "stale": progress.stale })} <section style="margin-top:2rem;"> <h2>Como funciona</h2> <ul style="margin:.5rem 0 0 1rem;"> <li>Contribuição livre — qualquer valor mensal ajuda.</li> <li>Meta base: R$150/mês para cobrir plataforma e domínio.</li> <li>Acima disso: investimos em divulgação e publicação de novas bancas.</li> </ul> </section> ` })}`;
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
