import CallToAction from "@components/cta";
import Header from "@components/header";
import ProjectSection from "@components/projects";
import Seo from "@components/seo";
import WritingsSection from "@components/writings";

function HomePage() {
  return (
    <>
      <Seo
        desc="The personal website of Somraj Saha who is a Full-Stack Software
        Engineer and is working independently to provide value services to
        startup founders & business owners."
        image="https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"
        imageAlt="The logo of the personal website"
      />
      <Header />
      <WritingsSection />
      <ProjectSection />
      <CallToAction />
    </>
  );
}

export default HomePage;
