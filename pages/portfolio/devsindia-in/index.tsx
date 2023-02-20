import Seo from "../../../components/seo";
import styles from "./devsindia.module.scss";

function DevsIndiaPage() {
  return (
    <>
      <Seo
        description="The community project for the r/developersIndia subreddit"
        imageHref=""
        imageAlt=""
      />
      <article className={styles.container}>
        <h1>r/developersIndia Community Website</h1>

        <span>
          (
          <a
            href="https://devsindia.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/developersIndia/website"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
          )
        </span>

        <p>
          The{" "}
          <a
            href="https://www.reddit.com/r/developersIndia"
            target="_blank"
            rel="noreferrer"
          >
            r/developersIndia
          </a>{" "}
          Reddit community is one of the largest online community on the
          Internet & yet it does not have a proper landing page for more
          community engagement & organic traffic. The website was built with
          those specific purpose in mind.
        </p>

        <p>
          Additionally since the website was meant for a community of
          developers, its development was an open-source initiative as well. And
          I headed the open-source contributions from the community members.
        </p>
      </article>
    </>
  );
}

export default DevsIndiaPage;
