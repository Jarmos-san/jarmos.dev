import Link from "next/link";

import { navLinks } from "@constants/navlinks";

function MobileMenu() {
  return (
    <div>
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
