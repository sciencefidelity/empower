import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://empower-us-all.org/",
  sitemap: true,
  server: {
    host: false
  }
})
