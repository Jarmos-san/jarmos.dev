import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import MobileMenu from "@components/mobile-menu";
import { navLinks } from "@constants/navlinks";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div>
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
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoMdClose size={28} color="#fff" />
          ) : (
            <BiMenuAltRight size={28} color="#fff" />
          )}
        </button>

        <span>
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
