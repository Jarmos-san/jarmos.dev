import type { APIContext } from "astro";
import { getCollection } from "astro:content";

import rss from "@astrojs/rss";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  return rss({
    title: "Somraj Saha’s Blog",
    description:
      "Somraj Saha's digital garden where he shares his knowledge, experience and learnings as a self-taught programmer.",
    site: context.site as URL,
    stylesheet: "/rss/styles.xsl",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
