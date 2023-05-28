import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

import Seo from "@components/seo";

type FrontmatterData = {
  title: string;
  slug: string;
  date: string;
  description: string;
  coverImage: {
    url: string;
    alt: string;
  };
  summary: string;
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
        image="https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"
        imageAlt="The logo of the personal website"
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
              <h2
                className="text-lg font-semibold text-green-30 hover:underline
                hover:underline-offset-2"
              >
                {data.title}
              </h2>
              <p className="my-2 text-white-20">{data.summary}</p>
              <em className="text-gray-400">Published on {data.date}</em>
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
  const frontmatter = mdFiles.map((file) => {
    const { data } = matter.read(`${blogDir}/${file}`);
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return { ...data, date: formattedDate };
  });

  // Sort the list of frontmatter data with the latest dates closer towards the
  // beginning of the array's index.
  frontmatter.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      frontmatter: frontmatter,
    },
  };
};

export default BlogPostsPage;
