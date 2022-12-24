import styles from "./projects.module.scss";

function ProjectSection() {
  return (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>

      <div className={styles.wrapper}>
        <div className={styles.cardOne}>
          <h3>Jefer</h3>

          <p>
            A simple, minimal &amp; intuitive &ldquo;dotfiles&ldquo; manager
            written in Python. This project was created for a true
            cross-platform experience to manage my dotfiles. Jefer gives back
            more decision-making responsibilities to the user unlike its
            alternatives.
          </p>

          <a
            href="https://github.com/Jarmos-san/jefer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more...
          </a>
        </div>

        <div className={styles.cardTwo}>
          <h3>Jarmos.dev</h3>

          <p>
            A open-source personal website &amp; blog created using Next.js
            &amp; SASS. This project is the final iteration of the countless
            previous experimentations I performed to create an ideal personal
            website.
          </p>

          <a
            href="https://github.com/Jarmos-san/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more...
          </a>
        </div>

        <div className={styles.cardThree}>
          <h3>devsindia.in</h3>

          <p>
            The official landing page for the r/developersIndia Reddit
            community. The project was created using Next.js, SASS &amp;
            TypeScript. This project was created in hopes to gather more organic
            traffic.
          </p>

          <a
            href="https://github.com/developersIndia/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more...
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
