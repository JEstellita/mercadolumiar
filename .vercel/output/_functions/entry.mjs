import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CLVy_Mta.mjs';
import { manifest } from './manifest_DtchaYyq.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/mp-webhook.astro.mjs');
const _page2 = () => import('./pages/api/progresso.astro.mjs');
const _page3 = () => import('./pages/apoie.astro.mjs');
const _page4 = () => import('./pages/assinar.astro.mjs');
const _page5 = () => import('./pages/produtores.astro.mjs');
const _page6 = () => import('./pages/sobre.astro.mjs');
const _page7 = () => import('./pages/whatsapp.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/mp-webhook.ts", _page1],
    ["src/pages/api/progresso.ts", _page2],
    ["src/pages/apoie.astro", _page3],
    ["src/pages/assinar.ts", _page4],
    ["src/pages/produtores.astro", _page5],
    ["src/pages/sobre.astro", _page6],
    ["src/pages/whatsapp.ts", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bd93c141-3baf-4c6e-8109-95ad99cf3a28",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
