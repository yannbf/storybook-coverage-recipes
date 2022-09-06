const istanbul = require('vite-plugin-istanbul')

const constants = require('@storybook/addon-coverage/dist/cjs/constants')

const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      // customize the Vite config here
      build: {
        sourcemap: true,
      },
      plugins: [
        istanbul({
          exclude: constants.defaultExclude,
          extension: constants.defaultExtensions,
        }),
      ],
    })
  },
}
