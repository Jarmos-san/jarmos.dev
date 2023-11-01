import type { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: StaticParamsType): Promise<Metadata> {
  const blogDir = path.join(process.cwd(), "_blog");
  const content = matter.read(`${blogDir}/${params?.slug}.md`).data;
  console.log(content.title);
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${content.slug}`,
    },
    openGraph: {
      title: `${content.title} | Somraj Saha`,
      description: content.description,
      url: `https://jarmos.dev/${content.slug}`,
      siteName: "Somraj Saha",
      images: [
        {
          url: content.coverImage.url,
          alt: content.coverImage.alt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.title} | Somraj Saha`,
      description: content.description,
      creator: "@Jarmosan",
      images: [content.coverImage.url],
    },
    appleWebApp: {
      title: `${content.title} | Somraj Saha`,
      statusBarStyle: "black-translucent",
      startupImage: [
        "/apple-touch-icon.png",
        {
          url: "/apple-touch-icon.png",
          media: "(device-width: 768px) and (device-height: 1024px)",
        },
      ],
    },
  };
}

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

export default BlogPage;

// FIXME: Syntax highlighting is broken fix it some other day
