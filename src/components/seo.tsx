import Head from "next/head";

import { baseUrl } from "@constants/navlinks";

type PropTypes = {
  title?: string;
  desc: string;
  url?: string;
  image: string;
  imageAlt: string;
};

function Seo({ title, desc, url, image, imageAlt }: PropTypes) {
  return (
    <Head>
      <title>{title ? `${title} | Somraj Saha` : "Somraj Saha"}</title>
      <meta name="description" content={desc} />
      <meta
        property="og:url"
        content={url ? `https://${baseUrl}${url}` : `https://${baseUrl}`}
      />
      <meta
        property="og:title"
        content={title ? `${title} | Somraj Saha` : "Somraj Saha"}
      />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jarmos.vercel.app" />
      <meta
        property="twitter:url"
        content={url ? `https://${baseUrl}${url}` : `https://${baseUrl}`}
      />
      <meta
        name="twitter:title"
        content={title ? `${title} | Somraj Saha` : "Somraj Saha"}
      />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@Jarmosan" />
      <meta name="twitter:creator" content="@Jarmosan" />
    </Head>
  );
}

export default Seo;
