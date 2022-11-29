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
                            <u>
                                <strong>Python</strong>
                            </u>{" "}
                            for scripting & backend development like building REST APIs.
                        </li>
                        <li>
                            <u>
                                <strong>TypeScript</strong>
                            </u>{" "}
                            for working on React.js-based projects.
                        </li>
                        <li>
                            <u>
                                <strong>Lua</strong>
                            </u>{" "}
                            for scripting Neovim & other small-scale embedded projects.
                        </li>
                        <li>
                            <u>
                                <strong>Golang</strong>
                            </u>{" "}
                            for when a project needs to be compiled & be fast to execute.
                        </li>
                    </ol>

                    <h3>Frameworks & Libraries</h3>

                    <ol>
                        <li>
                            <u>
                                <strong>Next.js</strong>
                            </u>{" "}
                            the React.js-based framework for building well-optimised
                            Server-Side Rendered (SSR) & Client-Side Rendered (CSR) websites.
                        </li>

                        <li>
                            <u>
                                <strong>FastAPI</strong>
                            </u>{" "}
                            the asynchronous & super-fast Python framework for building REST
                            APIs.
                        </li>

                        <li>
                            <u>
                                <strong>TailwindCSS</strong>
                            </u>{" "}
                            for styling frontend projects because aligning divs with vanilla
                            CSS is a painful task.
                        </li>

                        <li>
                            <u>
                                <strong>Chakra-UI</strong>
                            </u>{" "}
                            which is a read-to-use React Component library meant for
                            situations where speedy development is of utmost importance.
                        </li>

                        <li>
                            <u>
                                <strong>SASS</strong>
                            </u>{" "}
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
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.docker.com"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Docker
                            </a>
                        </li>
                    </ol>

                    <h2 id="contact">How to Contact Me</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                        nisl at sem venenatis ultrices. Suspendisse sem urna, pharetra eu
                        dignissim rutrum, efficitur ut ante. Integer pretium hendrerit
                        sapien, eu gravida est pellentesque in. Sed luctus scelerisque lorem
                        sit amet mattis. Phasellus ultrices vestibulum tempor. Donec a
                        scelerisque urna. Aliquam ornare id quam sit amet sodales.
                        Suspendisse imperdiet condimentum suscipit. Nullam auctor vehicula
                        quam at dictum. Integer in eleifend ex. Donec et eros nec ex rutrum
                        luctus. Praesent molestie neque libero, quis venenatis metus
                        bibendum quis. Morbi dapibus quis nunc eu interdum. Proin semper
                        sapien quis magna condimentum, quis eleifend est efficitur. Aenean
                        sagittis ipsum nec turpis suscipit, sit amet dapibus tortor luctus.
                    </p>
                </article>
            </main>
        </>
    );
}

export default AboutPage;
