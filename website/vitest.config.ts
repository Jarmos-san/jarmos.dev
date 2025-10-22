import { defineVitestProject } from "@nuxt/test-utils/config";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Run the tests in isolated environments, one for unit tests and another
    // for component tests with Nuxt
    projects: [
      // Unit tests
      {
        test: {
          name: "unit",
          include: ["tests/unittests/**/*.test.ts"],
          environment: "node",
        },
      },
      // Component tests using Nuxt.js
      defineVitestProject({
        test: {
          name: "nuxt",
          include: ["tests/nuxt/**/*.test.ts"],
          environment: "nuxt",
        },
      }),
    ],

    // Disable watching for file changes to the tests.
    watch: false,

    // Generate a coverage report. A normal text output for the console (during
    // development) and a JSON output (for displaying in CI environments)
    coverage: {
      enabled: true,
      reporter: ["text", "json"],
      exclude: [
        "*.config.ts",
        "**/app.vue",
        "**/types/**/*.ts",
        "**/pages/**/*.vue",
        "**/layouts/**/*.vue",
        ...coverageConfigDefaults.exclude,
      ],
    },

    // Log memory leak details
    logHeapUsage: true,

    // Stop running tests after 3 failures in CI
    bail: process.env.CI ? 3 : undefined,

    // Retry thrice when a test failed in CI
    retry: process.env.CI ? 3 : 0,

    // Silence the output to STDOUT in environments other than CI
    silent: !process.env.CI ? "passed-only" : false,

    // Configure a context-aware reporter for better development experience (DX)
    reporters: process.env.GITHUB_ACTIONS
      ? ["dot", "github-actions"]
      : ["verbose"],
  },
});
