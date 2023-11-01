import getPostsInfo from "lib/getPostsInfo";

export default async function sitemap() {
  const baseUrl = "https://jarmos.dev";

  const posts = await getPostsInfo();

  const postUrls =
    posts.map((post) => {
      return {
        url: `${baseUrl}/blog/${post.slug}`,
      };
    }) ?? [];

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...postUrls,
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/distribution-rights`,
      lastModified: new Date(),
    },
  ];
}
