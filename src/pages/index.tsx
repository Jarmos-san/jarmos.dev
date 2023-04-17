import CtaSection from "@components/cta";
import HeaderSection from "@components/header";
import ProjectSection from "@components/projects";
import Seo from "@components/seo";

function HomePage() {
  return (
    <>
      <Seo
        description="Somraj Saha, a self-taught Senior Software Engineer &
        Technical Writer."
        imageHref="/assets/logo-1200-630.svg"
        imageAlt="Profile picture of the personal website."
      />
      <HeaderSection />
      <ProjectSection />
      <CtaSection />
    </>
  );
}

export default HomePage;
