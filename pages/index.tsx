import Head from "next/head";

import CtaSection from "../components/cta";
import HeaderSection from "../components/header";
import ProjectSection from "../components/projects";

function HomePage() {
  return (
    <>
      <Head>
        <title>Somraj Saha</title>
        <meta property="og:url" content="https://jarmos.vercel.app" />
        <meta property="og:title" content="Somraj Saha" />
        <meta
          property="og:description"
          content="Somraj Saha, a self-taught Senior Software Engineer & Technical Writer."
        />
        <meta
          property="og:image"
          content="https://jarmos.vercel.app/assets/profile.jpeg"
        />
        <meta
          property="og:image:alt"
          content="Profile picture of Somraj Saha"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jarmos.vercel.app" />
        <meta property="twitter:url" content="https://jarmos.vercel.app" />
        <meta name="twitter:title" content="Somraj Saha" />
        <meta
          name="twitter:description"
          content="Somraj Saha, a self-taught Senior Software Engineer & Technical Writer."
        />
        <meta
          name="twitter:image"
          content="https://jarmos.vercel.app/assets/profile.jpeg"
        />
        <meta
          property="twitter:image:alt"
          content="Profile picture of Somraj Saha"
        />
        <meta name="twitter:site" content="@Jarmosan" />
        <meta name="twitter:creator" content="@Jarmosan" />
      </Head>
      <HeaderSection />
      <ProjectSection />
      <CtaSection />
    </>
  );
}

export default HomePage;
