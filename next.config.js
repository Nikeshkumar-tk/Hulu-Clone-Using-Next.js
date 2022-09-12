/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["image.tmdb.org","image.google.com"]
}
}


module.exports =nextConfig
