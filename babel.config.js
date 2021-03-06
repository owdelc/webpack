const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: "3",
    },
  ],
];

const plugins = [
  "@babel/plugin-transform-arrow-functions"
];

module.exports = { presets };
