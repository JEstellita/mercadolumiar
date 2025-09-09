import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, r as renderComponent, e as renderScript, d as addAttribute, f as renderHead, g as renderSlot } from './astro/server_B8eGQ77D.mjs';
import 'kleur/colors';
import 'clsx';
import './index_DPYU2bcR.mjs';
import { $ as $$Image } from './_astro_assets_C3hvv7YN.mjs';
/* empty css                         */

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>`;
}, "D:/mercadolumiar/src/icons/Menu.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteLogo, navLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6" data-astro-cid-3ef6ksr2> <a href="/" aria-label="Home link" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-full", "src": siteLogo, "width": "45", "height": "45", "alt": "website logo", "data-astro-cid-3ef6ksr2": true })} </a> <button type="button" id="menu-button" class="px-1.5 text-neutral sm:hidden" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true })} </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li class="relative" data-astro-cid-3ef6ksr2> <a${addAttribute(`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['\u2022'] hover:text-white`, "class")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`)} </ul> </nav> </header> ${renderScript($$result, "D:/mercadolumiar/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/mercadolumiar/src/components/Header.astro", void 0);

const SITE_CONFIG = {
  title: "Alejandro Múnez — Mobile & Web Developer",
  author: "Alejandro Múnez Cuntez",
  description: "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" }
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app"
};

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { author, socialLinks } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white"> <ul class="mb-5 flex flex-wrap justify-center gap-x-5 text-xs"> ${socialLinks.map(({ text, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" class="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"> ${text} </a> </li>`)} </ul> <p class="text-xs"> ${author} © ${currentYear}. <span class="text-neutral">Designed & Developed by</span> Moisés Machuca
</p> </footer>`;
}, "D:/mercadolumiar/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    siteLogo,
    navLinks,
    lang,
    author,
    socialLinks,
    socialImage,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href
  } = SITE_CONFIG;
  const ogImgUrl = canonicalURL + socialImage;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-pt-16 scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogImgUrl, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImgUrl, "content")}>${renderHead()}</head> <body class="bg-black font-sans"> ${renderComponent($$result, "Header", $$Header, { "siteLogo": siteLogo, "navLinks": navLinks })} <main class="mx-auto max-w-3xl px-5"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "author": author, "socialLinks": socialLinks })} </body></html>`;
}, "D:/mercadolumiar/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
