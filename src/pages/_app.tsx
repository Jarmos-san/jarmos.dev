import { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import Footer from "@components/footer";
import Navbar from "@components/navbar";
import "@styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "optional",
  subsets: ["latin"],
  variable: "--font-poppins",
});

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.variable} flex min-h-screen flex-col bg-blue-10`}
    >
      <Navbar />
      <main className="my-24 flex-grow space-y-32">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default RootApp;
