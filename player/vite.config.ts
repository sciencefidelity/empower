import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
      components: resolve(dirname(fileURLToPath(import.meta.url)), "./src/components"),
      lib: resolve(dirname(fileURLToPath(import.meta.url)), "./src/lib"),
      images: resolve(dirname(fileURLToPath(import.meta.url)), "./src/images"),
      pages: resolve(dirname(fileURLToPath(import.meta.url)), "./src/pages"),
      styles: resolve(dirname(fileURLToPath(import.meta.url)), "./src/styles"),
    },
  },
});
