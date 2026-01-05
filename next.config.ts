import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompressor: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sportmonks.com",
      },
    ],
  },
};

export default nextConfig;
