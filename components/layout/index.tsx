import Footer from "../footer";
import Navbar from "../navbar";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
