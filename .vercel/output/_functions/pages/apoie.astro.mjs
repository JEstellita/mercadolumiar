import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dDJr31h3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jA3CkfZ-.mjs';
import { $ as $$CtaButtons } from '../chunks/CtaButtons_1U6Z1Eqb.mjs';
export { renderers } from '../renderers.mjs';

const $$Apoie = createComponent(($$result, $$props, $$slots) => {
  const goal = Number(150);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Apoie o Mercado Biorregional Lumiar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Apoie o Mercado Biorregional Lumiar</h1> <p>A contribuição mensal pode ser <strong>de qualquer valor</strong>.</p> <p><strong>Meta base:</strong> chegar a <strong>R$ ${goal}/mês</strong> para cobrir o plano da plataforma e o domínio.</p> <p><strong>Acima disso:</strong> tudo vai para <strong>divulgação</strong> — impulsionar posts, criar materiais, fotografar produtos e publicar novas bancas com mais agilidade.</p> ${renderComponent($$result2, "CtaButtons", $$CtaButtons, {})} <h2 style="margin-top:2rem;">Perguntas frequentes</h2> <details><summary>Posso contribuir com valor único?</summary><p>O foco é mensal, mas qualquer valor ajuda. Em breve abriremos doações pontuais.</p></details> <details><summary>Como vejo o progresso?</summary><p>No topo do site, atualizado periodicamente.</p></details> <details><summary>Sou produtor(a), como participo?</summary><p>Fale no WhatsApp — é rápido. O botão está no topo dessa página.</p></details> <details><summary>O que é feito com os recursos?</summary><p>Primeiro mantemos a plataforma; acima da meta, aceleramos divulgação e publicação de novas bancas.</p></details> ` })}`;
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
