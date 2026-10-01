import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site unique : toutes les communes sont des rubriques de amanihost.com
export default defineConfig({
  site: 'https://amanihost.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci/'),
    }),
  ],
});
