import { Navbar } from "flowbite-react";

import Image from "next/image";
import Link from "next/link";

import { navlinks } from "@constants/navlinks";

function HomePage() {
  return (
    <Navbar fluid={true} className="container mx-auto">
      <Navbar.Brand>
        <Link href="/">
          <Image
            src="./assets/logo-og.svg"
            alt="Logo for the website"
            width={75}
            height={75}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navlinks.map((navlink) => (
          <Link
            key={navlink.label}
            href={navlink.href}
            passHref
            className="mx-auto text-lg underline underline-offset-2
            hover:underline-offset-4"
          >
            <Navbar.Link href={navlink.href}>{navlink.label}</Navbar.Link>
          </Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomePage;
