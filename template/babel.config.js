module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
