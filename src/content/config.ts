import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    coverImage: z.object({
      url: z.string(),
      alt: z.string()
    })
  }),
});

export const collections = {
  blog: blogCollection,
};
