import Image from "next/image";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-extrabold text-3xl text-green-20">{children}</h1>
    ),
    img: (props) => <Image width={200} height={200} alt="" {...props} />,
    ...components,
  };
}
