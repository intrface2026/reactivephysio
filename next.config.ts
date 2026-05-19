import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/join",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
