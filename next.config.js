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
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
// })
module.exports = withMDX({
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
