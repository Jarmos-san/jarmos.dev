<template>
  <div v-if="props.show" class="modal-mask">
    <div class="modal-container">
      <div class="container-header">
        <h2>Navigation Menu</h2>
        <button type="button" @click="emit('close')">
          <img src="/assets/close-menu.svg" alt="" height="25" />
        </button>
      </div>
      <div class="nav-links">
        <a v-for="link in navLinks" :href="link.url" :key="link.name">
          {{ link.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NavLink {
  name: string;
  url: string;
}

const props = defineProps<{
  show: Boolean;
}>();

const emit = defineEmits(["close"]);

const navLinks: NavLink[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
];
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
    background-color: #243b4a;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba($color: #82f9a1, $alpha: 0.33);
    transition: all 0.3s ease;
    border: solid 5px #82f9a1;

    .container-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      h2 {
        color: #82f9a1;
      }

      button {
        cursor: pointer;
      }
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        text-decoration: none;
        color: #c9e2f0;

        &:hover {
          color: #82f9a1;
          text-decoration: underline;
          text-underline-offset: 5px;
        }
      }
    }
  }
}
</style>
