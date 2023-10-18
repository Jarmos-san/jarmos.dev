import CallToAction from "@components/cta";
import Header from "@components/header";
import ProjectSection from "@components/projects";
import WritingsSection from "@components/writings";

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
