import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Ddx2_mBy.mjs';
import { manifest } from './manifest_DBrfhlO9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/health.astro.mjs');
const _page3 = () => import('./pages/api/mp-webhook.astro.mjs');
const _page4 = () => import('./pages/api/progresso.astro.mjs');
const _page5 = () => import('./pages/apoie.astro.mjs');
const _page6 = () => import('./pages/assinar.astro.mjs');
const _page7 = () => import('./pages/campanha.astro.mjs');
const _page8 = () => import('./pages/produtores.astro.mjs');
const _page9 = () => import('./pages/robots.txt.astro.mjs');
const _page10 = () => import('./pages/sobre.astro.mjs');
const _page11 = () => import('./pages/whatsapp.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.2_@types+node@24_9c6b0d5463fd240e7f26d547d48ac4f7/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/health.ts", _page2],
    ["src/pages/api/mp-webhook.ts", _page3],
    ["src/pages/api/progresso.ts", _page4],
    ["src/pages/apoie.astro", _page5],
    ["src/pages/assinar.ts", _page6],
    ["src/pages/campanha.astro", _page7],
    ["src/pages/produtores.astro", _page8],
    ["src/pages/robots.txt.ts", _page9],
    ["src/pages/sobre.astro", _page10],
    ["src/pages/whatsapp.ts", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5561e51b-b83e-4a12-ace4-c576d5e50c3c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
