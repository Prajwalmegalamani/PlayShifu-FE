import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["localhost", "127.0.0.1", "unsplash.com"],
  },
};

export default nextConfig;
