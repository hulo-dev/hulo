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
      REACT_APP_CONVERTKIT_API_KEY: 'vq_IA5HkNGRzDNeSnOmWyA',
      REACT_APP_CONVERTKIT_FORM_ID: 2923707,
      API_CONVERTKIT_SUBSCRIBE: 'https://api.convertkit.com/v3/forms/2923707/subscribe'
    }
}

module.exports = nextConfig
