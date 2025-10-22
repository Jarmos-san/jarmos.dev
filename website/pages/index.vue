<template>
  <article>
    <HomepageHeader />
    <HomepageProjects>
      <CommonProjectCard
        v-for="(project, index) in projects.splice(0, 4)"
        :key="index"
        :name="project.name"
        :desc="project.desc"
        :href="project.href"
        :is-experimental="project.isExperimental"
      />
    </HomepageProjects>
    <HomepageCTA />
  </article>
</template>

<script setup lang="ts">
import type { Project } from "~/types/models/project";

const title = "Home";
const description = `I'm Jarmos - CTO at Weburz, Senior Engineer by title, open-source
hacker by heart. I design systems, mentor devs, and occasionally tame misbehaving
servers.`;
const image = "/icons/favicon.svg";
const baseURL = useRuntimeConfig().public.baseURL;

// Set the title of the page
useHead({
  title: title,
});

// Set the SEO metadata for the page
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: baseURL,
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
