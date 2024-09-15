<template>
  <button role="button" @click="toggleMenu()">
    <img src="/assets/menu.svg" alt="" height="50" />
  </button>
  <Teleport to="body">
    <NavMenu :show="isMenuOpen" @close="toggleMenu" />
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

import NavMenu from "./NavMenu.vue";

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
}
</style>
