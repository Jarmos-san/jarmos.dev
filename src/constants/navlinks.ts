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

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "jarmos.vercel.app"
    : "localhost:3000";

export const blogDir = path.join(process.cwd(), "_blog");
