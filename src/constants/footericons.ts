import { IconType } from "react-icons";

import { FaGithub, FaKaggle, FaLinkedin, FaTwitter } from "react-icons/fa";

type footerIconTypes = {
  href: string;
  title: string;
  icon: IconType;
};

export const footerIcons: footerIconTypes[] = [
  {
    href: "https://twitter.com/Jarmosan",
    title: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://www.linkedin.com/in/jarmos",
    title: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/Jarmos-san",
    title: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.kaggle.com/jarmos",
    title: "Kaggle",
    icon: FaKaggle,
  },
];
