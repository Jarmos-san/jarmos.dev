import CallToAction from "@components/front-page/cta";
import Header from "@components/front-page/header";
import ProjectSection from "@components/front-page/projects";
import WritingsSection from "@components/front-page/writings";

const HomePage = () => {
  return (
    <>
      <Header />
      <WritingsSection />
      <ProjectSection />
      <CallToAction />
    </>
  );
};

export default HomePage;
