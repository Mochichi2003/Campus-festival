// module.exports = {
//   assetPrefix: "/Campus-festival",
// };
module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
