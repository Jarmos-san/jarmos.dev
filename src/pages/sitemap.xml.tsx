import { GetServerSideProps } from "next";

import { baseUrl, navlinks } from "@constants/navlinks";

function generateSitemap() {
  // TODO: Refactor the template below to be dynamic
  const sitemapTemplate = `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      <url>
        <loc>https://${baseUrl}/</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/about</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/portfolio/jefer</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/portfolio/personal-website</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/portfolio/devsindia.in</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/privacy-policy</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>0.30</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/terms-and-conditions</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>0.30</priority>
      </url>
      <url>
        <loc>https://${baseUrl}/license</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>0.30</priority>
      </url>
    </urlset>
  `;

  return sitemapTemplate;
}

// A void functional component is necessary for Next.js to invoke the
// "getServerSideProps" function
function Sitemap() {}

// This function generates the "sitemap.xml" file from the template above &
// serves at request time.
export const getServerSideProps: GetServerSideProps = async ({
  res,
}): Promise<{ props: {} }> => {
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
