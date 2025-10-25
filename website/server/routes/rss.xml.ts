/**
 * Server route to generate the site's RSS feed.
 *
 * This handler dynamically queries all the document, ordered by publication
 * date from the "contents" source (managed by the `@nuxt/content` module).
 * After a successful document query, the data is serialised in to an RSS 2.0
 * feed.
 */

import RSS from "rss";

export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().public.baseURL;

  // Fetch all the posts from the Nuxt Content "collection" based on specified
  // metadata and order them in descending order of their publication date.
  const posts = await queryCollection(event, "content")
    .select("id", "path", "title", "publishedOn", "description")
    .order("publishedOn", "DESC")
    .all();

  // Create a the `RSS` instance to generate the RSS feed with.
  const feed = new RSS({
    title: "jarmos.dev",
    description:
      "I'm Jarmos - CTO at Weburz, Senior Engineer by title, " +
      "open-source hacker by heart. I design systems, mentor devs and " +
      "occasionally tame misbehaving servers.",
    generator: `Node.js v${process.version}`,
    feed_url: `${baseURL}/rss.xml`,
    site_url: baseURL,
    image_url: `${baseURL}/icons/logo.svg`,
    managingEditor: "Somraj Saha <contact@jarmos.dev>",
    webMaster: "Somraj Saha <contact@jarmos.dev>",
    copyright: "Licensed under CC BY-NC 4.0",
    language: "en",
    categories: [
      "computer science",
      "programming",
      "technical writing",
      "economics",
    ],
    pubDate: new Date("2018-01-01"),
    ttl: 1440,
  });

  // Add the items to the RSS feed along with all the necessary metadata of each
  // blog post.
  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${baseURL}${post.path}`,
      guid: post.id,
      date: post.publishedOn,
      categories: post.categories,
    });
  }

  // Set the response header and return the data as an appropriate XML data
  // response.
  event.node.res.setHeader("Content-Type", "application/xml");

  return feed.xml({ indent: true });
});
