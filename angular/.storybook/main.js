const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
  ],
  framework: '@storybook/angular',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const rules = config.module?.rules || []
    rules.push({
      test: /\.(js|ts)$/,
      loader: '@jsdevtools/coverage-istanbul-loader',
      enforce: 'post',
      include: path.join(process.cwd(), 'src'),
      exclude: [
        /\.(e2e|spec|stories)\.ts$/,
        /node_modules/,
        /(ngfactory|ngstyle)\.js/,
        /polyfills.ts/
      ],
    })

    config.module = config.module || {}
    config.module.rules = rules

    return config
  },
}
