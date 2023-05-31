/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  scanner: {
    exclude: ["/.*?pdf", ".*/amp"],
    samples: 3,
    throttle: true,
  },
  ci: {
    budget: {
      accessibility: 90,
    },
    buildStatic: true,
    reporter: "jsonExpanded",
  },
  debug: true,
});
