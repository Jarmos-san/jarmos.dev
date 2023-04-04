import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col space-y-4 bg-blue-10 px-10 py-12">
      <h1 className="text-3xl font-semibold text-green-10">
        This is Somraj, an ML Engineer & Technical Writer
      </h1>

      <p className="text-white-10">
        I work as a Machine Learning Consultant specialising in building,
        designing & integrating ML practices into custom software products,
        end-to-end.
      </p>

      <p className="text-white-10">
        Want to learn more about me? Then head over to the &ldquo;
        <Link
          href="/about"
          className="text-green-30 underline underline-offset-2
              hover:text-white-20"
        >
          About Me
        </Link>
        &rdquo; page or check out my{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-green-30 underline underline-offset-2
              hover:text-white-20"
        >
          resume
        </a>{" "}
        for more information.
      </p>
    </header>
  );
}

export default Header;
