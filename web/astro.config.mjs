import { defineConfig } from "astro/config"

export default defineConfig({
  projectRoot: '.',
  buildOptions: {
    site: "https://empower-stage.vercel.app/",
    sitemap: true
  },
  devOptions: {
    host: false
  }
})
