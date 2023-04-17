/**
 * @type {import('tailwindcss').Config}
 */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
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
    },
  },
};
