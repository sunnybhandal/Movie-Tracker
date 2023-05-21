/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI:
      "mongodb+srv://sunnybhandal:Sb297077005@cluster0.lpvd792.mongodb.net/movie-tracker",
    NEXTAUTH_SECRET: "mysecret",
    API_KEY: "7aea79b68f5f012f3ce9164418062533",
  },
};

module.exports = nextConfig;
