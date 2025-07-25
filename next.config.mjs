/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic optimizations
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "recharts"],
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Basic headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "color-scheme",
            value: "light dark",
          },
        ],
      },
    ];
  },
};

export default nextConfig;