import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DWs6iKHP.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DKX5Ry2o.mjs';
export { renderers } from '../renderers.mjs';

const $$Sobre = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sobre" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sobre o projeto</h1> <div class="prose prose-invert max-w-none"> <h2>Quem somos</h2> <p>
O Mercado Biorregional Lumiar conecta quem produz e quem compra na nossa biorregião, 
      com simplicidade e transparência.
</p> <p>
Acreditamos na força da economia local e na importância de valorizar quem produz com cuidado e responsabilidade. 
      Nossa plataforma facilita o acesso direto aos produtos da região, fortalecendo a comunidade e promovendo práticas sustentáveis.
</p> <h2>Nossa missão</h2> <p>
Criar uma ponte digital entre produtores locais e consumidores conscientes, promovendo:
</p> <ul> <li>Economia circular e sustentável</li> <li>Fortalecimento da comunidade local</li> <li>Transparência nas relações comerciais</li> <li>Valorização do trabalho dos produtores</li> </ul> <h2>Contatos</h2> <p> <a href="/whatsapp" class="text-green-400 hover:text-green-300" aria-label="Entrar em contato via WhatsApp" onclick="window.dispatchEvent(new CustomEvent('track', {detail:{event:'click_cta', target:'whatsapp'}}))">
WhatsApp
</a> </p> </div> ` })}`;
}, "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/sobre.astro", void 0);

const $$file = "C:/Users/User/mercadolumiar1/mercadolumiar/src/pages/sobre.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
