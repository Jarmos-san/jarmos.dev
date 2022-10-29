import styles from "./footer.module.scss";

function Footer() {
    return (
        <div className={styles.container}>
            <small>
                &copy; Somraj Saha 2018-
                {new Date().getFullYear()}
            </small>
            <small>
                Designed by{" "}
                <a href="https://www.warner.codes" target="_blank" rel="noreferrer">
                    Ryan Warner
                </a>
                .
            </small>
            <small>Social Media Icons</small>
        </div>
    );
}

export default Footer;
