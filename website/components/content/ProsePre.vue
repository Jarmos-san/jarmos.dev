<template>
  <div class="code-wrapper">
    <!-- Add filename header -->
    <div v-if="props.filename" class="code-header">
      {{ props.filename }}
    </div>

    <!-- Call the original template -->
    <div class="code-body">
      <pre :class="props.class"><slot /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProsePreProps } from "~/types/components/ProsePre";

const props = defineProps<ProsePreProps>();
</script>

<style scoped lang="scss">
.code-wrapper {
  border: 1px solid #333;
  border-radius: 6px;
  overflow: hidden;
  background: #1c2c35;

  pre code .line {
    display: block;
  }

  .code-header {
    background: #2a2a2a;
    padding: 6px 10px;
    font-size: 0.8rem;
    font-family: monospace;
    color: #ccc;
    border-bottom: 1px solid #333;
  }

  .code-body {
    padding: 1rem 0.8rem;
  }
}
</style>
