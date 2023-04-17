import CallToAction from "@components/cta";
import Header from "@components/header";
import ProjectSection from "@components/projects";
import Seo from "@components/seo";

function HomePage() {
  return (
    <>
      <Seo
        desc="The personal website of Somraj Saha who is a Full-Stack Software
        Engineer and is working independently to provide value services to
        startup founders & business owners."
        image="/assets/logo-1200-630.svg"
        imageAlt="The logo of the personal website"
      />
      <Header />
      <ProjectSection />
      <CallToAction />
    </>
  );
}

export default HomePage;
