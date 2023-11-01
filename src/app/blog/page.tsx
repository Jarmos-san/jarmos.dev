import { Metadata } from "next";
import Link from "next/link";

import getPostsInfo from "lib/getPostsInfo";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: `Blog posts Somraj Saha has written and publised on topics like
    programming and software development in general.`,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Posts | Somraj Saha",
    description: `Blog posts Somraj Saha has written and publised on topics like
      programming and software development in general.`,
    url: "https://jarmos.dev/blog",
    siteName: "Somraj Saha",
    images: [
      {
        url: "https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg",
        alt: "The logo of the personal website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | Somraj Saha",
    description: `Blog posts Somraj Saha has written and publised on topics like
      programming and software development in general.`,
    creator: "@Jarmosan",
    images: ["https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"],
  },
  appleWebApp: {
    title: "Blog Posts | Somraj Saha",
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

export default BlogPostsPage;
