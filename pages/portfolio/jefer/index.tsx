import Seo from "../../../components/seo";
import styles from "./jefer.module.scss";

function JeferPortfolioPage() {
  return (
    <>
      <Seo
        description="Jefer a simple, minimal & cross-platform Rust-based tool for managing your dotfiles."
        imageHref=""
        imageAlt=""
      />
      <article className={styles.container}>
        <h1>Jefer</h1>
        <span>
          (
          <a href="https://jefer.vercel.app" target="_blank" rel="noreferrer">
            Website
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Jarmos-san/jefer"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
          )
        </span>

        <p>
          Jefer is a minimal, simple & cross-platform{" "}
          <a href="https://www.rust-lang.org" target="_blank" rel="noreferrer">
            Rust
          </a>
          -based CLI tool for managing{" "}
          <a href="https://dotfiles.github.io" target="_blank" rel="noreferrer">
            <em>dotfiles</em>
          </a>
          .
        </p>
        <p>
          I built this tool because the existing solutions like{" "}
          <a
            href="https://www.gnu.org/software/stow"
            target="_blank"
            rel="noreferrer"
          >
            GNU/Stow
          </a>{" "}
          or{" "}
          <a href="https://yadm.io" target="_blank" rel="noreferrer">
            YADM
          </a>{" "}
          or{" "}
          <a href="https://chezmoi.io" target="_blank" rel="noreferrer">
            Chezmoi
          </a>{" "}
          didn&apos;t suit my needs. The said tools lacked the following
          capabilities I absolutely needed:
          <ol>
            <li>
              GNU/Stow & YADM are Unix-only tools while I work on Windows
              machines from time-to-time as well.
            </li>
            <li>
              Chezmoi was too bloated with features & for simply managing
              dotfiles, I needed something more minimal.
            </li>
            <li>A tool which didn&apos;t dictate how I managed my dotfiles.</li>
          </ol>
        </p>
        <p>
          To address the specific pain points I mentioned above, I built Jefer
          to serve my dotfiles management needs.
        </p>
        <p>
          On that note, know that Jefe&apos;s features has been greatly inspired
          from GNU/Stow which makes use of &ldquo;
          <a
            href="https://en.wikipedia.org/wiki/Symbolic_link"
            target="_blank"
            rel="noreferrer"
          >
            <em>symbolic links</em>
          </a>
          &rdquo; & I wish the other more mature tools used the same technology
          for managing dotfiles as well.
        </p>
      </article>
    </>
  );
}

export default JeferPortfolioPage;
