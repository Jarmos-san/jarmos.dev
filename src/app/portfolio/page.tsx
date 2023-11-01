import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Somraj Saha's portfolio of projects.`,
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | Somraj Saha",
    description: `Somraj Saha's portfolio of projects.`,
    url: "https://jarmos.dev/portfolio",
    siteName: "Somraj Saha",
    images: [
      {
        url: "https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg",
        alt: "The logo of the personal website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Somraj Saha",
    description: `Somraj Saha's portfolio of projects.`,
    creator: "@Jarmosan",
    images: ["https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"],
  },
  appleWebApp: {
    title: "Portfolio | Somraj Saha",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-touch-icon.png",
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};

function PortfolioPage() {
  return (
    <>
      <article
        className="container prose mx-auto max-w-screen-sm px-5
          lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <h1>Portfolio</h1>
        <p>
          Following are some of the projects I have worked on for both my
          personal or a client&apos;s needs. Some of the projects listed here
          are also a result of my contribution to the open-source community.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/Jarmos-san/jarmos-dev"
              target="_blank"
              rel="noopener"
            >
              jarmos.dev
            </a>{" "}
            is the personal website you are on right now where I share my
            knowledge and exerperience as a self-taught programmer. The source
            code is open-sourced for anyone interested in checking it out. And
            the site is built with -{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener">
              Next.js
            </a>
            ,{" "}
            <a
              href="https://www.typescriptlang.com"
              target="_blank"
              rel="noopener"
            >
              TypeScript
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener">
              TailwindCSS
            </a>
            .
          </li>
          <li>
            <a
              href="https://github.com/Jarmos-san/neovimulus"
              target="_blank"
              rel="noopener"
            >
              Neovimulus
            </a>{" "}
            is a{" "}
            <a href="https://neovim.io" target="_blank" rel="noopener">
              Neovim
            </a>{" "}
            configuration framework created for simplicity and minimalism. I
            created the project to share a minimal and out-of-the-box IDE-like
            experience with Neovim for my friends and coworkers. The project is
            completely written in{" "}
            <a href="https://lua.org" target="_blank" rel="noopener">
              Lua
            </a>{" "}
            and automated through{" "}
            <a
              href="https://www.gnu.org/software/bash/"
              target="_blank"
              rel="noopener"
            >
              Bash
            </a>{" "}
            scripts.
          </li>
          <li>
            <a
              href="https://github.com/Jarmos-san/jefer"
              target="_blank"
              rel="noopener"
            >
              Jefer
            </a>{" "}
            (WIP) is an intuitive, minimal and cross-platform tool to manage my
            dotfiles using{" "}
            <a href="https://dotfiles.github.io" target="_blank" rel="noopener">
              dotfiles
            </a>
            . The project is built using{" "}
            <a href="https://www.rust-lang.org" target="_blank" rel="noopener">
              Rust
            </a>{" "}
            and its design was heavily inspirered from{" "}
            <a
              href="https://www.gnu.org/software/stow"
              target="_blank"
              rel="noopener"
            >
              GNU/Stow
            </a>
            .
          </li>
          <li>
            <a
              href="https://github.com/developersIndia/website"
              target="_blank"
              rel="noopener"
            >
              devsindia.in
            </a>{" "}
            (archived) is the community maintained website for the{" "}
            <a
              href="https://www.reddit.com/r/developersindia"
              target="_blank"
              rel="noopener"
            >
              r/developersIndia
            </a>{" "}
            subreddit community. The project was developed with - Next.js,
            TypeScript and{" "}
            <a href="https://chakra.ui.com" target="_blank" rel="noopener">
              Chakra-UI
            </a>
            .
          </li>
          <li>
            <a
              href="https://wiki.developersindia.in"
              target="_blank"
              rel="noopener"
            >
              wiki.devsindia.in
            </a>{" "}
            is the official wiki of the r/developersIndia subreddit. It was
            built using{" "}
            <a
              href="https://rust-lang.github.io/mdBook"
              target="_blank"
              rel="noopener"
            >
              mdBook
            </a>{" "}
            as a simple static site for members of the community to contribute
            to the site through Markdown documents.
          </li>
        </ul>
        <p>
          I am continuously working on projects in the open-source community and
          if you are interested in lending a helping hand, please feel free to
          reach out to me!
        </p>
      </article>
    </>
  );
}

export default PortfolioPage;
