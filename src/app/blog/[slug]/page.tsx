import { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamicParams = false;

type StaticParamsType = {
  params: {
    slug: string;
  };
};

function BlogPage({ params }: StaticParamsType) {
  const blogDir = path.join(process.cwd(), "_blog");
  const content = matter.read(`${blogDir}/${params?.slug}.md`).content;

  return (
    <>
      <article
        className="container prose mx-auto max-w-screen-sm px-5
        lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  // Get the location of the "_blog" directory where the Markdown files are at
  const blogDir = path.join(process.cwd(), "_blog");

  // Get the list of Markdown files in the specified directory
  const mdfiles = readdirSync(blogDir, { withFileTypes: true })
    .filter((file) => file.isFile())
    .map((file) => file.name);

  // TODO: Parse the Markdown file to fetch the "slug" metadata instead for
  // more granular control over the design of the URL.
  // Get the URL of the blog post based on the Markdown filename.
  return mdfiles.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default BlogPage;

// FIXME: Syntax highlighting is broken fix it some other day
