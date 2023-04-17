/** @type {import('next').NextConfig} */
const path = require("path");

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

const nextConfig = {
  images: {
    domains: ["flowbite.com"],
  },
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

module.exports = nextConfig;
