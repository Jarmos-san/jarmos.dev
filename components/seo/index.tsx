import Head from "next/head";

type SeoPropTypes = {
  title?: string;
  href?: string;
  description: string;
  imageHref: string;
  imageAlt: string;
};

function Seo({ title, href, description, imageHref, imageAlt }: SeoPropTypes) {
  const baseUrl = "https://jarmos.vercel.app";

  return (
    <>
      <Head>
        <title>{title ? `${title} | Somraj Saha` : "Somraj Saha"}</title>
        <meta
          property="og:url"
          content={href ? `${baseUrl}${href}` : `${baseUrl}`}
        />
        <meta
          property="og:title"
          content={title ? `${title} | Somraj Saha` : "Somraj Saha"}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}${imageHref}`} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jarmos.vercel.app" />
        <meta
          property="twitter:url"
          content={href ? `${baseUrl}${href}` : `${baseUrl}`}
        />
        <meta
          name="twitter:title"
          content={title ? `${title} | Somraj Saha` : "Somraj Saha"}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}${imageHref}`} />
        <meta name="twitter:image:alt" content={imageAlt} />
        <meta name="twitter:site" content="@Jarmosan" />
        <meta name="twitter:creator" content="@Jarmosan" />
      </Head>
    </>
  );
}

export default Seo;
