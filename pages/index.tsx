import CtaSection from "../components/cta";
import Footer from "../components/footer";
import Header from "../components/header";

function HomePage() {
    return (
        <>
            <title>Somraj Saha</title>
            <div className="container">
                <Header />
                <CtaSection />
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
