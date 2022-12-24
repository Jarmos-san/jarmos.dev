import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./layout.module.scss";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
