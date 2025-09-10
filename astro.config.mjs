import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid', // Permite páginas estáticas + APIs server-rendered
  adapter: vercel(),
  site: process.env.PUBLIC_SITE_URL || 'https://mercadolumiar.vercel.app',
  integrations: [
    sitemap()
  ]
});
