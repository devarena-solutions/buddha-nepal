/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["se", "en"],
    defaultLocale: "se",
    localeDetection: false,
  },
  reactStrictMode: true,
  env: {
    //GOOGLE_API: process.env.NEXT_PUBLIC_GOOGLE_API,
  },
  output: 'export'
};

module.exports = nextConfig;
