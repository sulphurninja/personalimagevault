/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig:{
      // Will only be available on the server side
      apiMaxBodySize: '10mb', // Adjust the value as needed
  
  }
}



module.exports = nextConfig
