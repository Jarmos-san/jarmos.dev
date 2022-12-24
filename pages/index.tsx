import Head from "next/head";

import CtaSection from "../components/cta";
import HeaderSection from "../components/header";
import ProjectSection from "../components/projects";

function HomePage() {
  return (
    <>
      <Head>
        <title>Somraj Saha</title>
      </Head>
      <HeaderSection />
      <ProjectSection />
      <CtaSection />
    </>
  );
}

export default HomePage;
