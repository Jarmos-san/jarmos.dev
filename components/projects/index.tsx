import styles from "./projects.module.scss";

function ProjectsSection() {
    return (
        <section className={styles.container}>
            <h2>Projects</h2>

            <div className={styles.wrapper}>
                <div className={styles.projectCardOne}>
                    <h3>Jefer</h3>
                    <p>
                        A simple, minimal & intuitive &ldquo;dotfiles&ldquo; manager written
                        in Python. This project was created for a true cross-platform
                        experience while managing dotfiles & giving more decision-making
                        power to the user instead.
                    </p>
                    <a
                        href="https://github.com/Jarmos-san/jefer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More...
                    </a>
                </div>

                <div className={styles.projectCardTwo}>
                    <h3>Jarmos.dev</h3>
                    <p>
                        A open-source personal website & blog created using Next.js & SASS.
                        This project is the final iteration of the countless previous
                        experimentations I performed to create an ideal personal website.
                    </p>
                    <a
                        href="https://github.com/Jarmos-san/personal-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More...
                    </a>
                </div>

                <div className={styles.projectCardThree}>
                    <h3>devsindia.in</h3>
                    <p>
                        The official landing page for the r/developersIndia Reddit
                        community. The project was created using Next.js, SASS & TypeScript.
                        This project was created in hopes to gather more organic traffic.
                    </p>
                    <a
                        href="https://github.com/developersIndia/website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More...
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
