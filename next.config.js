/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: false,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/ieuzfrsmi9x51sf7h5qoyk14bfrxfo.html",
      },
    ];
  },
};

module.exports = nextConfig;
