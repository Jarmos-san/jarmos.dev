import { Head, Html, Main, NextScript } from "next/document";

function RootDocument() {
  return (
    <Html lang="en" prefix="og:http://ogp.me/ns#">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="AiaidznSitBntpVbXH-dJgi83ziDyqN2LBaK6HX1NK0"
        />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "392941b3f13c4678bb21cdb0fadafe91"}'
        ></script>
      </Head>
      <body className="bg-blue-10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default RootDocument;
