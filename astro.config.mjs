// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jevvii.github.io',
  base: '/reviewiii/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
