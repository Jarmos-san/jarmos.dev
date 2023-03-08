import Seo from "../../components/seo";
import { PORTFOLIO_DIR } from "../../constants";
import styles from "./portfolio.module.scss";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type ParamTypes = {
  params: {
    slug: string;
  };
};

type PropTypes = {
  frontmatter: {
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

function PortfolioPage({ frontmatter, content }: PropTypes) {
  return (
    <>
      <Seo
        title={frontmatter.title}
        href={`/portfolio/${frontmatter.slug}`}
        description={frontmatter.description}
        imageHref=""
        imageAlt=""
      />
      <article className={styles.container}>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ color: "#ffffff" }}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  // Read the contents of the portfolio directory.
  const files = fs.readdirSync(PORTFOLIO_DIR);

  // Prettify the URLs
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  // Return the prettiefied URLs & additionally return a 404 if no page exists
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: ParamTypes) {
  // Read the contents of the Markdown file into memory
  const filename = fs.readFileSync(`${PORTFOLIO_DIR}/${slug}.md`, "utf-8");

  // Parse the contents of the Markdown files
  const { data: frontmatter, content } = matter(filename);

  // Convert the Markdown AST to HTML
  const markdown = await remark().use(html).process(content);

  // Convert the HTML content to be passed as props data for the component
  const htmlContent = markdown.toString();

  return {
    props: {
      frontmatter: frontmatter,
      content: htmlContent,
    },
  };
}

export default PortfolioPage;