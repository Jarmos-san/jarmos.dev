import path from "path";

type navlinkTypes = {
  label: string;
  href: string;
};

export const navlinks: navlinkTypes[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "/about",
  },
];

export const baseUrl = "jarmos.vercel.app";

export const blogDir = path.join(process.cwd(), "_blog");
