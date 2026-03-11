import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kernel.re",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },
});
