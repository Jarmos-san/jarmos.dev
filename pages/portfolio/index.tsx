import Link from "next/link";

import Seo from "../../components/seo";
import styles from "./portfolio.module.scss";

function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        href="/portfolio"
        description="Portfolio of Projects Somraj Saha has worked on."
        imageHref="/assets/logo-1200-630.png"
        imageAlt="website logo."
      />

      <article className={styles.container}>
        <h1>Portfolio</h1>

        <p>
          Over the years I had worked on multiple projects, some because of my
          personal needs & some for others. This page is a list of all such
          major I have worked on till now! Take a look & enjoy reading about
          them.
        </p>

        <h2>Personal Projects</h2>

        <h3 id="jarmos-blog">
          <Link href="/">jarmos.dev</Link>
        </h3>

        <p>
          This is my personal website, yes the one you are reading right now! I
          have open-sourced the project (see the{" "}
          <a
            href="https://github.com/Jarmos-san/jarmos.dev"
            target="_blank"
            rel="noreferrer"
          >
            source code
          </a>
          ) & you are free to develop your own version of the personal website.
        </p>

        <h3 id="devsindia">
          <a
            href="https://devsindia.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            devsindia.in
          </a>
        </h3>

        <p>
          This a landing page I developed for the{" "}
          <a href="https://www.reddit.com/r/developersIndia">
            r/developersIndia
          </a>{" "}
          subreddit community (see{" "}
          <a href="https://github.com/developersIndia/website">source code</a>).
          The website was built to serve the purpose of engaging the Indian
          developers community in an open-source project & drive traffic for the
          subreddit as well. The tech stack used for the website are:{" "}
          <a href="https://chakra-ui.com" target="_blank" rel="noreferrer">
            Chakra-UI
          </a>{" "}
          for styling,{" "}
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next.js
          </a>{" "}
          for building the website and{" "}
          <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a>{" "}
          for hosting.
        </p>

        <h3 id="jefer">
          <a href="https://jefer.vercel.app" target="_blank" rel="noreferrer">
            Jefer
          </a>
        </h3>

        <p>
          A simple, minimal & cross-platform tool to manage my dotfiles (see the{" "}
          <a
            href="https://wiki.archlinux.org/title/Dotfiles"
            target="_blank"
            rel="noreferrer"
          >
            definition
          </a>
          ). I built this tool to enable easily porting my configurations across
          multiple devices operating on different OSes & architecture like the{" "}
          <a>Raspberry Pi</a> or a Windows 11 laptop & so on (see the{" "}
          <a
            href="https://github.com/Jarmos-san/jefer"
            target="_blank"
            rel="noreferrer"
          >
            source code
          </a>
          ). The development of this tool is heavily inspired from other more
          mature software like - <a>GNU/Stow</a> and{" "}
          <a href="https://chezmoi.io" target="_blank" rel="noreferrer">
            Chezmoi
          </a>
          . The tool is built using{" "}
          <a href="https://www.rust-lang.org" target="_blank" rel="noreferrer">
            Rust
          </a>
          !
        </p>
      </article>
    </>
  );
}

export default PortfolioPage;
