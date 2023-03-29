import Link from "next/link";

import { navLinks } from "@constants/navlinks";

import styles from "./mobile-menu.module.scss";

function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      {navLinks.map((navItem) => (
        <ul key={navItem.label}>
          <li>
            <Link href={navItem.href}>{navItem.label}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default MobileMenu;
