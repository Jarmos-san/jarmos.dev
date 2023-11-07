import createMDX from "@next/mdx";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  // Info about the security headers are available at:
  // https://nextjs.org/docs/advanced-features/security-headers
  async headers() {
    return [
      {
        // Apply the security headers to all routes of the website
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
