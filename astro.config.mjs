// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hullsafe.co.uk',
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
