module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      "react-native-classname-to-style",
      [
        "react-native-platform-specific-extensions",
        { extensions: ["scss", "sass"] },
      ],
    ],
  };
};
