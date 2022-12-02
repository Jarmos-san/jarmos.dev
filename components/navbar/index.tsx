import Link from "next/link";

import MobileMenu from "../mobile-menu";
import styles from "./navbar.module.scss";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    {/* TODO: Add a proper logo later on. */}
                    <Link href="/" passHref>
                        <a>Somraj Saha</a>
                    </Link>
                </div>

                <button
                    className={styles.menuIcon}
                    type="button"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <IoMdClose size={28} color="#fff" />
                    ) : (
                        <BiMenuAltRight size={28} color="#fff" />
                    )}
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
                    </ul>
                </div>
            </nav>

            {isMenuOpen ? <MobileMenu /> : ""}
        </>
    );
}

export default Navbar;
