import Link from "next/link";

import styles from "./navbar.module.scss";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* TODO: Add a proper logo later on. */}
                <Link href="/" passHref>
                    <a>Somraj Saha</a>
                </Link>
            </div>

            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
