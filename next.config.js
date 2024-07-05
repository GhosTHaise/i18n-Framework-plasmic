const { i18n } = require("./next-i18next.config.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  i18n,
};

module.exports = nextConfig;