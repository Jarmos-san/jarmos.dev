import { Metadata } from "next";
import Link from "next/link";

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

const blogs = [
  {
    slug: "test-mdx",
    title: "This is a test MDX blog",
    summary: "Just a simple summary of the blog",
    publicationDate: "20-10-2023",
  },
  {
    slug: "test-mdx-simplified",
    title: "This is a test MDX blog simplified",
    summary: "Just a simple summary of the blog",
    publicationDate: "21-10-2023",
  },
  {
    slug: "another-test-mdx",
    title: "This is another test MDX blog",
    summary: "Just another simple summary of the blog",
    publicationDate: "22-10-2023",
  },
];

const BlogPostsPage = async () => {
  return (
    <div
      className="container mx-auto max-w-screen-sm px-5 lg:max-w-screen-md
      xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <h1 className="mb-6 text-3xl font-bold text-green-20">Blog Posts</h1>
      <section>
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="my-8 space-y-3 border-b border-gray-500 py-2"
          >
            <Link href={`blog/${blog.slug}`}>
              <h2
                className="text-bold text-2xl text-white-10 underline-offset-4
                hover:text-green-30 hover:underline"
              >
                {blog.title}
              </h2>
            </Link>
            <p className="text-white-30">{blog.summary}</p>
            <div className="text-gray-400">
              Published on {blog.publicationDate}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPostsPage;
