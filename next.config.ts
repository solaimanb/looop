import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ["shadcn/ui"],
  },
};

export default nextConfig;
