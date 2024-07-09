/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
      },
    ],
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com", "s3.us-west-2.amazonaws.com"]
  },
};
