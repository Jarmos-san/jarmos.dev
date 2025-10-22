<template>
  <article>
    <template v-if="post">
      <h1>{{ post?.title }}</h1>
      <p>{{ post?.description }}</p>
      <div>Published on: {{ publishedOn }}</div>
      <img :src="post?.coverImage.url" alt="" >
      <ContentRenderer v-if="post" :value="post" />
    </template>
    <template v-else>
      <div>Post not found</div>
    </template>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first(),
);

// Set the metadata of the page (mostly for SEO reasons)
const title = post.value?.title;
const baseURL = useRuntimeConfig().public.baseURL;
const description = post.value?.description;
const image = post.value?.coverImage.url;
const url = `${baseURL}/${route.path}`;

// Set the dynamic title for the page
useHead({
  title: title ?? "Not Found",
});

// Set the SEO metadata for the blogpost
useSeoMeta({
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary_large_image",
  description: description,
});

// Compute and cache the publication date
const publishedOn = computed(() =>
  post.value?.publishedOn
    ? new Date(post.value.publishedOn).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "",
);
</script>

<style lang="scss" scoped>
article {
  padding: 0 2rem;
  margin: 2rem auto;

  h1 {
    font-weight: 700;
    font-size: 2rem;
  }

  p,
  div {
    font-weight: 100;
    font-size: 0.8rem;
    color: #c9e2f0;
  }

  div {
    margin-bottom: 2rem;
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
