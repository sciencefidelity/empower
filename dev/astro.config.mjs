import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://empower-stage.vercel.app/",
  server: {
    host: false,
  },
  integrations: [react(), svelte()],
});
