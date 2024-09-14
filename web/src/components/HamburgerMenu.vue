<template>
  <button role="button" @click="toggleMenu()">
    <img src="/assets/menu.svg" alt="" height="50" />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
