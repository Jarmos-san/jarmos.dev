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
                    <Link href="/" passHref>
                        Somraj Saha
                    </Link>
                </div>

                <button
                    type="button"
                    className={styles.menuIcon}
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
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {isMenuOpen ? <MobileMenu /> : ""}
        </>
    );
}

export default Navbar;
