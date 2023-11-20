import { Metadata } from "next";

const pageDescription = `Somraj Saha is a Senior Software Engineer working
  independently for businesses of all sorts of scale! Learn more about me in
  this page and see if there is anything I might be able to help you out with`;

export const metadata: Metadata = {
  title: "About",
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Somraj Saha",
    description: pageDescription,
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
    title: "About | Somraj Saha",
    description: pageDescription,
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

const AboutPage = () => (
  <article
    className="container mx-auto max-w-screen-sm space-y-4
    px-5 text-white-10 lg:max-w-screen-md xl:max-w-screen-lg
    2xl:max-w-screen-xl"
  >
    <h1 className="mb-6 text-3xl font-extrabold text-green-10">
      About Somraj Saha
    </h1>

    <p>
      Hi there! 👋🏽Welcome to my &quot;
      <a
        href="https://www.thunknotes.com/blog/what-is-a-digital-garden"
        target="_blank"
        className="my-4 underline underline-offset-4 hover:text-green-10"
      >
        digital garden
      </a>
      &quot;!
    </p>

    <p>
      I am Somraj Saha (aka &quot;Jarmos&quot;) and I am a Senior Software
      Engineer working independently! My primary work involves helping
      businesses of all scale solve some of their software engineering probalems
      and contribute (or even create) opensource tools as a hobby and
      recreational purposes. The website you are on right now is where I share
      my knowledge, skills and thoughts as a Software Engineer.
    </p>

    <p>
      If you are curious of the technologies and/or the development tools I use
      for work, here is what you should know:
    </p>

    <h2 className="font text-xl font-extrabold text-green-10">
      Programming Languages I Work With
    </h2>

    <ol className="ml-9 list-outside list-decimal leading-loose">
      <li>
        <a
          href="https://www.python.org"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Python
        </a>{" "}
        when dealing with scall-scale scripts, system automation and/or building
        large scale backend APIs.
      </li>
      <li>
        <a
          href="https://www.typescriptlang.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          TypeScript
        </a>{" "}
        to write{" "}
        <a
          href="https://react.dev"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          React.js
        </a>{" "}
        based applications for web browsers. The developer experience thanks to
        the strict static typing is something I cannot live without!
      </li>
      <li>
        <a
          href="https://lua.org"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Lua
        </a>{" "}
        to programmatically configure a develop my personalised development
        environment within{" "}
        <a
          href="https://neovim.io"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Neovim
        </a>
        . And I am yet to come across an opportunity where I could write Lua
        code outside of Neovim environment as well.
      </li>
      <li>
        <a
          href="https://golang.dev"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Golang
        </a>{" "}
        (or simply Go) is a programming language I am currently learning to
        rewrite some of my CLI tools with. I choose this language because of its
        easy syntax, static typing and ability to distribute executable binaries
        of my projects.
      </li>
    </ol>

    <h2 className="font text-xl font-extrabold text-green-10">
      Primary Frameworks & Libraries
    </h2>

    <p>
      Although I use quite a few frameworks and libraries on a daily basis but I
      am only listing a few of the primary and most widely used ones here. I am
      generally framework agnostic and will pick up whatever framework does the
      job or is currently widely used by the community.
    </p>

    <ol className="ml-9 list-outside list-decimal leading-loose">
      <li>
        <a
          href="https://nextjs.org"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Next.js
        </a>{" "}
        to build websites and web applications using React.js technologies in a
        more sensible manner. And a little heads up for you, the website you are
        currently on is built using Next.js as well! You can check out the{" "}
        <a
          href="https://github.com/Jarmos-san/jarmos.dev"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          source code on GitHub
        </a>{" "}
        if interested.
      </li>
      <li>
        <a
          href="https://tiangolo.fastapi.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          FastAPI
        </a>{" "}
        is a Python framework to build fast asynchronous backend REST APIs. This
        is my primary choice of a tool to build the backend systems of any web
        applications I work on.
      </li>
      <li>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          TailwindCSS
        </a>{" "}
        is a CSS library for styling web applications quickly using
        &ldquo;utility classes&rdquo; (a concept borrowed from{" "}
        <a
          href="https://getbootstrap.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Bootstrap
        </a>
        ). I use it when a speedy deployment to production is of utmost
        importance.
      </li>
    </ol>

    <p>
      As mentioned earlier, those are not the only frameworks and libraries I
      work with but the list would be too long to list all of them!
    </p>

    <h2 className="font text-xl font-extrabold text-green-10">
      Other Developer Tools I Use
    </h2>

    <p>
      A Software Engineer is &ldquo;a Batman without his
      Batsuit/Batmobile&rdquo;, hence it is very important for me to choose and
      maintain a bunch of tools I would use on a day-to-day basis to write code
      as well.
    </p>

    <p>
      Here are the rest of the tools which helps me write code with the list of
      technologies mentioned above:
    </p>

    <ol className="ml-9 list-outside list-decimal leading-loose">
      <li>
        <a
          href="https://www.ubuntu.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Ubuntu
        </a>{" "}
        is my current Operating System of choice but I do use{" "}
        <a
          href="https://en.wikipedia.org/wiki/Windows_11"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Windows 11
        </a>{" "}
        and{" "}
        <a
          href="https://fedoraproject.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Fedora Linux
        </a>{" "}
        for development at certain times.
      </li>
      <li>
        <a
          href="https://www.docker.com"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          Docker
        </a>{" "}
        which is the de facto containerisation tool is used in my development
        workflow to run various software in a sandbox environment safely and
        quickly! I cannot imagine writing and deploying code to production
        without Docker containers.
      </li>
      <li>
        Neovim as my preferred Text Editor which I have extensively configured
        to my particular developer habits. If you want to explore how I
        configure and setup a personalised development environment, check out{" "}
        <a
          href="https://github.com/Jarmos-san/dotfiles/tree/main/dotfiles/.config/nvim"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          the dotfiles
        </a>{" "}
        on GitHub.
      </li>
    </ol>

    <p>
      That said, as a Software Engineer I am always on the look out to learn and
      use new technologies. And although I will try my best to keep this page
      updated frequently I would not want to make it a boring read for you. If
      you still want to be updated of the technologies I work with or have plans
      to try out, you might want to follow me on my social media platforms!
    </p>
  </article>
);

export default AboutPage;
