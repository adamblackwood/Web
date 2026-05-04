/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // تفعيل التصدير الثابت
  images: {
    unoptimized: true, // ضروري لـ Static Export
    domains: ['images.unsplash.com', 'svgur.com'],
  },
};

export default nextConfig;