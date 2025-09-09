import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderScript, a as renderTemplate } from './astro/server_B8eGQ77D.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ProgressBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProgressBar;
  const { total = 0, goal = 150, supporters = 0 } = Astro2.props;
  const pct = Math.min(100, Math.round(total / goal * 100));
  return renderTemplate`${maybeRenderHead()}<section class="p-6 rounded-2xl border bg-white/5 backdrop-blur-sm"> <div class="flex items-center justify-between mb-2"> <h3 class="text-lg font-semibold text-white">Progresso da campanha</h3> <span class="text-emerald-400 font-bold" data-percentage>${pct}%</span> </div> <div class="w-full h-3 bg-gray-700/40 rounded-full overflow-hidden"> <div data-progress-bar${addAttribute(`width:${pct}%`, "style")} class="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-[width] duration-500 ease-out"></div> </div> <p class="mt-3 text-gray-300"> <strong class="text-emerald-400" data-total>R$ ${total}</strong> de R$ ${goal}/mês • <span data-supporters>${supporters}</span> assinantes
</p> </section> ${renderScript($$result, "D:/mercadolumiar/src/components/ProgressBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/mercadolumiar/src/components/ProgressBar.astro", void 0);

const $$CtaButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 flex gap-4 flex-wrap justify-center"> <a href="/assinar" class="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 hover:scale-105">
🌱 Apoiar mensalmente
</a> <a href="/whatsapp" class="px-8 py-4 rounded-xl border-2 border-emerald-500 text-emerald-400 font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-200 hover:scale-105">
💬 Falar no WhatsApp
</a> </div>`;
}, "D:/mercadolumiar/src/components/CtaButtons.astro", void 0);

export { $$ProgressBar as $, $$CtaButtons as a };
