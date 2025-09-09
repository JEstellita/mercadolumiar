import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  site: process.env.PUBLIC_SITE_URL || 'https://mercadobiorregional.vercel.app',
  adapter: vercel({ runtime: 'nodejs20.x' }),
  integrations: [sitemap()]
});
