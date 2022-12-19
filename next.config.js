/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true,
    env :{
        BASE_URL: process.env.API_URL
    }
};

module.exports = nextConfig;
