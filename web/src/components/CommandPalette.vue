<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <h2>Navigation Menu</h2>
      <div>Close Button</div>
      <div>Home</div>
      <div>About</div>
      <div>Blog</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: Boolean;
}>();
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .modal-container {
    width: 500px;
    margin: auto;
    padding: 20px 30px;
    background-color: #5e8ca7;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
}
</style>
