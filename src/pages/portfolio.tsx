import Seo from "@components/seo";

function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        url="/portfolio"
        desc="Somraj Saha's portfolio of projects."
        image="https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"
        imageAlt="Logo for Somraj Saha's personal website."
      />
      <article
        className="container prose mx-auto my-16 max-w-none px-10 text-white-30
        prose-headings:font-bold prose-headings:text-white-10 prose-h1:text-3xl
        prose-a:text-green-30 prose-a:underline prose-a:underline-offset-4
        prose-strong:text-white-20 md:px-12 lg:px-36 xl:px-56 2xl:px-96"
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
