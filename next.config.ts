import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ugcbymysbah.com" }],
        destination: "https://ugcbymysbah.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ugcbymysbah.vercel.app" }],
        destination: "https://ugcbymysbah.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    const previewHeaders =
      process.env.VERCEL_ENV === "preview"
        ? [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }]
        : [];

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...previewHeaders,
        ],
      },
    ];
  },
};

export default nextConfig;
