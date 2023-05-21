/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI:
      "mongodb+srv://sunnybhandal:Sb297077005@cluster0.lpvd792.mongodb.net/next13-auth",
    NEXTAUTH_SECRET: "mysecret",
  },
};

module.exports = nextConfig;
