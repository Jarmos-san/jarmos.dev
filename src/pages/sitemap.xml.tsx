// INFO: More information about generating a dynamic sitemap.xml file are available at:
// - https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
// https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
import { GetServerSideProps } from "next";

import { BASE_URL } from "@constants/constants";

// Utlity function to generate the XML data dynamically.
function generateSiteMap() {
  // TODO: Dynamically add a constant list of pages to the sitemap.
  // TODO: Dynamically generate & update the sitemap with the list of blog posts.
  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      <url>
        <loc>https://${BASE_URL}/</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/about</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/portfolio/jefer</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/portfolio/personal-website</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/portfolio/devsindia.in</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/privacy-policy</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>0.30</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/terms-and-conditions</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>0.30</priority>
      </url>
      <url>
        <loc>https://${BASE_URL}/license</loc>
        <lastmod>2023-01-27T08:36:44+00:00</lastmod>
        <priority>0.30</priority>
      </url>
    </urlset>`;
}

// React component which renders nothing but is neccessary for the "getServerSideProps"
// function to be invoked by Next.js during build time.
function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
