import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizer returns corrupt responses on this volume; serve originals directly.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
