module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",  
      //NF removed expo-router/babel bc it was deprecated from sdk50 and higher

      'react-native-reanimated/plugin',
    ],
  };
};
