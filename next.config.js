/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const buildDate = new Date().toISOString().slice(0, 10);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: {
    APP_VERSION: process.env.npm_package_version,
    BUILD_DATE: buildDate,
  },
});
