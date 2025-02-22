import type { NextConfig } from "next";

// Define the Next.js configuration object
const nextConfig: NextConfig = {
  // Use "standalone" mode to optimize the build for deployment in Docker or other containerized environments.
  // This mode generates a minimal production build with the necessary Node.js files and dependencies.
  // output: "standalone",
  // Uncomment the line below and comment out "standalone" if you want to export the project as static files.
  // This is useful for deploying to static hosting services like Vercel, Netlify, or AWS S3.
  output: "export",
};

export default nextConfig;
