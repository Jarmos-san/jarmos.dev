<template>
  <h3 :id="props.id">
    <a v-if="props.id && generate" :href="`#${props.id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import type { ProseH3Props } from "~/types/components/ProseH3";

const props = defineProps<ProseH3Props>();

const { headings } = useRuntimeConfig().public.mdc;

const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h3)),
);
</script>

<style scoped lang="scss">
h3 {
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 2.5rem;

  a {
    color: #ecf8ff;
    text-decoration: none;
  }
}
</style>
