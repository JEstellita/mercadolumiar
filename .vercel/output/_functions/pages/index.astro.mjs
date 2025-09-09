import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B8eGQ77D.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_St9Fv_na.mjs';
import { a as $$CtaButtons, $ as $$ProgressBar } from '../chunks/CtaButtons_B1uyFTsN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let progress = { totalMonthly: 0, goal: Number(150), supporters: 0 };
  try {
    const r = await fetch(`${void 0}/api/progresso`);
    progress = await r.json();
  } catch {
    console.log("Erro ao buscar progresso, usando valores padrão");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 px-4 text-center"> <div class="max-w-4xl mx-auto"> <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
Compre local, construa futuro.
</h1> <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
Um site para comprar <strong class="text-emerald-400">direto de quem produz</strong> em Lumiar e Biorregião.
</p> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} </div> </section>  <section class="py-8 px-4"> <div class="max-w-4xl mx-auto"> ${renderComponent($$result2, "ProgressBar", $$ProgressBar, { "total": progress.totalMonthly, "goal": progress.goal, "supporters": progress.supporters })} </div> </section>  <section class="py-16 px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
Como funciona
</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <div class="text-4xl mb-4">💚</div> <h3 class="text-xl font-semibold text-white mb-3">Contribuição livre</h3> <p class="text-gray-300">Qualquer valor mensal ajuda a manter a plataforma funcionando.</p> </div> <div class="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <div class="text-4xl mb-4">🎯</div> <h3 class="text-xl font-semibold text-white mb-3">Meta base</h3> <p class="text-gray-300">R$150/mês para cobrir plataforma e domínio.</p> </div> <div class="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <div class="text-4xl mb-4">📢</div> <h3 class="text-xl font-semibold text-white mb-3">Acima disso</h3> <p class="text-gray-300">Investimos em divulgação e publicação de novas bancas.</p> </div> </div> </div> </section>  <section class="py-16 px-4 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
Por que apoiar o Mercado Biorregional Lumiar?
</h2> <div class="grid md:grid-cols-2 gap-8 text-left"> <div class="space-y-4"> <h3 class="text-xl font-semibold text-emerald-400">🌱 Economia Local</h3> <p class="text-gray-300">Fortalecemos produtores locais e reduzimos a pegada de carbono dos alimentos.</p> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-emerald-400">🤝 Comunidade</h3> <p class="text-gray-300">Criamos conexões diretas entre quem produz e quem consome.</p> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-emerald-400">🍃 Sustentabilidade</h3> <p class="text-gray-300">Promovemos práticas agrícolas mais sustentáveis e conscientes.</p> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-emerald-400">💡 Inovação</h3> <p class="text-gray-300">Desenvolvemos tecnologia para facilitar o comércio local.</p> </div> </div> </div> </section>  <section class="py-16 px-4 text-center"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
Pronto para fazer parte dessa mudança?
</h2> <p class="text-xl text-gray-300 mb-8">
Sua contribuição, por menor que seja, já faz a diferença.
</p> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} </div> </section> ` })}`;
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
