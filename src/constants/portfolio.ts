import path from "path";

type PortfolioTypes = {
  label: string;
  desc: string;
  border: string;
  href: string;
};

export const portfolio: PortfolioTypes[] = [
  {
    label: "Jefer",
    desc: `A simple, minimal & intuitive dotfiles manager written in Python.
            This project was created for a true cross-platform experience to
            manage my dotfiles. Jefer gives back more decision-making
            responsibilities to the user unlike its alternatives.`,
    border: "border-fuchsia-400",
    href: "https://github.com/Jarmos-san/jefer",
  },
  {
    label: "devsindia.in",
    desc: `A open-source personal website & blog created using Next.js
            TypeScript & TailwindCSS. This project is the final iteration of
            the countless previous experimentations I performed to create an
            ideal personal website.`,
    border: "border-teal-400",
    href: "https://github.com/developersIndia/website",
  },
  {
    label: "jarmos.dev",
    desc: `The official landing page for the r/developersIndia Reddit
            community. The project was created using Next.js, SASS & TypeScript.
            This project was created in hopes to gather more organic traffic.`,
    border: "border-rose-400",
    href: "https://github.com/Jarmos-san/jarmos.dev",
  },
  {
    label: "Neovimulus",
    desc: `A no non-sense and minimal configuration framework for those who
            wants to give Neovim a try without much fuss. Set up a complete
            Neovim experience with LSP-based autocompletion and more by running
            a single line of command!`,
    border: "border-yellow-200",
    href: "https://github.com/Jarmos-san/neovimulus",
  },
];

export const portfolioDir = path.join(process.cwd(), "_portfolio");
