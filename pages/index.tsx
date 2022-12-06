import Head from "next/head";

import CtaSection from "../components/cta";
import Header from "../components/header";

import ProjectsSection from "../components/projects";

function HomePage() {
    return (
        <main>
            <Head>
                <title>Somraj Saha</title>
            </Head>

            <Header />

            <ProjectsSection />

            <CtaSection />
        </main>
    );
}

export default HomePage;
