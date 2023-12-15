import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  experimental: {
    contentCollectionCache: true,
  },
  site: "https://jarmos.dev",
  image: {
    domains: ["https://ik.imagekit.io/jarmos"],
  },
  integrations: [sitemap()],
});
