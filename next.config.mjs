/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.media-amazon.com",
        port: "",
        search: "",
      },
    ],
=======
    domains: ["m.media-amazon.com"],
>>>>>>> origin/main
  },
};

export default nextConfig;
