/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./pages/**/*.{ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          10: "#111A20",
          20: "#1C2C35",
          30: "#234B4A",
          40: "#416883",
          50: "#5E8CA7",
          60: "#1D1E26",
        },
        text: {
          10: "#ECF8FF",
          20: "#C9E2F0",
          30: "#BBC1C7",
        },
        glow: {
          10: "#B0FBBC",
          20: "#82F9A1",
          30: "#83F9A2",
        },
      },
    },
  },
};
