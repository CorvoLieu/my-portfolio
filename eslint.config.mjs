// eslint.config.mjs
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  // 1. Base JS recommended rules
  eslint.configs.recommended,

  // 2. TypeScript recommended rules
  ...tseslint.configs.recommended,

  // 3. Astro recommended rules
  ...eslintPluginAstro.configs.recommended,

  {
    // 4. Custom rules/ignores
    ignores: ["dist/", ".astro/", "node_modules/"],
  },

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
      globals: {
        ...globals.browser, // This tells ESLint that "document" is okay to use
      },
    },
    rules: {
      // You can add specific Astro rules here
    },
  },

  // 5. Prettier integration
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
);
