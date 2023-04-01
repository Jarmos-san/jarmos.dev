import Link from "next/link";

function HeaderSection() {
  return (
    <header>
      <h1>This is Somraj, an ML Engineer &amp; Technical Writer.</h1>

      <p>
        I work as an Machine Learning Consultant specialising in building,
        designing & integrating ML techniques into custom software products
        end-to-end. Want to learn more about me & my work? Then head over to the{" "}
        <Link href="/about">About Me</Link> page or check out my{" "}
        <a href="./resume.pdf" target="_blank">
          resume
        </a>
        .
      </p>
    </header>
  );
}

export default HeaderSection;
