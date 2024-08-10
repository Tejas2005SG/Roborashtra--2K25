/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      domains: ['drive.google.com','ggayane.github.io'],
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/',
              name: '[name].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
    
};
  