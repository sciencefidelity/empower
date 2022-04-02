import { defineConfig } from "astro/config"

export default defineConfig({
  projectRoot: '.',
  buildOptions: {
    site: "https://empower-us-all.org",
    sitemap: true
  },
  devOptions: {
    host: true
  }
})
