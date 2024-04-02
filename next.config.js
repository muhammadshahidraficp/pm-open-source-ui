/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: { allowedOrigins: ['localhost'], }
  },
  productionBrowserSourceMaps: false,
};
