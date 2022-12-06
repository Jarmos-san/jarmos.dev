import styles from "./projects.module.scss";

function ProjectsSection() {
    return (
        <section className={styles.container}>
            <h2>Projects</h2>

            <div className={styles.wrapper}>
                <div className={styles.projectCardOne}>
                    <h3>Jefer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
                        vehicula justo. Donec facilisis dapibus orci, ac porttitor nulla
                        luctus sit amet. Ut quis eros dapibus, vulputate magna ut, rutrum
                        sem.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
                        vehicula justo. Donec facilisis dapibus orci, ac porttitor nulla
                        luctus sit amet. Ut quis eros dapibus, vulputate magna ut, rutrum
                        sem.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
                        vehicula justo. Donec facilisis dapibus orci, ac porttitor nulla
                        luctus sit amet. Ut quis eros dapibus, vulputate magna ut, rutrum
                        sem.
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
