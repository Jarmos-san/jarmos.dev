import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import Seo from "@components/seo";
import { blogDir } from "@constants/navlinks";

type PropTypes = {
  data: {
    title: string;
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
        <div dangerouslySetInnerHTML={{ __html: content }} />
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
  const markdown = await remark().use(html).process(content);
  const htmlContent = markdown.toString();

  return {
    props: {
      data: data,
      content: htmlContent,
    },
  };
}

export default BlogPage;
