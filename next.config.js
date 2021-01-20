// module.exports = {
//   assetPrefix: "/Campus-festival",
// };

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
// });
// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
// });
// next.config.js
// const withMDX = require("@next/mdx")({
//   extension: /\.(md|mdx)$/,
// });
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  target: "serverless",
  webpack: function (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack }
  ) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};
// module.exports = {
//   // pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
//   target: "serverless",
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader",
//     });
//     return config;
//   },
// };
