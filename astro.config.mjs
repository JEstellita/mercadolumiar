import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || 'https://mercadobiorregional.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ]
});
