import Image from "next/image";
import Link from "next/link";

import styles from "../footer/footer.module.scss";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerSubsection}>
        <Image
          src="./assets/logo-og.svg"
          alt="website's logo"
          width={100}
          height={100}
        />

        <span className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
        </span>
      </section>

      <hr />

      <section className={styles.footerSubsection}>
        <small>
          Website Designed by{" "}
          <a href="https://www.warner.codes" target="_blank" rel="noreferrer">
            Ryan Warner
          </a>{" "}
          | Developed &{" "}
          <a
            href="https://github.com/Jarmos-san/jarmos.dev"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced{" "}
          </a>
          by Somraj Saha &copy; 2018-
          {new Date().getFullYear()}
        </small>

        <small className={styles.footerLinks}>
          <Link href="/terms-and-conditions">Terms of Usage</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/license">Licensing & Distribution Rights</Link>
        </small>

        <span className={styles.footerLinks}>
          <a
            href="https://twitter.com/Jarmosan"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter
              size={28}
              color="#83f9a2"
              title="Somraj Saha on Twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jarmos"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin
              size={28}
              color="#83f9a2"
              title="Somraj Saha on LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Jarmos-san"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={28} color="#83f9a2" title="Somraj Saha on GitHub" />
          </a>
        </span>
      </section>
    </footer>
  );
}

export default Footer;
