// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "imagedelivery.net",
//         port: "",
//         pathname: "/reln_0zNmr7GUlRvuYhFXw/**",
//       },
//     ],
//   },
// };

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["imagedelivery.net"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
  },
};
