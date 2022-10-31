import styles from "./footer.module.scss";
import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
    return (
        <footer className={styles.footer}>
            <small>
                &copy; Somraj Saha 2018-
                {new Date().getFullYear()}
            </small>

            <small>
                Website designed by{" "}
                <a href="https://www.warner.codes" target="_blank" rel="noreferrer">
                    Ryan Warner
                </a>{" "}
                &amp; is made{" "}
                <a
                    href="https://github.com/Jarmos-san/personal-website"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    open-source
                </a>{" "}
                with ❤️
            </small>

            <div className={styles.socials}>
                <a
                    href="https://github.com/Jarmos-san"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsGithub color="#a5a6b0" size={25} title="github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jarmos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin color="#a5a6b0" size={25} title="linkedin" />
                </a>
                <a
                    href="https://twitter.com/Jarmosan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitter color="#a5a6b0" size={25} title="twitter" />
                </a>
                <a
                    href="mailto:somraj.mle@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillMail color="#a5a6b0" size={25} title="email" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
