import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: { "/": { destination: "/en/", status: 301 } },
});
