import { PropsWithChildren } from "react";

import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./layout.module.scss";

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
