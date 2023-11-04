import getPosts from "@lib/get-posts";

const sitemap = async () => {
  const baseUrl = "https://jarmos.dev";

  const posts = await getPosts();

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
};

export default sitemap;
