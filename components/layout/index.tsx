import Footer from "../footer";
import Navbar from "../navbar";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;
