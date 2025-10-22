<template>
  <article>
    <h1>Licensing & Distribution Rights</h1>
    <p>
      The entirety of the project you're viewing and using is made available for
      public use under an open-source license. The contents, the source code of
      the website, the analytics (WIP) are all publicly accessible and available
      for public scrutiny.
    </p>
    <p>
      In other words, you're free to view, use, modify everything and anything
      related to this project for your personal benefits as long as you adhere
      to the terms and conditions of the open-source licenses. Hence this page
      details the brief terms and conditions you'll have to be aware of
      before/while consuming the contents of the project.
    </p>
    <h2>Usage & Distribution Rights of Source Code</h2>
    <p>
      The source code of the website which is accessble on this public
      <a href="https://github.com/Jarmos-san/jarmos.dev" target="_blank"
        >GitHub repository</a
      >
      is licensed under the MIT license. You can read more about the license in
      its
      <a
        href="https://github.com/Jarmos-san/jarmos.dev/blob/main/LICENSE"
        target="_blank"
        ><code>LICENSE</code></a
      >
      document.
    </p>
    <p>In brief the licensing terms and conditions states;</p>
    <ol>
      <li>
        You can fork the repository, modify its contents for your personal
        requirements be it commercial or non-commercial.
      </li>
      <li>
        Take inspiration from the source code to build your own personal website
        after customising the source code of the website.
      </li>
      <li>Contribute, report and/or fix bugs you found in the project.</li>
      <li>
        Use the source code for commercial purposes by providing due credits to
        the stakeholders.
      </li>
    </ol>
    <h2>Usage and Distribution Rights of the Literature</h2>
    <p>
      The website contains some write-ups (or "blogs") which I personally
      publish of my own accord. Hence as is with everything I work on, the blogs
      in question are made available in the public domain licensed under the
      <a href="https://creativecommons.org/licenses/by/4.0" target="_blank"
        >CC-BY-4.0</a
      >
      license as well. And as per the terms and conditions of the said license,
      you're entitled to;
    </p>
    <ol>
      <li>To use and read the contents of the blogs free of cost.</li>
      <li>
        Distribute or use the contents as a source of reference for your
        commercial or non-commercial needs.
      </li>
      <li>
        Modify the contents, rephrase or fix the contents based on correct
        interpretations and facts if you find any.
      </li>
    </ol>
  </article>
</template>

<script lang="ts" setup>
const title = "Licensing & Distribution Rights";
const description = `Learn about licensing and distribution rights for jarmos.dev. Source
code under MIT license, blogs under CC-BY-4.0, free to use, modify, and share.`;
const baseURL = useRuntimeConfig().public.baseURL;
const image = "/icons/favicon.svg";

// Set the title of the page
useHead({
  title: title,
});

// Set the SEO metadata for the page.
useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: `${baseURL}/distribution-rights`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});
</script>

<style lang="scss" scoped>
article {
  padding: 0 2rem;
  margin: 2rem auto;

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
