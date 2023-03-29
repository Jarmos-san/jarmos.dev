import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { navLinks } from "../../constants/navlinks";
import MobileMenu from "../mobile-menu";
import styles from "./navbar.module.scss";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/assets/logo-og.svg"
              alt="Logo for the website."
              width={50}
              height={100}
            />
          </Link>
        </div>

        <button
          name="Mobile Menu Button"
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

        <span className={styles.navLinks}>
          {navLinks.map((navItem) => (
            <Link key={navItem.label} href={navItem.href}>
              {navItem.label}
            </Link>
          ))}
        </span>
      </nav>

      {isMenuOpen ? <MobileMenu /> : ""}
    </>
  );
}

export default Navbar;
