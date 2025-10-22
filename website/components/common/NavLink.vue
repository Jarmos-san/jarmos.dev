<template>
  <NuxtLink :to="props.href" class="link">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { NavLinkProps } from "~/types/components/NavLink";

// Define the props to pass to the component
const props = defineProps<NavLinkProps>();
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  text-decoration: none;
  padding-bottom: 0.25rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
