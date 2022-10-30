import CtaSection from "../components/cta";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

function HomePage() {
    return (
        <>
            <title>Somraj Saha</title>
            <div className="container">
                <Navbar />
                <Header />
                <CtaSection />
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
