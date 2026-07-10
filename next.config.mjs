/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // NOTE: when multiple rules match a path, the LAST matching rule wins for
    // the same header key — keep the catch-all first and /_next/static last.
    return [
      {
        // Never let proxies/CDNs (Hostinger's cache layer) hold on to page HTML.
        // Stale HTML references old chunk hashes that no longer exist after a
        // redeploy, which 404s and crashes the app on hard reload.
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
      {
        // Hashed build assets are content-addressed — safe to cache forever.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};
export default nextConfig;
