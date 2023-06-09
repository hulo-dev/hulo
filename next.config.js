/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    trailingSlash: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    output: 'export',
    images: { unoptimized: true },
    env:{
      REACT_APP_CONVERTKIT_API_KEY:'vq_IA5HkNGRzDNeSnOmWyA',
      REACT_APP_CONVERTKIT_FORM_ID:2923707
    }
}

module.exports = nextConfig
