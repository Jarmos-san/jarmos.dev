<template>
  <main>
    <CommonNavBar :nav-links="navLinks" :social-links="socialLinks" />
    <NuxtPage />
    <CommonFooter
      :nav-links="navLinks"
      :legal-docs="legalDocs"
      :logo="footerLogo"
    >
      <span>
        Built with Open-Source ❤️ | &copy; 2018-{{ new Date().getFullYear() }}
      </span>
    </CommonFooter>
  </main>
</template>

<script lang="ts" setup>
import type { LegalDoc, NavLink } from "~/types//models/links";
import type { SocialLink } from "./types/components/MobileMenu";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (title) => {
    return title ? `${title} | jarmos.dev` : "jarmos.dev";
  },
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/icons/favicon.svg",
    },
  ],
});

// The navlinks on the footer
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-me" },
  { label: "Blogs", href: "/blogs" },
  { label: "Projects", href: "/projects" },
];

// The links to the legal documents on the footer
const legalDocs: LegalDoc[] = [
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Distribution Rights", href: "/distribution-rights" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// The logo to render on the footer
const footerLogo = "/icons/logo.svg";

// The social media links
const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://x.com/jarmosan",
    icon: "/icons/x.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Jarmos-san",
    icon: "/icons/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jarmos.san",
    icon: "/icons/instagram.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jarmos",
    icon: "icons/linkedin.svg",
  },
  {
    name: "RSS",
    href: "/rss.xml",
    icon: "/icons/rss.svg",
  },
];
</script>

<style lang="scss">
@use "~/assets/styles/main.scss";
</style>
