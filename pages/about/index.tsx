import styles from "./about.module.scss";

function AboutPage() {
    return (
        <>
            <title>Somraj Saha | About Me</title>
            <main className={styles.container}>
                <article>
                    <h1>About Somraj Saha</h1>

                    <p>Hi There!</p>

                    <p>
                        I&lsquo;m Somraj Saha, a Full-Stack Software Engineer & Technical
                        Writer. I head the Machine Learning (ML) Engineering team at{" "}
                        <a
                            href="https://www.augwir.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Augwir
                        </a>{" "}
                        right now. And the website you are on, is where I share my knowledge
                        & experience as a self-taught programmer.
                    </p>
                    <p>
                        I&lsquo;ve over{" "}
                        {Number(new Date().getFullYear()) - Number(new Date(2016))} years of
                        programming experience & working with clients from various
                        backgrounds. So, if you own a business & need an experienced helping
                        hand, feel free to reach out to me with your queries! And I am sure
                        we work out some solution for any particular business problem you
                        are trying to resolve.
                    </p>

                    <h2>About My Tool Belt</h2>

                    <p>
                        Over the years I have had ample opportunities to work with countless
                        technologies. And while I enjoy working with some, there are others
                        which feels like a chore to deal with. Regardless, here is a list of
                        all the tools & services I have at my disposal when developing
                        software.
                    </p>

                    <h3>Programming Languages</h3>

                    <ol>
                        <li>
                            <a
                                href="https://www.python.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Python
                            </a>{" "}
                            for scripting & backend development like building REST APIs.
                        </li>
                        <li>
                            <a
                                href="https://www.typescriptlang.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                TypeScript
                            </a>{" "}
                            for working on React.js-based projects.
                        </li>
                        <li>
                            <a
                                href="https://www.lua.org"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Lua
                            </a>{" "}
                            for scripting Neovim & other small-scale embedded projects.
                        </li>
                        <li>
                            <a
                                href="https://go.dev"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Golang
                            </a>{" "}
                            for when a project needs to be compiled & be fast to execute.
                        </li>
                    </ol>

                    <h3>Frameworks & Libraries</h3>

                    <ol>
                        <li>
                            <a
                                href="https://nextjs.org"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Next.js
                            </a>{" "}
                            the React.js-based framework for building well-optimised
                            Server-Side Rendered (SSR) & Client-Side Rendered (CSR) websites.
                        </li>

                        <li>
                            <a
                                href="https://fastapi.tiangolo.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                FastAPI
                            </a>{" "}
                            the asynchronous & super-fast Python framework for building REST
                            APIs.
                        </li>

                        <li>
                            <a
                                href="https://tailwindcss.org"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                TailwindCSS
                            </a>{" "}
                            for styling frontend projects because aligning divs with vanilla
                            CSS is a painful task.
                        </li>

                        <li>
                            <a
                                href="https://chakra-ui.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Chakra-UI
                            </a>{" "}
                            which is a read-to-use React Component library meant for
                            situations where speedy development is of utmost importance.
                        </li>

                        <li>
                            <a
                                href="https://sass-lang.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                SASS
                            </a>{" "}
                            which is a CSS pre-processor & superscript to be used when writing
                            CSS can potentially become a chore.
                        </li>
                    </ol>

                    <h3>Other Development Tools</h3>

                    <p>
                        Software Developers are never complete without their preferred
                        tools. And apart from the few mentioned above, there are other
                        non-development tools which are equally important to complete
                        day-to-day tasks as well. Hence, following are the few tools I
                        employ on a regular basis:
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
                            developing software.
                        </li>

                        <li>
                            <a
                                href="https://code.visualstudio.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Visual Studio Code (VSCode)
                            </a>{" "}
                            for the preferred Integrated-Development Environment (IDE) needs.
                        </li>

                        <li>
                            <a
                                href="https://neovim.io"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Neovim
                            </a>{" "}
                            as my primary &quot;daily driver&quot; to write code.
                        </li>

                        <li>
                            <a
                                href="https://www.docker.com"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Docker
                            </a>{" "}
                            for deploying my software to the cloud and/or containerising local
                            development environments.
                        </li>
                    </ol>
                </article>
            </main>
        </>
    );
}

export default AboutPage;
