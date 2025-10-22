<template>
  <h2 :id="props.id">
    <a v-if="props.id && generate" :href="`#${props.id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import type { ProseH2Props } from "~/types/components/ProseH2";

const props = defineProps<ProseH2Props>();

const { headings } = useRuntimeConfig().public.mdc;

const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h2)),
);
</script>

<style scoped lang="scss">
h2 {
  font-weight: bold;
  font-size: 1.625rem;
  margin-top: 4rem;

  a {
    color: #ecf8ff;
    text-decoration: none;
  }
}
</style>
