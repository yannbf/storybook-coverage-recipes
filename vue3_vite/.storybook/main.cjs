const istanbul = require('vite-plugin-istanbul') // get default config from addon-coverage – no need to register it

const constants = require('@storybook/addon-coverage/dist/cjs/constants')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  async viteFinal(config) {
    config.plugins.push(
      istanbul({
        exclude: constants.defaultExclude,
        extension: constants.defaultExtensions,
      })
    ) // customize the Vite config here

    return config
  },
}
