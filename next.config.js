/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add more domains here if needed
      // {
      //   protocol: "https",
      //   hostname: "your-cdn.com",
      // },
    ],
  },
};
