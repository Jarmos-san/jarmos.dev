import Image from "next/image";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-green-30">{children}</h1>
    ),
    img: (props) => (
      <Image width={1200} height={640} alt="" className="my-10" {...props} />
    ),
    ...components,
  };
}
