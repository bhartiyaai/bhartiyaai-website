import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/kisan',
        destination: 'https://wa.me/918968228172?text=%F0%9F%99%8F%20Namaste%20Kisan%20AI!%20Main%20apni%20kheti%20ke%20baare%20mein%20jaanna%20chahta%20hoon.',
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
