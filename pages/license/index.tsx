import Head from "next/head";

import styles from "./license.module.scss";

function LicensePage() {
    return (
        <>
            <Head>
                <title>Licensing & Distribution Rights | Somraj Saha</title>
                <meta property="og:url" content="https://jarmos.vercel.app" />
                <meta
                    property="og:title"
                    content="Licensing & Distribution Rights | Somraj Saha"
                />
                <meta
                    property="og:description"
                    content="Licensing & distribution rights for Somraj Saha's personal website."
                />
                {/* TODO: Add a hyperlink for the image. */}
                <meta property="og:image" content="" />
                <meta
                    property="og:image:alt"
                    content="Profile picture of Somraj Saha"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_GB" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="jarmos.vercel.app" />
                <meta
                    property="twitter:url"
                    content="https://jarmos.vercel.app/license"
                />
                <meta
                    name="twitter:title"
                    content="Licensing & Distribution Rights | Somraj Saha"
                />
                <meta
                    name="twitter:description"
                    content="Licensing & distribution rights for Somraj Saha's personal website."
                />
                {/* TODO: Add a hyperlink for the image. */}
                <meta name="twitter:image" content="" />
                <meta
                    property="twitter:image:alt"
                    content="Profile picture of Somraj Saha"
                />
                <meta name="twitter:site" content="@Jarmosan" />
                <meta name="twitter:creator" content="@Jarmosan" />
            </Head>
            <article className={styles.container}>
                <h1>Licensing & Distribution Rights</h1>

                <p>
                    The enitirety of the project you are seeing right now is made
                    available for public usage under an open-source license. The contents
                    & the source code of the website as well is made available for public
                    scrutiny. In other words, you are free to view, use, modify everything
                    related to this project as long as you adhere to certain usage terms &
                    conditions (T&Cs). And this page of the website details the usage T&Cs
                    for your reference.
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
                        Fork the repository & modify the source code for your specific
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
                    That said, you can read more about the licensing & usage T&Cs in the{" "}
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
                    This website contains a lot of technical & literary content meant for
                    educating the readers on certain topics related to Computer Science &
                    programming. All such contents are released & made available in the
                    public domain as well! In other words, you as a reader/consumer are
                    free to use, modify & distribute the content as long as you adhere to
                    the T&Cs detailed in this section of the page.
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
}

export default LicensePage;
