import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


  images: {
    qualities: [100, 25, 50, 75],
    remotePatterns: [
      new URL("https://covers.openlibrary.org/b/isbn/**"),
    ]
  },

};

export default nextConfig;
