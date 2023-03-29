import Link from "next/link";

import styles from "./header.module.scss";

function HeaderSection() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.heading}>
        This is Somraj, an ML Engineer &amp; Technical Writer.
      </h1>

      <p className={styles.subheading}>
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
