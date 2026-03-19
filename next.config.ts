import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/kisan',
        destination: 'https://wa.me/918968228172?text=HI',
        permanent: false,
      },
      {
        source: '/guru',
        destination: 'https://wa.me/918968228172?text=GURU',
        permanent: false,
      },
      {
        source: '/ca',
        destination: 'https://wa.me/918968228172?text=CAAI',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
