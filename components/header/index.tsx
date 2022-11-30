import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.heading}>
                This is Somraj, a Full-Stack Software Engineer & Technical Writer.
            </h1>

            <p className={styles.subheading}>
                I work as a Software Engineer at{" "}
                <a
                    href="https://www.augwir.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Augwir Technologies
                </a>{" "}
                to build some awesome Augmented Reality (AR) products! You can find more
                about me, my work, knowledge & experience on this blog. So, feel free to
                check it out as per you convenience.
            </p>
        </header>
    );
}

export default Header;
