<template>
  <NuxtLink :href="props.href" :target="props.target ?? undefined">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ProseAProps } from "~/types/components/ProseA";

const props = defineProps<ProseAProps>();
</script>

<style lang="scss" scoped>
a {
  text-underline-offset: 0.18rem;
}
</style>
