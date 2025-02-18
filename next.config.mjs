/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "assets.aceternity.com",
          },          
          {
            protocol: "https",
            hostname: "pbs.twimg.com",
          },          
        ],
      },
};

export default nextConfig;
