import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DyFe-0yu.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B83BzxVs.mjs';
import { $ as $$ProgressBar, a as $$CtaButtons } from '../chunks/CtaButtons_DZtJlwt7.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Apoie = createComponent(async ($$result, $$props, $$slots) => {
  let progress = { totalMonthly: 0, goal: Number(150), supporters: 0 };
  try {
    const r = await fetch(`${void 0}/api/progresso`);
    progress = await r.json();
  } catch {
    console.log("Erro ao buscar progresso, usando valores padrão");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 px-4 text-center"> <div class="max-w-4xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
Apoie o Mercado Biorregional Lumiar
</h1> <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Sua contribuição mensal ajuda a construir uma plataforma que conecta produtores locais com consumidores conscientes.
</p> </div> </section>  <section class="py-8 px-4"> <div class="max-w-4xl mx-auto"> ${renderComponent($$result2, "ProgressBar", $$ProgressBar, { "total": progress.totalMonthly, "goal": progress.goal, "supporters": progress.supporters })} </div> </section>  <section class="py-16 px-4"> <div class="max-w-4xl mx-auto"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-bold text-white mb-6">Como funciona o apoio</h2> <div class="space-y-6"> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-emerald-400 mb-3">💚 Contribuição livre</h3> <p class="text-gray-300">A contribuição mensal pode ser de qualquer valor. Cada real conta e faz a diferença para manter a plataforma funcionando.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-emerald-400 mb-3">🎯 Meta base: R$150/mês</h3> <p class="text-gray-300">Este valor cobre os custos essenciais da plataforma: hospedagem, domínio e manutenção básica.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-emerald-400 mb-3">📢 Acima da meta</h3> <p class="text-gray-300">Investimos em divulgação, fotos dos produtos, materiais promocionais e publicação de novas bancas com mais agilidade.</p> </div> </div> </div> <div> <h2 class="text-3xl font-bold text-white mb-6">Por que apoiar?</h2> <div class="space-y-6"> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-emerald-400 mb-3">🌱 Economia Local</h3> <p class="text-gray-300">Fortalecemos produtores locais, reduzimos a pegada de carbono e promovemos alimentos mais frescos e saudáveis.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-emerald-400 mb-3">🤝 Comunidade</h3> <p class="text-gray-300">Criamos conexões diretas entre quem produz e quem consome, fortalecendo os laços da comunidade.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-emerald-400 mb-3">💡 Tecnologia</h3> <p class="text-gray-300">Desenvolvemos ferramentas digitais que facilitam o comércio local e tornam mais fácil encontrar produtos regionais.</p> </div> </div> </div> </div> </div> </section>  <section class="py-16 px-4 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-8 text-center">
Perguntas Frequentes
</h2> <div class="space-y-6"> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-white mb-3">Como funciona o pagamento?</h3> <p class="text-gray-300">O pagamento é feito através do Mercado Pago, de forma segura e recorrente. Você pode cancelar a qualquer momento.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-white mb-3">Posso mudar o valor da contribuição?</h3> <p class="text-gray-300">Sim! Você pode alterar o valor da sua contribuição mensal a qualquer momento através do painel do Mercado Pago.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-white mb-3">Como sei que meu dinheiro está sendo usado corretamente?</h3> <p class="text-gray-300">Mantemos transparência total através desta página de progresso e relatórios mensais sobre como os recursos são utilizados.</p> </div> <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border"> <h3 class="text-xl font-semibold text-white mb-3">O que acontece se não atingirmos a meta?</h3> <p class="text-gray-300">Mesmo sem atingir a meta, continuamos trabalhando na plataforma. Cada contribuição ajuda a manter o projeto vivo e crescendo.</p> </div> </div> </div> </section>  <section class="py-16 px-4 text-center"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-6">
Pronto para fazer parte dessa mudança?
</h2> <p class="text-xl text-gray-300 mb-8">
Se fizer sentido, seu apoio — do tamanho que for — já ajuda muito. E se puder, encaminhe para duas pessoas que valorizam comprar local.
</p> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} </div> </section> ` })}`;
}, "D:/mercadolumiar/src/pages/apoie.astro", void 0);
const $$file = "D:/mercadolumiar/src/pages/apoie.astro";
const $$url = "/apoie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Apoie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
