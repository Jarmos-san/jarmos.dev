// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config";

export default createConfigForNuxt().prepend({
  ignores: ["**/.nuxt/**/*", "**/node_modules/**/*"],
  rules: {
    "nuxt/prefer-import-meta": "error",
  },
});
