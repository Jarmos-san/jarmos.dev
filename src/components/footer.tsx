import Image from "next/image";
import Link from "next/link";

import { footerIcons } from "@constants/footericons";
import { legaldocs } from "@constants/legaldocs";
import { navlinks } from "@constants/navlinks";

function Footer() {
  return (
    <footer
      className="container mx-auto my-10 flex flex-col items-center
      space-y-8"
    >
      <Image
        src="/assets/logo-og.svg"
        width={70}
        height={70}
        alt="website logo"
      />

      <span className="space-x-6">
        {navlinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-white-10 underline-offset-4 hover:text-green-30
              hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </span>

      <small className="text-center text-white-30">
        Website Designed by{" "}
        <a
          href="https://www.warner.codes"
          target="_blank"
          className="text-white-10 underline-offset-4 hover:text-green-30
            hover:underline"
        >
          Ryan Warner
        </a>{" "}
        | Developed by Somraj Saha with{" "}
        <a
          href="https://github.com/Jarmos-san/jarmos.dev"
          target="_blank"
          className="text-white-10 underline-offset-4 hover:text-green-30
            hover:underline"
        >
          Open-Source
        </a>{" "}
        ❤️ &copy; 2018-
        {new Date().getFullYear()}
      </small>

      <small className="space-x-10">
        {legaldocs.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-white-10 underline-offset-2 hover:text-green-30
              hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </small>

      <span className="flex space-x-6">
        {footerIcons.map((icon) => (
          <a key={icon.href} href={icon.href} target="_blank" rel="noreferrer">
            <icon.icon size={25} color="#B0FBBC" />
          </a>
        ))}
      </span>
    </footer>
  );
}

export default Footer;
