import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

import Seo from "@components/seo";

function BlogPage({
  data,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        title={data.title}
        url={`/blog/${data.slug}`}
        desc={data.description}
        image={data.coverImage.href}
        imageAlt={data.coverImage.alt}
      />
      <article
        className="container prose mx-auto max-w-screen-sm px-5
        lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  useInlineStyles={false}
                  showLineNumbers
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code>{children}</code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the location of the "_blog" directory where the Markdown files are at
  const blogDir = path.join(process.cwd(), "_blog");

  // Get the list of Markdown files in the specified directory
  const mdfiles = readdirSync(blogDir, { withFileTypes: true })
    .filter((file) => file.isFile())
    .map((file) => file.name);

  // TODO: Parse the Markdown file to fetch the "slug" metadata instead for
  // more granular control over the design of the URL.
  // Get the URL of the blog post based on the Markdown filename.
  const paths = mdfiles.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get the location where the Markdown blog posts are stored in
  const blogDir = path.join(process.cwd(), "_blog");

  // Parse the Markdown files for its content and frontmatter metadata
  const { data, content } = matter.read(`${blogDir}/${params?.slug}.md`);

  // Serialise the date metadata to ensure JSON serializability
  const serialisedData = { ...data, date: data.date.toISOString() };

  return {
    props: {
      data: serialisedData,
      content: content,
    },
  };
};

export default BlogPage;

// FIXME: Syntax highlighting is broken fix it some other day
