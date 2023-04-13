import { AppProps } from "next/app";

import Footer from "@components/footer";
import Navbar from "@components/navbar";
import "@styles/globals.css";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.variable} flex min-h-screen flex-col bg-blue-10`}
    >
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default RootApp;
