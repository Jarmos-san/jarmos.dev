import { PropsWithChildren } from "react";

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import Footer from "@components/layout/footer";
import Navbar from "@components/layout/navbar";
import "@styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Somraj Saha",
    template: "%s | Somraj Saha",
  },
  description: `The personal website of Somraj Saha who is a Full-Stack Software
  Engineer and is working independently to provide value services to
  startup founders & business owners.`,
  generator: "Next.js",
  applicationName: "Somraj Saha",
  referrer: "origin-when-cross-origin",
  keywords: ["software engineer", "software developer", "web developer"],
  creator: "Somraj Saha",
  publisher: "Somraj Saha",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jarmos.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Somraj Saha",
    description: `The personal website of Somraj Saha who is a Full-Stack Software
    Engineer and is working independently to provide value services to
    startup founders & business owners.`,
    url: "https://jarmos.dev/",
    siteName: "Somraj Saha",
    images: [
      {
        url: "https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg",
        alt: "The logo of the personal website",
      },
    ],
    type: "website",
  },
  robots: {
    googleBot: {
      index: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Somraj Saha",
    description: `The personal website of Somraj Saha who is a Full-Stack Software
    Engineer and is working independently to provide value services to
    startup founders & business owners.`,
    creator: "@Jarmosan",
    images: ["https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"],
  },
  verification: {
    // INFO: Google Search Console Verification ID
    google: "M0ZkOwR8huIlDkph37Gt2Wf9w7JcwmM1g64OTfJRmBQ",
  },
  appleWebApp: {
    title: "Somraj Saha",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-touch-icon.png",
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  assets: ["https://jarmos.dev/assets"],
  category: "technology",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={poppins.className}>
      <body className="flex min-h-screen flex-col bg-blue-10">
        <Navbar />
        <main className="my-8 flex-grow space-y-16 md:my-24">{children}</main>
        <Footer />
      </body>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "392941b3f13c4678bb21cdb0fadafe91"}'
      />
    </html>
  );
};

export default RootLayout;
