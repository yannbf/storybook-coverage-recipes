module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
  ],
  "framework": "@storybook/react",
  features: {
    storyStoreV7: true,
  }
  // Unecessary, this is just for debugging purposes. Ignore this!
  // webpackFinal: async(config) => {
  //   config.devtool = 'source-map'

  //   return config
  // }
}
