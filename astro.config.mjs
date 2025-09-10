import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Páginas server-rendered para APIs funcionarem
  adapter: vercel(),
  site: process.env.PUBLIC_SITE_URL || 'https://mercadolumiar.vercel.app',
  integrations: [
    sitemap()
  ]
});
