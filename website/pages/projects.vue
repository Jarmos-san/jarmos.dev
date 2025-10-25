<template>
  <article>
    <h1>Projects</h1>
    <p>
      Here you'll find a collection of projects I've built over the years-most
      of them open-source and free for anyone to explore. If something sparks
      your curiosity or solves a little problem of yours, feel free to give it a
      spin. Who knows, it might just become your new favorite tool!
    </p>
    <div class="grid">
      <CommonProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :name="project.name"
        :desc="project.desc"
        :href="project.href"
        :is-experimental="project.isExperimental"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Project } from "~/types/models/project";

const title = "Projects";
const description = `Explore my personal projects in software development, ecommerce
tools, and experiments at the intersection of technology and economics.`;
const baseURL = useRuntimeConfig().public.baseURL;
const image = "/icons/favicon.svg";

// Set the title of the page.
useHead({
  title: title,
});

// Set the SEO metadata of the page.
useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: `${baseURL}/projects`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});

// FIXME: Refactor and move the array to a different module for better legibility and
// maintenance. There are rendering issues when the array is being auto imported from
// the "utils" directory.
// List of all projects
const projects: Project[] = [
  {
    name: "jarmos.dev",
    desc: `An open-source website built with Nuxt.js which doubles as my digital
    garden. It is part portfolio, part blog and part "look-what-I-just-built",
    it's always evolving as I tinker with new ideas.`,
    href: "https://github.com/Jarmos-san/jarmos.dev",
  },

  {
    name: "Crisp",
    desc: `A Go-powered commit message police which makes sure you speak the
    language of Conventional Commits--clear, structured & changelog-friendly.`,
    href: "https://github.com/Weburz/crisp",
  },

  {
    name: "BurzPage",
    desc: `A lightweight blogging CMS we use at Weburz to keep content
    flowing. It is simple, open & built to grow with us.`,
    href: "https://github.com/Weburz/burzpage",
    isExperimental: true,
  },

  {
    name: "Terox",
    desc: `A Go-based project template generator that saves us from copy-pasting
    the same boilerplate. Terox makes spinning up new projects fast &
    consistent.`,
    href: "https://github.com/Weburz/terox",
    isExperimental: true,
  },
];
</script>

<style lang="scss" scoped>
article {
  padding: 0 2rem;
  margin: 2rem auto;

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  // Laptops
  @media screen and (min-width: 1024px) {
    padding: 0 7rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  // 2K Desktops
  @media screen and (min-width: 1440px) {
    padding: 0 14rem;
  }
}
</style>
