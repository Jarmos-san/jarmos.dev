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
    href: "/jefer",
  },
  {
    label: "devsindia.in",
    desc: `A open-source personal website & blog created using Next.js
            TypeScript & TailwindCSS. This project is the final iteration of
            the countless previous experimentations I performed to create an
            ideal personal website.`,
    border: "border-teal-400",
    href: "/devsindia-in",
  },
  {
    label: "jarmos.dev",
    desc: `The official landing page for the r/developersIndia Reddit
            community. The project was created using Next.js, SASS & TypeScript.
            This project was created in hopes to gather more organic traffic.`,
    border: "border-rose-400",
    href: "/personal-website",
  },
];
