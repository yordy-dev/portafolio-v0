/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/documents/cv-yordy-almerco.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="CV-Yordy-Almerco.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
