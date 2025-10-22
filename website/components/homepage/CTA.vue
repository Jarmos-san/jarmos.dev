<template>
  <section>
    <h2>What're you working on?</h2>
    <p class="text">
      Let's have a conversation! I'd love to hear about what you're working on
      and find a way to work together.
    </p>
    <NuxtLink to="/contact-me" class="chat">
      <img
        src="/icons/chat.svg"
        alt="Chat with Jarmos"
        width="24"
        height="24"
      >
      <span>Chat</span>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #1c2c35;
  text-align: center;
  padding: 2rem;
  color: #ecf8ff;
  margin: 3rem auto;
  width: 100%;

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }

  // Laptops
  @media screen and (min-width: 1024px) {
    padding: 4rem 7rem;
  }

  // 2K Desktops
  @media screen and (min-width: 1440px) {
    padding: 3rem 14rem;
  }

  .text {
    margin: 1.5rem auto;
  }

  .chat {
    display: inline-flex;
    gap: 0.5625rem;
    align-items: center;
    background-color: #83f9a2;
    color: #111a20;
    padding: 0.375rem 1.25rem;
    border-radius: 0.375rem;
    font-weight: bold;
    font-style: 1.125rem;
    text-decoration: none;
  }
}
</style>
