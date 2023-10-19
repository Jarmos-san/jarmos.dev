import Link from "next/link";

import { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

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

async function BlogPostsPage() {
  const blogs = await getPostsInfo();

  return (
    <>
      <div
        className="container mx-auto max-w-screen-sm px-5 lg:max-w-screen-md
          xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <h1 className="mb-6 text-3xl font-bold text-white-10">Blog Posts</h1>
        {blogs.map((data) => (
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

async function getPostsInfo() {
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

  return frontmatter as FrontmatterData[];
}

export default BlogPostsPage;
