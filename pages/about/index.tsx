import Head from "next/head";

import styles from "./about.module.scss";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me | Somraj Saha</title>
      </Head>

      <article className={styles.container}>
        <h1>About Somraj Saha</h1>
        <p>Hi There!</p>
        <p>
          I&lsquo;m Senior Somraj Saha, a Software Engineer and a Technical
          Writer. I head the Machine Learning (ML) Engineering team at{" "}
          <a
            href="https://www.augwir.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Augwir Technologies
          </a>{" "}
          right now. The website you are on, is where I share my knowledge and
          experience as a self-taught programmer.
        </p>
        <p>
          I&lsquo;ve over{" "}
          {Number(new Date().getFullYear()) - Number(new Date(2016))} years of
          programming experience and working with clients from various
          backgrounds. So, if you own a business and need an experienced helping
          hand, feel free to reach out to me with your queries! I am sure we can
          work out some solution for the particular business problem you are
          trying to resolve.
        </p>
        <h2>About My Tool Belt</h2>
        <p>
          Over the years I have had ample opportunities to work with countless
          technologies. And while I enjoy working with some, there are others
          which feels like a chore to deal with. Regardless, here is a list of
          all the tools and services I have at my disposal when developing
          software.
        </p>
        <h3>Programming Languages I Work With</h3>
        <ol>
          <li>
            <a
              href="https://www.python.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python
            </a>{" "}
            for small-scale scripting & system automation needs. I also use
            Python in the backend for developing REST APIs & among other stuff
            like creating CLI scripts.
          </li>

          <li>
            <a
              href="https://www.typescriptlang.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              TypeScript
            </a>{" "}
            for moments when working on React.js-based projects because I enjoy
            working in a statically-typed programming language. And no, I
            don&apos;t use TypeScript because of &quot;my hate for
            JavaScript&quot;.
          </li>

          <li>
            <a
              href="https://www.lua.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lua
            </a>{" "}
            for scripting & configuring Neovim. Unfortunately I am yet to come
            across other areas of application where I can make full use of my
            Lua programming skills.
          </li>
        </ol>
        <h3>Frameworks & Libraries I Use to Develop Software</h3>
        <ol>
          <li>
            <a
              href="https://nextjs.org"
              rel="noreferrer noopener"
              target="_blank"
            >
              Next.js
            </a>{" "}
            is a React.js-based framework & I use it for building well-optimised
            Server-Side Rendered (SSR) & Client-Side Rendered (CSR) websites. A
            quick heads up for you, the website you are on, was built using
            Next.js as well!
          </li>

          <li>
            <a
              href="https://fastapi.tiangolo.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              FastAPI
            </a>{" "}
            is a Python framework for developing & building REST APIs. This
            framework is my go-to framework for backend projects because of its
            speed, static-typings & autocomplete support which alternatives like
            Django Rest Framework lacks.
          </li>

          <li>
            <a
              href="https://tailwindcss.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              TailwindCSS
            </a>{" "}
            is a CSS framework for those who does not like the monotonic
            aesthetics of other CSS frameworks like Bootstrap & so on. I use it
            often for when I need to develop a simple website quickly & without
            the overhead of &ldquo;CSS anxiety&ldquo;.
          </li>

          <li>
            <a
              href="https://chakra-ui.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Chakra-UI
            </a>{" "}
            is a ready-to-use React Component library & I use it when I need to
            build a web project real quick! This library is best suited for
            usage when the project need not require a lot of aesthetic
            customisation.
          </li>

          <li>
            <a
              href="https://sass-lang.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              SASS
            </a>{" "}
            is a CSS preprocesser & it has &ldquo;first-class support&ldquo;
            with Next.js through CSS Modules. Hence, making life much easier by
            allowing me to write more modular, clean & dry CSS code.
          </li>
        </ol>
        <h3>Miscellaneous Development Tools I Need Daily</h3>
        <p>
          Software Developers are never complete without their preferred tools.
          Apart from the few ones mentioned above, there are other
          non-development tools which are equally important to complete our
          day-to-day tasks as well. Hence, following are the few tools I employ
          on a regular basis when writing code:
        </p>
        <ol>
          <li>
            <a
              href="https://ubuntu.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ubuntu
            </a>{" "}
            the Linux-based OS & my primary choice of an Operating System when
            developing software. I am reconsidering using a more configurable
            distro like{" "}
            <a
              href="https://endeavouros.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              EndeavourOS
            </a>{" "}
            in the future though. So, if you have used it before or using it at
            the moment? Then feel free to share a review or two about it with
            me.
          </li>

          <li>
            <a
              href="https://code.visualstudio.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visual Studio Code (VSCode)
            </a>{" "}
            is a configurable Text Editor from Microsoft & I use it with a ton
            of plugins for writing code. This particular Text Editor has
            incredible support for plugins (
            <i>some maintained by Microsoft themselves</i>) which makes other,
            more resource-intensive IDEs like{" "}
            <a
              href="https://www.jetbrains.com/pycharm"
              target="_blank"
              rel="noopener noreferrer"
            >
              PyCharm
            </a>{" "}
            unattractive.
          </li>

          <li>
            <a
              href="https://neovim.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Neovim
            </a>{" "}
            is the one & only preferred (<i>more like favourite</i>) Text Editor
            I use to write code. Its a &ldquo;<i>better</i>&ldquo; fork of{" "}
            <a href="https://vim.org" target="_blank" rel="noopener noreferrer">
              Vim
            </a>{" "}
            & I use it primarily because of its of Lua scripting support.
          </li>

          <li>
            <a
              href="https://www.docker.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Docker
            </a>{" "}
            is the <i>de facto</i> containerisation tool for deploying or
            developing projects. And I try to use it for all of my projects
            whenever possible!
          </li>
        </ol>
      </article>
    </>
  );
}

export default AboutPage;
