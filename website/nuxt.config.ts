import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  compatibilityDate: "2025-09-29",
  runtimeConfig: {
    public: {
      baseURL: "https://jarmos.dev",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxt/test-utils/module",
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "everforest-dark",
          langs: ["python", "javascript", "typescript", "shell", "lua"],
        },
      },
    },
  },
  robots: {
    blockNonSeoBots: true,
  },
});
