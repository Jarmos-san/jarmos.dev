<template>
  <div class="overlay" @click.self="closeMenu">
    <div class="menu">
      <NuxtLink
        v-for="(link, index) in props.navLinks"
        :key="index"
        :to="link.href"
        @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>
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
</script>

<style lang="scss">
// The full-screen dark overlay
.overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
  transition: background 0.4s ease;

  // The actual menu content
  .menu {
    background-color: #1c2c35;
    width: 65%;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    a {
      color: #b0fbbc;
      text-decoration: none;
      padding: 0.75rem auto;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
