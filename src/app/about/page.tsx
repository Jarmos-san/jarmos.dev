import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `This is about Somraj Saha who is a Full-Stack Software Engineer and 
  working as an Independent Software Developer. He works with startup founders and 
  business owners to bring fresh ideas to production and serve paying customers.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Somraj Saha",
    description: `This is about Somraj Saha who is a Full-Stack Software Engineer and 
    working as an Independent Software Developer. He works with startup founders and 
    business owners to bring fresh ideas to production and serve paying customers.`,
    url: "https://jarmos.dev/about",
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
    title: "Somraj Saha | About",
    description: `This is about Somraj Saha who is a Full-Stack Software Engineer and 
    working as an Independent Software Developer. He works with startup founders and 
    business owners to bring fresh ideas to production and serve paying customers.`,
    creator: "@Jarmosan",
    images: ["https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"],
  },
  appleWebApp: {
    title: "About | Somraj Saha",
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

const AboutPage = () => {
  return (
    <article
      className="container prose mx-auto max-w-screen-sm px-5
        lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <h1>About Somraj Saha</h1>
      <p>Hi There!</p>
      <p>
        I am an Independent Software Engineer &amp; I work with startup founders
        &amp; business owners from different backgrounds to build/design their
        MVPs. If you do decide to work with me, here is what a typical workflow
        will look like:{" "}
      </p>
      <ol>
        <li>
          I will sit with you to understand the business problem &amp; the
          target customers of the product. During this phase I might as well
          suggest some pros/cons of the approach you have in mind (if at all
          needed).
        </li>
        <li>
          With the initial ideation phase complete, I will design &amp; draft
          the software architecture &amp; specification of the product which
          will be later used as a source of reference for other teams
          contributing to the product.
        </li>
        <li>
          With the documentation for the software architecture complete, I will
          then proceed towards building the MVP. I will also be hiring the first
          group of engineers, developers &amp; related roles to build &amp;
          maintain the product during this phase.
        </li>
      </ol>

      <p>
        That was a quick sneak peak into what a typical workflow of us working
        together to build a business would sound like. So, if you want to
        collaborate with me, reach out to me over{" "}
        <a href="mailto:somraj.mle@gmail.com" target="_blank" rel="noopener">
          email
        </a>
        . You can find also find me on:{" "}
      </p>
      <ul>
        <li>
          <a href="https://twitter.com/Jarmosan" target="_blank" rel="noopener">
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jarmos"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Jarmos-san"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </li>
      </ul>

      <p>
        And if you want to check out my previous work/experience writing code?
        Then head over to the <Link href="/portfolio">portfolio</Link> page to
        see the highlights of the projects I worked on.
      </p>
      <p>
        That said, here are the list of technologies I work with at the moment.
        Do note, the list shared below is by no means exhaustive &amp; I&apos;m
        open to picking up other technologies as the need arises.
      </p>
      <h2>Programming Languages I Work With</h2>
      <ol>
        <li>
          <a
            href="https://www.python.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python
          </a>{" "}
          for small-scale scripting, system automation and/or building backend
          REST APIs. I also often use Python to build CLI applications which are
          not complex in functionality and design.
        </li>
        <li>
          <a
            href="https://www.typescriptlang.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            TypeScript
          </a>{" "}
          when working on{" "}
          <a href="https://react.dev" target="_blank" rel="noopener">
            React.js
          </a>{" "}
          based projects since I enjoy working with the static-typing
          capabilities the language provides. The language also helps me nip
          common bugs introduced by dynamic-typing &amp; other JavaScript
          caveats right at the bud.
        </li>
        <li>
          <a
            href="https://www.lua.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lua
          </a>{" "}
          for scripting &amp; configuring{" "}
          <a href="https://neovim.io" target="_blank" rel="noopener">
            Neovim
          </a>
          . Unfortunately I am yet to come across other areas of application
          where I can make full use of my Lua programming skills.
        </li>
      </ol>
      <h2>Frameworks &amp; Libraries I Use to Develop Software</h2>
      <ol>
        <li>
          <a
            href="https://nextjs.org"
            rel="noreferrer noopener"
            target="_blank"
          >
            Next.js
          </a>{" "}
          is a React.js-based framework &amp; I use it to build fast &amp;
          well-optimised websites. A quick heads up for you, the website you are
          on, was built using Next.js as well! If you are interested, go ahead
          &amp; check out the{" "}
          <a
            href="https://github.com/Jarmos-san/jarmos.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          .
        </li>
        <li>
          <a
            href="https://fastapi.tiangolo.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            FastAPI
          </a>{" "}
          is a Python framework for developing &amp; building REST APIs. This is
          my favourite go-to framework for backend projects because of its speed
          &amp; static-typing support which alternatives like{" "}
          <a
            href="https://www.django-rest-framework.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Django Rest Framework
          </a>{" "}
          or{" "}
          <a
            href="https://flask.palletsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flask
          </a>{" "}
          lacks.
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
          aesthetics of other CSS frameworks like{" "}
          <a
            href="https://getbootstrap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>{" "}
          &amp; so on. I use it often to develop most of my frontend projects
          &amp; not worry about the overhead of &ldquo;CSS anxiety&ldquo;.
        </li>
        <li>
          <a
            href="https://chakra-ui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chakra-UI
          </a>{" "}
          is a ready-to-use React Component library &amp; I use it when I need
          to build a web project real quick! This library is best suited for
          usage when the project need not require a lot of aesthetic
          customisation. There are other React component libraries out there as
          well &amp; some of those which I used are:{" "}
          <a
            href="https://nextui.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextUI
          </a>
          ,{" "}
          <a
            href="https://flowbite-react.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flowbite
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.radix-ui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radix
          </a>
        </li>
        <li>
          <a
            href="https://sass-lang.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            SASS
          </a>{" "}
          is a CSS preprocesser &amp; it has &ldquo;first-class support&ldquo;
          with Next.js through CSS Modules. Hence, making life much easier by
          allowing me to write more modular, clean &amp; dry CSS code for my
          Next.js projects.
        </li>
        <li>
          <a
            href="https://scikit-learn.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Scikit-Learn
          </a>{" "}
          is a comprehensive library providing Python API for some of the most
          widely used ML algorithms. I use this library to build modern ML-based
          software.
        </li>
      </ol>
      <h2>Miscellaneous Development Tools I Need Daily</h2>
      <p>
        A Software Developer&apos;s toolkit is incomplete without their
        preferred set of tools. Apart from the few programming languages &amp;
        their respective framework/libraries mentioned above, there are other
        equally important tools as well. Some of these tools might not directly
        affect the development or maintainance of a software product but they
        help me write better software. Hence, following are the few tools I
        employ on a regular basis when writing code:
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
          the Linux-based OS &amp; my primary choice of an Operating System when
          developing &amp; deploying software to production environments. I am
          reconsidering using a more configurable distro like{" "}
          <a
            href="https://endeavouros.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            EndeavourOS
          </a>{" "}
          for my development needs in the future though. So, if you have used it
          before or using it at the moment? Then feel free to share a review or
          two about it with me.
        </li>
        <li>
          <a
            href="https://code.visualstudio.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Visual Studio Code (VSCode)
          </a>{" "}
          is a configurable Text Editor from Microsoft &amp; I use it with a ton
          of plugins for writing code. This particular Text Editor has
          incredible support for plugins (some maintained by Microsoft
          themselves) which makes other, more resource-intensive IDEs like{" "}
          <a
            href="https://www.jetbrains.com/pycharm"
            target="_blank"
            rel="noopener noreferrer"
          >
            PyCharm
          </a>{" "}
          unattractive in my eyes.
        </li>
        <li>
          <a href="https://neovim.io" rel="noopener noreferrer" target="_blank">
            Neovim
          </a>{" "}
          is the one &amp; only preferred (more like favourite) Text Editor I
          use to write code. Its a &ldquo;<i>better</i>&ldquo; fork of{" "}
          <a href="https://vim.org" target="_blank" rel="noopener noreferrer">
            Vim
          </a>{" "}
          &amp; I have been using it for the past{" "}
          {new Date().getFullYear() - Number("2019")} years.
        </li>
        <li>
          <a
            href="https://www.docker.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Docker
          </a>{" "}
          is the <i>de facto</i> containerisation tool for developing &amp;
          deploying projects to production environments. And I try to use it for
          all of my projects (including some of my hobby projects as well)
          whenever possible!
        </li>
      </ol>
    </article>
  );
};

export default AboutPage;
