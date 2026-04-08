import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "ghchart.rshah.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
