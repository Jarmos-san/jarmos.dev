import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./layout.module.scss";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;
