import Link from "next/link";

import { AiOutlineDoubleRight } from "react-icons/ai";

import { featuredArticles } from "@constants/featured-articles";

function WritingsSection() {
  return (
    <section className="container mx-auto space-y-8 px-8 md:px-20 lg:px-36">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-white-10 md:text-2xl lg:text-3xl">
          Featured Writings
        </h2>
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-300 underline
          underline-offset-2"
        >
          All Writings
          <AiOutlineDoubleRight />
        </Link>
      </div>
      <>
        {featuredArticles.map((article) => (
          <div
            key={article.title}
            className="my-8 border-b border-gray-500 py-2"
          >
            <Link
              href={article.href}
              className="hover:underline-offset-3 text-lg font-semibold text-green-30
              hover:underline"
            >
              {article.title}
            </Link>
            <p className="my-2 text-gray-200">{article.summary}</p>
            <em className="text-gray-400">
              Published on{" "}
              {article.publishedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </em>
          </div>
        ))}
      </>
    </section>
  );
}

export default WritingsSection;
