import { PropsWithChildren } from "react";

const BlogLayout = ({ children }: PropsWithChildren) => {
  // The contents of all the blogs are rendered inside the "article" tag
  return (
    <article
      className="container mx-auto max-w-screen-sm px-5 text-white-10
      lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      {children}
    </article>
  );
};

export default BlogLayout;
