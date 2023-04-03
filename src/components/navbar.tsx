import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { navlinks } from "@constants/navlinks";

function MobileMenu() {
  return (
    <div
      className="mx-4 rounded-lg bg-blue-30 p-4 text-center text-lg
        font-bold md:hidden"
    >
      <ul className="flex-col space-y-2">
        {navlinks.map((link) => (
          <li
            key={link.label}
            className="text-black-100 rounded-sm bg-green-10 py-2"
          >
            <Link href={link.href} className="underline underline-offset-2">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// TODO: Refactor the navbar to be stick & open the menu on top of other content
// See this documentation on Flowbite for more information:
// https://flowbite.com/docs/components/navbar/#sticky-navbar
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="container mx-auto flex items-center justify-between px-4
        py-2"
      >
        <Link
          href="/"
          className="rounded-lg focus:outline-none focus:ring-2
            focus:ring-white-30"
        >
          <Image
            src="/assets/logo-og.svg"
            alt="Website logo"
            width={70}
            height={70}
          />
        </Link>

        <button
          type="button"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          className="sm:hidden md:rounded-lg md:p-2 md:hover:bg-blue-40
            md:focus:outline-none md:focus:ring-2 md:focus:ring-white-30"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open Main Menu</span>
          {isMenuOpen ? (
            <IoMdClose size={22} color="#ECF8FF" />
          ) : (
            <GiHamburgerMenu size={22} color="#ECF8FF" />
          )}
        </button>

        {/* TODO: Make the current page is colored green */}
        <span className="hidden md:flex md:space-x-5 md:text-white-10">
          {navlinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:underline-offset-5 underline
              underline-offset-2 hover:text-white-30"
            >
              {link.label}
            </Link>
          ))}
        </span>
      </nav>

      {isMenuOpen ? <MobileMenu /> : ""}
    </>
  );
}

export default Navbar;
