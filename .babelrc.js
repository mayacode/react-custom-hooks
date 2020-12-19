const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
        firefox: 52,
        ie: 11,
        chrome: 64,
      },
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript'
];
let plugins = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-proposal-optional-chaining',
];

module.exports = { presets, plugins };
