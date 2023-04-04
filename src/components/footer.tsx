import Image from "next/image";
import Link from "next/link";

import { footerIcons } from "@constants/footericons";
import { legaldocs } from "@constants/legaldocs";
import { navlinks } from "@constants/navlinks";

function Footer() {
  return (
    <footer className="fixed bottom-0 mb-8 w-full">
      <section
        className="mb-6 flex flex-col items-center justify-center
          space-y-4"
      >
        <Image
          src="/assets/logo-og.svg"
          width={70}
          height={70}
          alt="website logo"
        />

        <span
          className="flex space-x-5 text-white-30 underline
            underline-offset-2"
        >
          {navlinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white-20"
            >
              {link.label}
            </Link>
          ))}
        </span>
      </section>

      <div className="mx-6 mb-4 border-b-2 border-blue-30"></div>

      <section className="flex flex-col items-center justify-center space-y-6">
        <small className="px-20 text-center text-white-30">
          Website Designed by{" "}
          <a
            href="https://www.warner.codes"
            target="_blank"
            className="underline underline-offset-2 hover:text-white-20"
          >
            Ryan Warner
          </a>{" "}
          | Developed by Somraj Saha with{" "}
          <a
            href="https://github.com/Jarmos-san/jarmos.dev"
            target="_blank"
            className="underline underline-offset-2 hover:text-white-20"
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
              className="text-white-30 underline underline-offset-2
                hover:text-white-20"
            >
              {link.label}
            </Link>
          ))}
        </small>

        <span className="flex space-x-6">
          {footerIcons.map((icon) => (
            <a
              key={icon.href}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
            >
              <icon.icon size={25} color="#B0FBBC" />
            </a>
          ))}
        </span>
      </section>
    </footer>
  );
}

export default Footer;
