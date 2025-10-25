<template>
  <section>
    <h2>Featured Projects</h2>
    <div class="grid">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0 2rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    // Laptops and above
  }

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  // Laptops
  @media screen and (min-width: 1024px) {
    padding: 0 7rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  // 2K Desktops
  @media screen and (min-width: 1440px) {
    padding: 0 14rem;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
}
</style>
