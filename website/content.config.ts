import {
  defineCollection,
  defineContentConfig,
  z,
  type CollectionSource,
  type CollectionType,
} from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

// The URL of the repository, the directory and the GitHub access token to fetch
// the blogposts from
const REPOSITORY = "https://github.com/Jarmos-san/blogposts";
const DIR = "blogs/**.md";
const TOKEN = process.env.GITHUB_TOKEN;

// The publication date of the blog post
const publishedOn = z.date();

// The URL path (or slug) of the blog post
const path = z.string();

// The title of the blog post (also used for SEO purposes)
const title = z.string();

// The description of the blog post (also used for SEO purposes)
const description = z.string();

// The content of the blog post
const body = z.object({
  type: z.string(),
  children: z.any(),
  toc: z.any(),
});

// The internal navigation of the blog post (used to render the sidebar)
const navigation = z
  .union([
    z.boolean(),
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ])
  .default(true);

// The SEO metadata of a blog post
const seo = z
  .intersection(
    z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      meta: z.array(z.record(z.string(), z.any())).optional(),
      link: z.array(z.record(z.string(), z.any())).optional(),
    }),
    z.record(z.string(), z.any()),
  )
  .optional()
  .default({});

// The details of the cover image to render for a blog post
const coverImage = z.object({
  url: z.string(),
  alt: z.string().optional(),
});

// The fields and schema defined for each individual blog post
const schema = z.object({
  title,
  description,
  path,
  publishedOn,
  body,
  navigation,
  seo,
  coverImage,
});

// The configuration of the source to fetch the articles from
const source: CollectionSource | undefined =
  process.env.NODE_ENV === "test"
    ? undefined
    : {
        repository: REPOSITORY,
        include: DIR,
        authToken: TOKEN,
      };

// The type of the collection.
const type: CollectionType = "page";

// The "content" (basically the blogposts) collection and its configurations
const content = defineCollection(
  asSitemapCollection({
    type,
    source,
    schema,
  }),
);

// Define the collection of the blog post content
const collections = { content };

// Export the configurations
export default defineContentConfig({ collections });
