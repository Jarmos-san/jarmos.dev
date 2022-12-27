import Link from "next/link";

import styles from "./footer.module.scss";
import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <small>&copy; Somraj Saha 2018-{new Date().getFullYear()}</small>

      <small>
        Website designed by{" "}
        <a
          href="https://www.warner.codes"
          target="_blank"
          rel="nooopener noreferrer"
        >
          Ryan Warner
        </a>{" "}
        &amp; is made{" "}
        <a
          href="https://github.com/Jarmos-san/personal-website"
          target="_blank"
          rel="nooopener noreferrer"
        >
          open-source
        </a>{" "}
        with ❤️
      </small>

      <small>
        <Link href="/privacy-policy">Privacy Policy</Link> &middot;{" "}
        <Link href="/terms-and-conditions">Terms & Conditions</Link> &middot;{" "}
        <Link href="/license">License & Distribution Rights</Link>
      </small>

      <div className={styles.socialIcons}>
        <a
          href="https://github.com/Jarmos-san"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <BsGithub color="#a5a6b0" size={25} title="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/jarmos"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <BsLinkedin color="#a5a6b0" size={25} title="linkedin" />
        </a>

        <a
          href="https://twitter.com/Jarmosan"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <BsTwitter color="#a5a6b0" size={25} title="twitter" />
        </a>

        <a
          href="mailto:somraj.mle@gmail.com"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <AiFillMail color="#a5a6b0" size={25} title="email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
