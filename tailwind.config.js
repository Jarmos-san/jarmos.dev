/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        blue: {
          10: "#111A20",
          20: "#1C2C35",
          30: "#243B4A",
          40: "#416883",
          50: "#5E8CA7",
          60: "#1D1E26",
        },
        white: {
          10: "#ECF8FF",
          20: "#C9E2F0",
          30: "#BBC1C7",
        },
        green: {
          10: "#B0FBBC",
          20: "#82F9A1",
          30: "#83F9A2",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme("colors.gray.400"),
            },
            h1: {
              color: theme("colors.green.30"),
              fontWeight: theme("fontWeight.bold"),
              fontSize: theme("fontSize.3xl"),
            },
            h2: {
              color: theme("colors.green.10"),
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.2xl"),
            },
            a: {
              color: theme("colors.white.10"),
              textDecorationColor: theme("colors.gray.100"),
            },
            p: {
              color: theme("colors.white.20"),
            },
            li: {
              color: theme("colors.white.20"),
            },
            strong: {
              color: theme("colors.white.20"),
            },
            address: {
              color: theme("colors.white.20"),
            },
          },
        },
      }),
    },
  },
};
