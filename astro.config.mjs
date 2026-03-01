import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

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

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [tailwindcss()],
});
