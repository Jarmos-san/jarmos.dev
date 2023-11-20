/**
 * The default MDX support in general is very flaky in the current version of
 * Next.js. There are a few errors raised by the TypeScript language server and
 * TailwindCSS transpilation is not full-proof either! It's because of the later
 * that instead of using TailwindCSS utility classes I'm directly issuing inline
 * style props to the custom components!

 * The custom style props are based on values directly copied from the
 * TailwindCSS documentations on respective classes.
 **/
import Image from "next/image";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          color: "#83F9A2",
          fontSize: "1.875rem",
          fontWeight: 800,
          lineHeight: "2.25rem",
        }}
      >
        {children}
      </h1>
    ),
    img: (props) => (
      <Image
        width={1200}
        height={640}
        alt=""
        style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}
        {...props}
      />
    ),
    p: ({ children }) => (
      <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>{children}</p>
    ),
    ...components,
  };
}
