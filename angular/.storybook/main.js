module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    const rules = config.module?.rules || []
    rules.push({
      test: /\.(js|ts)$/,
      loader: 'istanbul-instrumenter-loader',
      options: {
        esModules: true,
      },
      enforce: 'post',
      include: require('path').join(__dirname, '..', 'src'),
      exclude: [
        /\.(e2e|spec|stories)\.ts$/,
        /node_modules/,
        /(ngfactory|ngstyle)\.js/,
      ],
    })
    config.module = config.module || {}
    config.module.rules = rules
    return config
  },
}
