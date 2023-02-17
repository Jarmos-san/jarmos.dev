import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

type linkTypes = {
  label: string;
  href: string;
};

type socialLinkTypes = {
  title: string;
  href: string;
  icon: IconType;
};

export const navLinks: linkTypes[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
];

export const legalLinks: linkTypes[] = [
  { label: "Terms of Usage", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Licensing & Distribution Rights", href: "/license" },
];

export const socialLinks: socialLinkTypes[] = [
  {
    title: "Somraj Saha on Twitter",
    href: "https://twitter.com/Jarmosan",
    icon: FiTwitter,
  },
  {
    title: "Somraj Saha on LinkedIn",
    href: "https://www.linkedin.com/in/jarmos",
    icon: FiLinkedin,
  },
  {
    title: "Somraj Saha on GitHub",
    href: "https://github.com/Jarmos-san",
    icon: FiGithub,
  },
];
