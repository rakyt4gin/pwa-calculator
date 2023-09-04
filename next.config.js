/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");

const nextConfig = {
    ...withPWA({
        dest: "public",
        register: true,
        skipWaiting: true,
    }),
};

module.exports = nextConfig;
