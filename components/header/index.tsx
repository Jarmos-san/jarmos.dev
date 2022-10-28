import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.heading}>
                This is Somraj, a Full-Stack Software Engineer & Technical Writer.
            </h1>

            <p className={styles.subheading}>
                I specialize in rapidly prototyping web applications & related software.
                During my free time I share my knowledge & experience with the rest of
                the world. You can find my FOSS contributions on my{" "}
                <a
                    className={styles.github}
                    href="https://github.com/Jarmos-san"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>{" "}
                profile & my social media presence on{" "}
                <a
                    className={styles.twitter}
                    href="https://twitter.com/Jarmosan"
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitter
                </a>{" "}
                as well{" "}
                <a
                    className={styles.linkedin}
                    href="https://www.linkedin.com/in/jarmos"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                .
            </p>
        </header>
    );
}

export default Header;
