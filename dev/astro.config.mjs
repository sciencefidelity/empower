import { resolve } from "path"

export default {
  projectRoot: '.',
  // https://docs.astro.build/en/reference/configuration-reference/
  buildOptions: {
    site: "https://empower-us-all.org",
    sitemap: true
  },
  devOptions: {
    hostname: "0.0.0.0",
  },
  renderers: ["@astrojs/renderer-react", "@astrojs/renderer-svelte"],
  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
        "components": resolve("./src/components"),
        "layouts": resolve("./src/layouts"),
        "lib": resolve("./src/lib"),
        "pages": resolve("./src/pages"),
        "styles": resolve("./src/styles")
      }
    }
  }
}
