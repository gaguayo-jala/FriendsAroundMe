module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~atoms': './src/components/atoms',
          '~shared': './src/components/shared',
          '~features': './src/features',
          '~services': './src/services',
          '~styles': './src/styles',
          '~navigation': './src/navigation',
          '~state': './src/state',
          '~store': './src/store',
          '~models': './src/models',
          '~constants': './src/constants',
          '~infrastructure': './src/infrastructure',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
