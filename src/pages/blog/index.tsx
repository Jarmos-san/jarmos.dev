import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

import Seo from "@components/seo";

type FrontmatterData = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  coverImage: {
    url: string;
    alt: string;
  };
};

function BlogPostsPage({
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        title="Blog Posts"
        desc="Blog posts Somraj Saha has written and publised on topics like
          programming and software development in general."
        image=""
        imageAlt=""
        url="/blog"
      />
      <div
        className="container mx-auto max-w-none px-10 md:px-12 lg:px-36
        xl:px-56 2xl:px-96"
      >
        <h1 className="mb-6 text-3xl font-bold text-white-10">Blog Posts</h1>
        {frontmatter.map((data: FrontmatterData) => (
          <div key={data.slug} className="my-8 border-b border-gray-500 py-2">
            <Link href={`blog/${data.slug}`}>
              <h2 className="text-lg font-semibold text-green-30">
                {data.title}
              </h2>
              <p className="text-gray-200">{data.description}</p>
              <em className="text-gray-400">Published on</em>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Get the local directory containing the Markdown files of the blog posts
  const blogDir = path.join(process.cwd(), "_blog");

  // Get the list of Markdown files from the blog directory
  const mdFiles = readdirSync(blogDir, "utf8");

  // Get the list of frontmatter data
  const frontmatter = mdFiles.map(
    (file) => matter.read(`${blogDir}/${file}`).data
  );

  return {
    props: {
      frontmatter: frontmatter,
    },
  };
};

export default BlogPostsPage;
