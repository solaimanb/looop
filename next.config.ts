import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [""],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ["shadcn/ui"],
  },
};

export default nextConfig;
