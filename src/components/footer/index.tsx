import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaKaggle, FaLinkedin, FaTwitter } from "react-icons/fa";

import { legalLinks, navLinks } from "@constants/navlinks";

import styles from "../footer/footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerSubsection}>
        <Image
          src="/assets/logo-og.svg"
          alt="website's logo"
          width={100}
          height={100}
        />

        <span className={styles.footerLinks}>
          {navLinks.map((navLink) => (
            <Link key={navLink.label} href={navLink.href}>
              {navLink.label}
            </Link>
          ))}
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
          {legalLinks.map((legalLink) => (
            <Link key={legalLink.label} href={legalLink.href}>
              {legalLink.label}
            </Link>
          ))}
        </small>

        <span className={styles.footerLinks}>
          {/* TODO: Refactor these links as well. */}
          <a
            href="https://twitter.com/Jarmosan"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter
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
            <FaLinkedin
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
            <FaGithub size={28} color="#83f9a2" title="Somraj Saha on GitHub" />
          </a>

          <a
            href="https://www.kaggle.com/jarmos"
            target="_blank"
            rel="noreferrer"
          >
            <FaKaggle size={28} color="#83f9a2" title="Somraj Saha on Kaggle" />
          </a>
        </span>
      </section>
    </footer>
  );
}

export default Footer;
