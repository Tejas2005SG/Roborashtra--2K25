/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      domains: ['drive.google.com'],
    },
    reactStrictMode: true,
  swcMinify: true,
  swcMinifyOptions: {
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false,
        },
      },
    },
  },
};
  