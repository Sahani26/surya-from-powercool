const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/services/electrician-in-:area",
        destination: "/services/electrician-in/:area",
      },
    ];
  },
};

export default nextConfig;
