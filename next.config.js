/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    trailingSlash: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    output: 'export',
    images: { unoptimized: true }
}

module.exports = nextConfig
