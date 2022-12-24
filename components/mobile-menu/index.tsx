import Link from "next/link";

import styles from "./mobile-menu.module.scss";

function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
