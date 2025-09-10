import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // Volta para estático
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: process.env.PUBLIC_SITE_URL || 'https://mercadolumiar.vercel.app',
  integrations: [
    sitemap()
  ]
});
