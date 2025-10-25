<template>
  <div class="overlay" @click.self="closeMenu">
    <div class="header">
      <img src="/icons/logo.svg" alt="" />
      <img src="/icons/cross.svg" alt="" />
    </div>

    <div class="menu">
      <NuxtLink
        v-for="(link, index) in props.navLinks"
        :key="index"
        :to="link.href"
      >
        {{ link.label }}
      </NuxtLink>
    </div>

    <div class="socials">
      <a
        v-for="(item, index) in socials"
        :key="index"
        href="https://example.com"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MobileMenuProps } from "~/types/components/MobileMenu";

// Define the props for the component
const props = defineProps<MobileMenuProps>();

// Emit close event to parent
const emit = defineEmits<{ (e: "closeMenu"): void }>();
const closeMenu = () => emit("closeMenu");

// Array of social links
const socials = ["Twitter", "Instagram", "GitHub"];
</script>

<style lang="scss">
.overlay,
.header,
.menu,
.socials {
  display: flex;
}

.overlay,
.menu {
  flex-direction: column;
}

.overlay,
.header,
.socials {
  justify-content: space-between;
}

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: background 0.4s ease;
  padding: 2rem;
  background-color: #111a21;

  img {
    width: 3rem;
    height: 3rem;
  }

  .header {
    width: 100%;
  }

  .menu {
    text-align: center;
    gap: 2rem;
  }
}
</style>
