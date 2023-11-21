import { Metadata } from "next";

const description = `Distribution and licensing rights of using Somraj Saha's
  personal website`;

export const metadata: Metadata = {
  title: "Licensing and Distribution Rights",
  description: description,
  alternates: {
    canonical: "/distribution-rights",
  },
  openGraph: {
    title: "Licensing and Distribution Rights | Somraj Saha",
    description: description,
    url: "https://jarmos.dev/distribution-rights",
    siteName: "Somraj Saha",
    images: [
      {
        url: "https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg",
        alt: "The logo of the personal website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensing and Distribution Rights | Somraj Saha",
    description: description,
    creator: "@Jarmosan",
    images: ["https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"],
  },
  appleWebApp: {
    title: "Licensing and Distribution Rights | Somraj Saha",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-touch-icon.png",
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};

const LicensePage = () => {
  return (
    <article
      className="container mx-auto max-w-screen-sm space-y-4 px-5 text-white-10
      lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <h1 className="text-3xl font-extrabold text-green-10">
        Licensing and Distribution Rights
      </h1>

      <p>
        The enitirety of the project you are seeing right now is made available
        for public usage under an open-source license. The contents and the
        source code of the website as well is made available for public
        scrutiny. In other words, you are free to view, use, modify everything
        related to this project as long as you adhere to certain usage terms
        &amp; conditions (T&amp;Cs). This page of the website details in brief
        the T&amp;Cs you need to be aware while consuming the contents of the
        website.
      </p>

      <h2 className="text-xl font-extrabold text-green-10">
        Usage Rights of the Source Code
      </h2>

      <p>
        The{" "}
        <a
          href="https://github.com/Jarmos-san/jarmos.dev"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          source code
        </a>{" "}
        of the project is hosted in a public GitHub repository. And hence is
        licensed under the open-source MIT License. As such you can check out
        the source code to:
      </p>

      <ol className="ml-9 list-outside list-decimal leading-loose">
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
        That said, you can read more about the licensing &amp; usage T&amp;Cs in
        the{" "}
        <a
          href="https://github.com/Jarmos-san/personal=website/blob/main/LICENSE"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          LICENSE
        </a>{" "}
        document.
      </p>

      <h2 className="text-xl font-extrabold text-green-10">
        Usage Rights of the Website Content
      </h2>

      <p>
        This website contains a lot of technical &amp; literary content meant
        for educating the readers on certain topics related to Computer Science
        &amp; programming. All such contents are released &amp; made available
        in the public domain as well! In other words, you as a reader/consumer
        are free to use, modify &amp; distribute the content as long as you
        adhere to the T&amp;Cs of the license the articles are distributed
        under.
      </p>

      <p>
        That said, the open-source license in question is the{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0"
          target="_blank"
          className="underline underline-offset-4 hover:text-green-10"
        >
          CC BY 4.0
        </a>
        . And you are free to use, distribute and/or modify the contents of this
        website as long as you adhere to the said license.
      </p>
    </article>
  );
};

export default LicensePage;
