import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Ensure server actions work properly
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Don't fail build if env vars are missing (they'll be checked at runtime)
  env: {},
};

export default nextConfig;
