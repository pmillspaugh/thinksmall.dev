import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trust the websites I fetch og images from
  // See: https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
