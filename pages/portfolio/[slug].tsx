import fs from "fs";
import matter from "gray-matter";
import path from "path";

type ParamsType = {
  params: {
    slug: string;
  };
};

function PortfolioProject({ data, content }) {
  <h1>{data.title}</h1>;
}

export async function getStaticPaths() {
  // List the Markdown files located in the "_portfolio" directory
  const markdownFiles = fs.readdirSync(path.join(process.cwd(), "_portfolio"));

  // Preprocess the Markdown filename to be used as proper URLs
  const paths = markdownFiles.map((filename) => ({
    params: {
      slug: filename.replace(/.md$/, ""),
    },
  }));

  // Return the list of URL paths & a 404 page if none exists
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }: ParamsType) {
  const filename = path.join(
    path.join(process.cwd(), "_portfolio", `${params.slug}.md`)
  );

  const fileContents = fs.readFileSync(filename, "utf8");
  const { data, content } = matter(fileContents);

  console.log(data);

  return {
    props: {
      data: data,
      content: content,
    },
  };
}

export default PortfolioProject;
