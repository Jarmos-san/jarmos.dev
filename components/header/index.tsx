import styles from "./header.module.scss";

function HeaderSection() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.heading}>
        This is Somraj, a Software Engineer &amp; Technical Writer.
      </h1>

      <p className={styles.subheading}>
        I work as a Senior Software Engineer at{" "}
        <a
          href="https://www.augwir.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Augwir Technologies
        </a>{" "}
        where we are building the next-generation of some awesome Augmented
        Reality (AR) products! You can find out more about me, my work,
        knowledge & experience on this website. So, feel free to check it out as
        per your convenience.
      </p>
    </header>
  );
}

export default HeaderSection;
