import { PropsWithChildren } from "react";

import { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "@components/layout/footer";
import Navbar from "@components/layout/navbar";
import "@styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "optional",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-blue-10">
        <Navbar />
        <main className="my-8 flex-grow space-y-16 md:my-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
