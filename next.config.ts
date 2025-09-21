/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 👈 force Webpack
  },
};

export default nextConfig;