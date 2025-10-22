<template>
  <article>
    <h1>Blogs</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span class="date">{{
          new Date(post.publishedOn).toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        }}</span>
        <h2 class="title">{{ post.title }}</h2>
        <p class="description">{{ post.description }}</p>
        <NuxtLink :to="post.path" class="link">Read more ...</NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
const title = "Blogs";
const baseUrl = useRuntimeConfig().public.baseURL;
const image = "/icons/favicon.svg";
const description = `My insights on software development, ecommerce product building,
and economics. Blogs for business owners and tech-savvy entrepreneurs.`;

// Set the title of the page
useHead({
  title: title,
});

// Configure the SEO metadata for the page
useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: `${baseUrl}/blogs`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});

// Fetch the list of blog posts
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection("content")
    .select("id", "path", "title", "publishedOn", "description")
    .order("publishedOn", "DESC")
    .all();
});
</script>

<style lang="scss" scoped>
article {
  padding: 0 2rem;
  margin: 2rem auto;

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin: 2.5rem auto;

      .title,
      .description {
        color: #ecf8ff;
      }

      .date,
      .link {
        color: #7ab6d9;
      }

      .date,
      .description,
      .link {
        font-weight: 600;
        font-size: 0.8rem;
      }

      .title {
        font-weight: 700;
        font-size: 1.25rem;
      }

      .link {
        text-decoration: none;
      }
    }
  }

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  // Laptops
  @media screen and (min-width: 1024px) {
    padding: 0 7rem;
  }

  // 2K Desktops
  @media screen and (min-width: 1440px) {
    padding: 0 14rem;
  }
}
</style>
