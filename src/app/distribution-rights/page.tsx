const LicensePage = () => {
  return (
    <>
      <article
        className="container prose mx-auto max-w-screen-sm px-5
          lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <h1>Licensing &amp; Distribution Rights</h1>
        <p>
          The enitirety of the project you are seeing right now is made
          available for public usage under an open-source license. The contents
          &amp; the source code of the website as well is made available for
          public scrutiny. In other words, you are free to view, use, modify
          everything related to this project as long as you adhere to certain
          usage terms &amp; conditions (T&amp;Cs). And this page of the website
          details the usage T&amp;Cs for your reference.
        </p>
        <h2>Usage Rights of the Source Code</h2>
        <p>
          The{" "}
          <a
            href="https://github.com/Jarmos-san/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>{" "}
          of the project is hosted in a public GitHub repository. And hence is
          licensed under the open-source MIT License. As such you can check out
          the source code to:
        </p>
        <ol>
          <li>
            Fork the repository &amp; modify the source code for your specific
            requirements.
          </li>
          <li>Take inspiration for building your own personal website.</li>
          <li>Contribute, report and/or fix bugs for the project.</li>
          <li>
            Use the source code for commercial requirements (as long as you
            provide due credits to the stakeholders).
          </li>
        </ol>
        <p>
          That said, you can read more about the licensing &amp; usage T&amp;Cs
          in the{" "}
          <a
            href="https://github.com/Jarmos-san/personal=website/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            LICENSE
          </a>{" "}
          document.
        </p>
        <h2>Usage Rights of the Website Content</h2>
        <p>
          This website contains a lot of technical &amp; literary content meant
          for educating the readers on certain topics related to Computer
          Science &amp; programming. All such contents are released &amp; made
          available in the public domain as well! In other words, you as a
          reader/consumer are free to use, modify &amp; distribute the content
          as long as you adhere to the T&amp;Cs detailed in this section of the
          page.
        </p>
        <p>
          That said, the open-source license in question is the{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
          . And you are free to use, distribute and/or modify the contents of
          this website as long as you adhere to the said license.
        </p>
      </article>
    </>
  );
};

export default LicensePage;
