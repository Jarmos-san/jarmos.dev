import { PropsWithChildren } from "react";

import Footer from "@components/footer";
import Navbar from "@components/navbar";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
