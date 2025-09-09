import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BRsY9cT0.mjs';
import { manifest } from './manifest_Cv7IN38V.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/health.astro.mjs');
const _page2 = () => import('./pages/api/mp-webhook.astro.mjs');
const _page3 = () => import('./pages/api/progresso.astro.mjs');
const _page4 = () => import('./pages/apoie.astro.mjs');
const _page5 = () => import('./pages/assinar.astro.mjs');
const _page6 = () => import('./pages/produtores.astro.mjs');
const _page7 = () => import('./pages/sobre.astro.mjs');
const _page8 = () => import('./pages/whatsapp.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/health.ts", _page1],
    ["src/pages/api/mp-webhook.ts", _page2],
    ["src/pages/api/progresso.ts", _page3],
    ["src/pages/apoie.astro", _page4],
    ["src/pages/assinar.ts", _page5],
    ["src/pages/produtores.astro", _page6],
    ["src/pages/sobre.astro", _page7],
    ["src/pages/whatsapp.ts", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "03a9852f-5dc0-43fc-9af0-ce48484a7693",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
