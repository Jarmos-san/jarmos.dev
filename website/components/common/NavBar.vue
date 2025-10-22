<template>
  <nav>
    <!-- Website logo -->
    <div class="logo">
      <img src="/icons/logo.svg" alt="logo" width="50" height="50" >
      <span v-if="!isMobile">jarmos.dev</span>
    </div>

    <!-- Hamburger menu icon (displayed ONLY on mobile viewports) -->
    <div v-if="isMobile" @click="toggle()">
      <img src="/icons/menu.svg" alt="menu" width="40" height="40" >
    </div>

    <!-- Navigation links (displayed ONLY on large screens) -->
    <div v-else class="nav-links">
      <ul>
        <li v-for="(link, index) in props.navLinks" :key="index">
          <CommonNavLink :href="link.href">
            {{ link.label }}
          </CommonNavLink>
        </li>
      </ul>
    </div>
  </nav>

  <Teleport to="body">
    <CommonMobileMenu
      v-if="isOpen"
      :nav-links="props.navLinks"
      @close-menu="toggle()"
    />
  </Teleport>
</template>

<script lang="ts" setup>
import type { NavBarProps } from "~/types/components/NavBar";

// Define the props to pass to the component
const props = defineProps<NavBarProps>();

// Check whether the viewport is mobile
const { isMobile } = useIsMobile();

// Fetch the toggle state and the toggle function to switch the button close/open
const { state: isOpen, toggle } = useToggle();
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  background-color: #111a20;

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 1.5rem 4rem;
  }

  // Laptops
  @media screen and (min-width: 1024px) {
    padding: 1.5rem 7rem;
  }

  // 2K laptops
  @media screen and (min-width: 1440px) {
    padding: 1.5rem 14rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .nav-links {
    ul {
      display: flex;
      gap: 1.5rem;
      list-style-type: none;
    }
  }
}
</style>
