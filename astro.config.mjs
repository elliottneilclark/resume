import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// `site` is the canonical production domain: drives canonical URLs + sitemap.
// Custom domain lives at the root, so no `base` is set.
export default defineConfig({
  site: 'https://elliottclark.info',
  integrations: [sitemap()],
});
