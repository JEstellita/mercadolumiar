import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  site: process.env.PUBLIC_SITE_URL || 'https://mercadobiorregional.vercel.app',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [sitemap()]
});
