import { createStitches, globalCss } from "@stitches/react";

export const { getCssText, styled } = createStitches({
  theme: {
    colors: {
      blue10: "#111A20",
      blue20: "#1C2C35",
      blue30: "#234B4A",
      blue40: "#416883",
      blue50: "#5E8CA7",
      text10: "#ECF8FF",
      text20: "#C9E2F0",
      glow10: "#B0FBBC",
      glow20: "#82F9A1",
    },
  },
});

/* INFO: Reset some default browser-provided CSS styling. */
/* For reference, check the following resources: */
/* https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset */
/* https://stitches.dev/docs/api#globalcss */
export const resetCSS = globalCss({
  /* Use a more intuitive box-sizing model. */
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  /* Remove default browser-provided CSS styling. */
  "*": {
    margin: 0,
  },
  /* Allow percentage based heights in the application. */
  "html, body": {
    height: "100%",
  },
  /* Add accessible line-height & improved text rendering */
  body: {
    lineHeight: 1.5,
    // TODO: Uncomment this line after learning/experimentation is complete.
    backgroundColor: "$blue10",
  },
  /* Improved media details. */
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  /* Remove some built-in form typography styles. */
  "input, button, textarea, select": {
    font: "inherit",
  },
  /* Avoid text overflows. */
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  /* Create a root stacking context. */
  "&.root, &.__next": {
    isolation: "isolate",
  },
});
