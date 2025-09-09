import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_B8eGQ77D.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BJ2b3e32.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/mercadolumiar/","cacheDir":"file:///D:/mercadolumiar/node_modules/.astro/","outDir":"file:///D:/mercadolumiar/dist/","srcDir":"file:///D:/mercadolumiar/src/","publicDir":"file:///D:/mercadolumiar/public/","buildClientDir":"file:///D:/mercadolumiar/dist/client/","buildServerDir":"file:///D:/mercadolumiar/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/mp-webhook","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/mp-webhook\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"mp-webhook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/mp-webhook.ts","pathname":"/api/mp-webhook","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/progresso","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/progresso\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"progresso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/progresso.ts","pathname":"/api/progresso","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/apoie.DEjtYQjg.css"}],"routeData":{"route":"/apoie","isIndex":false,"type":"page","pattern":"^\\/apoie\\/?$","segments":[[{"content":"apoie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apoie.astro","pathname":"/apoie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/assinar","isIndex":false,"type":"endpoint","pattern":"^\\/assinar\\/?$","segments":[[{"content":"assinar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/assinar.ts","pathname":"/assinar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/apoie.DEjtYQjg.css"}],"routeData":{"route":"/produtores","isIndex":false,"type":"page","pattern":"^\\/produtores\\/?$","segments":[[{"content":"produtores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/produtores.astro","pathname":"/produtores","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/apoie.DEjtYQjg.css"}],"routeData":{"route":"/sobre","isIndex":false,"type":"page","pattern":"^\\/sobre\\/?$","segments":[[{"content":"sobre","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre.astro","pathname":"/sobre","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/whatsapp","isIndex":false,"type":"endpoint","pattern":"^\\/whatsapp\\/?$","segments":[[{"content":"whatsapp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/whatsapp.ts","pathname":"/whatsapp","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/apoie.DEjtYQjg.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/mercadolumiar/src/pages/apoie.astro",{"propagation":"none","containsHead":true}],["D:/mercadolumiar/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/mercadolumiar/src/pages/produtores.astro",{"propagation":"none","containsHead":true}],["D:/mercadolumiar/src/pages/sobre.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/mp-webhook@_@ts":"pages/api/mp-webhook.astro.mjs","\u0000@astro-page:src/pages/api/progresso@_@ts":"pages/api/progresso.astro.mjs","\u0000@astro-page:src/pages/apoie@_@astro":"pages/apoie.astro.mjs","\u0000@astro-page:src/pages/assinar@_@ts":"pages/assinar.astro.mjs","\u0000@astro-page:src/pages/produtores@_@astro":"pages/produtores.astro.mjs","\u0000@astro-page:src/pages/sobre@_@astro":"pages/sobre.astro.mjs","\u0000@astro-page:src/pages/whatsapp@_@ts":"pages/whatsapp.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DtchaYyq.mjs","D:/mercadolumiar/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DMMVK9Ik.mjs","D:/mercadolumiar/src/components/ProgressBar.astro?astro&type=script&index=0&lang.ts":"_astro/ProgressBar.astro_astro_type_script_index_0_lang.DXXREY1D.js","D:/mercadolumiar/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BHULAeOy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/mercadolumiar/src/components/ProgressBar.astro?astro&type=script&index=0&lang.ts","setInterval(async()=>{try{const t=await(await fetch(\"/api/progresso\")).json(),o=document.querySelector(\"[data-progress-bar]\"),r=document.querySelector(\"[data-total]\"),n=document.querySelector(\"[data-supporters]\"),a=document.querySelector(\"[data-percentage]\");if(o&&r&&n&&a){const s=Math.min(100,Math.round(t.totalMonthly/t.goal*100));o.style.width=`${s}%`,r.textContent=`R$ ${t.totalMonthly}`,n.textContent=`${t.supporters}`,a.textContent=`${s}%`}}catch(e){console.log(\"Erro ao atualizar progresso:\",e)}},3e4);"],["D:/mercadolumiar/src/components/Header.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\"#menu-button\"),i=document.querySelector(\"#main-menu\"),s=document.querySelectorAll(\"#main-menu > ul > li > a\"),r=()=>{i?.classList.toggle(\"hidden\");const e=i?.classList.contains(\"hidden\");o?.setAttribute(\"aria-expanded\",`${!e}`)};o?.addEventListener(\"click\",r);s.forEach(e=>{e?.addEventListener(\"click\",r)});const n=new IntersectionObserver(e=>{e.forEach(c=>{c.isIntersecting&&s.forEach(t=>{t.getAttribute(\"href\")===`#${c.target.id}`?t.classList.add(\"text-white\",\"md:after:opacity-100\"):t.classList.remove(\"text-white\",\"md:after:opacity-100\")})})},{threshold:.5});document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)});document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?n.disconnect():document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)})};"]],"assets":["/_astro/be-vietnam-pro-latin-400-normal.b8ymZRaE.woff2","/_astro/be-vietnam-pro-latin-ext-400-normal.0slToPcK.woff2","/_astro/be-vietnam-pro-vietnamese-400-normal.zlEY3-7j.woff2","/_astro/gabarito-latin-ext-wght-normal.C-_vgDbo.woff2","/_astro/gabarito-latin-wght-normal.ZpvQqcqY.woff2","/_astro/be-vietnam-pro-latin-400-normal.yim3LC58.woff","/_astro/be-vietnam-pro-latin-ext-400-normal.CAV9EJEJ.woff","/_astro/be-vietnam-pro-vietnamese-400-normal.BdPyuduI.woff","/_astro/apoie.DEjtYQjg.css","/alejandro-big.jpg","/alejandro-small.jpg","/check.svg","/clone-ig.png","/external.svg","/favicon.svg","/menu.svg","/raja.png","/shopify-clon.png","/spotifu.png","/zen-og.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tLQeBcMiSYGknK7VwhztdY/oIy72gHk+uMJs0iB4JZQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
