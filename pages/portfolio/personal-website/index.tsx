import Seo from "../../../components/seo";
import styles from "./personal-website.module.scss";

function PersonalWebsitePage() {
  return (
    <>
      <Seo
        description="The portfolio page for the work Somraj Saha put in to developing his personal website"
        imageHref=""
        imageAlt=""
      />
      <article className={styles.container}>
        <h1>jarmos.dev</h1>
        <span>
          (
          <a href="https://jarmos.vercel.app" target="_blank" rel="noreferrer">
            Website
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Jarmos-san/jarmos.dev"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
          )
        </span>

        <p>
          The website you are reading right now? This is a personal project I
          built from scratch as well! It&apos;s a culmination of multiple
          efforts over the years to build a website for promoting my online
          presence. What you see is the final rendition of all those efforts.
        </p>

        <p>
          The tech-stack for the project is:
          <ul>
            <li>
              <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                Next.js
              </a>{" "}
              for building a{" "}
              <a
                href="https://beta.reactjs.org"
                target="_blank"
                rel="noreferrer"
              >
                React.js
              </a>
              -based website.
            </li>
            <li>
              <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                SASS
              </a>{" "}
              for customising the aesthetics & designs of the website.
            </li>
            <li>
              <a href="https://vercel.com" target="_blank" rel="noreferrer">
                Vercel
              </a>{" "}
              for deploying & hosting the website for online visitors to check
              it out on.
            </li>
          </ul>
        </p>

        <p>
          Previous versions of the personal website used tools like{" "}
          <a href="https://gohugo.io" target="_blank" rel="noreferrer">
            Hugo
          </a>{" "}
          which was very difficult to customise without prior knowledge in its{" "}
          <a
            href="https://gohugo.io/templates/introduction"
            target="_blank"
            rel="noreferrer"
          >
            templating engine
          </a>
          . But using the aforementioned tech stack allowed for granular control
          on the design & functionality of the end product.
        </p>
      </article>
    </>
  );
}

export default PersonalWebsitePage;
