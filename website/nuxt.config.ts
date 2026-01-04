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
    "nuxt-site-config",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxt/test-utils/module",
    "@nuxt/scripts",
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
  site: {
    url: "https://jarmos.dev",
    name: "jarmos.dev",
  },
  sitemap: {
    defaults: {
      changefreq: "monthly",
    },
    xslColumns: [
      {
        label: "URL",
        width: "75%",
      },
      {
        label: "Last Modified",
        select: "sitemap:lastmod",
        width: "25%",
      },
      {
        label: "Priority",
        select: "sitemap:priority",
        width: "12.5%",
      },
      {
        label: "Change Frequency",
        select: "sitemap:changefreq",
        width: "12.5%",
      },
    ],
    zeroRuntime: true,
  },
  $production: {
    scripts: {
      registry: {
        cloudflareWebAnalytics: {
          token: process.env.CLOUDFLARE_WEB_ANALYTICS_TOKEN ?? "",
        },
      },
    },
  },
  nitro: {
    routeRules: {
      "/rss.xml": {
        cache: {
          maxAge: 86400,
        },
      },
    },
  },
});
