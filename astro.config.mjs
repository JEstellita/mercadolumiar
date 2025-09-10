import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    functionPerRoute: false
  }),
  site: process.env.PUBLIC_SITE_URL || 'https://mercadolumiar.vercel.app',
  integrations: [
    sitemap()
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['googleapis']
      }
    }
  }
});
