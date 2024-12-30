/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'otakudesu.cloud',
        port: '',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['undici']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      undici: require.resolve('undici')
    }
    return config
  }
};

const withPWA = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

module.exports = withPWA(nextConfig);