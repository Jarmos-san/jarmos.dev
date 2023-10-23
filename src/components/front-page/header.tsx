import Link from "next/link";

function Header() {
  return (
    <header
      className="container mx-auto max-w-screen-sm space-y-5 px-5
      lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <h1
        className="bg-gradient-to-r from-green-30 to-green-10 bg-clip-text
        text-2xl font-bold leading-10 text-green-10 text-transparent md:text-3xl
        lg:text-5xl"
      >
        I&apos;m Somraj, an Independent Software Engineer.
      </h1>

      <p className="text-white-10 lg:pr-32">
        I work as an Independent Software Engineer consulting for startups &amp;
        business owners to build custom end-to-end software. Whether your needs
        are for an in-house team or a B2B/B2C setting, I&apos;ll take care of it
        without worries!
      </p>

      <p className="text-white-10 lg:pr-60">
        That said, would you like to learn more about me? Then head over to the
        &ldquo;
        <Link
          href="/about"
          className="text-green-30 underline underline-offset-2
              hover:text-white-20"
        >
          About Me
        </Link>
        &rdquo; page or check out my &ldquo;
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-green-30 underline underline-offset-2
              hover:text-white-20"
        >
          Resume
        </a>
        &rdquo; for more information.
      </p>
    </header>
  );
}

export default Header;
