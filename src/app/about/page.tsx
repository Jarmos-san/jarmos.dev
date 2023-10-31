import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `This is about Somraj Saha who is a Full-Stack Software Engineer and
  working as an Independent Software Developer. He works with startup founders and
  business owners to bring fresh ideas to production and serve paying customers.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Somraj Saha",
    description: `This is about Somraj Saha who is a Full-Stack Software Engineer and
    working as an Independent Software Developer. He works with startup founders and
    business owners to bring fresh ideas to production and serve paying customers.`,
    url: "https://jarmos.dev/about",
    siteName: "Somraj Saha",
    images: [
      {
        url: "https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg",
        alt: "The logo of the personal website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somraj Saha | About",
    description: `This is about Somraj Saha who is a Full-Stack Software Engineer and
    working as an Independent Software Developer. He works with startup founders and
    business owners to bring fresh ideas to production and serve paying customers.`,
    creator: "@Jarmosan",
    images: ["https://ik.imagekit.io/jarmos/tr:w-1200,h-627/logo-og.svg"],
  },
  appleWebApp: {
    title: "About | Somraj Saha",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-touch-icon.png",
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};

const AboutPage = () => {
  return (
    <article
      className="container prose mx-auto max-w-screen-sm px-5
        lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    ></article>
  );
};

export default AboutPage;
