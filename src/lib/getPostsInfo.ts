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

export default async function getPostsInfo() {
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
