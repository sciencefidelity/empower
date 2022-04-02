import { defineConfig } from "astro/config"
// import { resolve } from "path"
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
  projectRoot: '.',
  buildOptions: {
    site: "https://empower-us-all.org",
    sitemap: true
  },
  devOptions: {
    host: false
  },
  integrations: [react(), svelte()],
})
