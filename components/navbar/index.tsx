import Link from "next/link";

import styles from "./navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* TODO: Add a proper logo later on. */}
                <Link href="/" passHref>
                    <a>Somraj Saha</a>
                </Link>
            </div>

            <button className={styles.menuIcon} type="button">
                <BiMenuAltRight size={28} color="#fff" />
            </button>

            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" passHref>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
