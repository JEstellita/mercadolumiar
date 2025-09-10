import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || 'https://mercadobiorregional.vercel.app',
  integrations: [
    sitemap()
  ]
});
