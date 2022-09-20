import { createStitches, globalCss } from "@stitches/react";

export const { getCssText } = createStitches({});

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
