<template>
  <header>
    <h1>
      I'm Jarmos - a Senior Engineer by title, Open-Source hacker by heart.
    </h1>

    <p>
      I'm <strong>Somraj Saha</strong> (aka Jarmos), currently serving as the
      <strong>Chief Technology Officer (CTO)</strong> at
      <a href="https://weburz.com" target="_blank">Weburz</a>. My day job
      involves architecting systems, mentoring developers and occassionally
      convincing servers to not misbehave.
    </p>

    <p>
      Outside of work you'll often find me tinkering with and contributing to
      <strong>Open-Source Software</strong> - because who doesn't like giving
      back to the very ecosystem that makes our job both fun and frustrating? 😅
    </p>

    <p>
      If you're curious, head over to my
      <NuxtLink to="/about-me">About Me</NuxtLink> page to dig deeper into my
      story.
    </p>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 0 2rem;
  margin-top: 2rem;

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  // Laptops
  @media screen and (min-width: 1024px) {
    padding: 0 7rem;
  }

  // 2K Desktops
  @media screen and (min-width: 1440px) {
    padding: 0 14rem;
  }

  h1 {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 130%;
    letter-spacing: 0%;
    background: linear-gradient(90deg, #b0fbbc, #82f9a1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 1rem rgba($color: #bcfbc3, $alpha: 0.3);
  }

  p {
    font-weight: normal;
    line-height: 180%;
    color: #ecf8ff;
    margin: 0.65rem auto;
  }
}
</style>
