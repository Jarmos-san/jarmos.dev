import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

import Seo from "@components/seo";
import { blogDir } from "@constants/navlinks";

type PropTypes = {
  data: {
    title: string;
    date: Date;
    description: string;
    metaSummary?: string | null;
    coverImage?: {
      href: string;
      alt: string;
    };
    slug: string;
  };
  content: string;
};

type ParamTypes = {
  params: {
    slug: string;
  };
};

function BlogPage({ data, content }: PropTypes) {
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
        className="prose max-w-none px-10 text-white-30
        prose-headings:font-bold prose-headings:text-white-10 prose-h1:text-3xl
        prose-a:text-green-30 prose-a:underline prose-a:underline-offset-4
        prose-strong:text-white-20 lg:px-36 xl:px-56 2xl:px-96"
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

export async function getStaticPaths() {
  const mdfiles = readdirSync(blogDir, { withFileTypes: true })
    .filter((file) => file.isFile())
    .map((file) => file.name);
  const paths = mdfiles.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: ParamTypes) {
  const filename = readFileSync(`${blogDir}/${slug}.md`, "utf-8");
  const { data, content } = matter(filename);

  return {
    props: {
      data: data,
      content: content,
    },
  };
}

export default BlogPage;

// FIXME: Syntax highlighting is broken fix it some other day
