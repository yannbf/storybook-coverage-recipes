# Angular

## Setting up coverage

Install `istanbul-instrumenter-loader` and register it as part of Storybook's webpack config:

```js
// .storybook/main.js
module.exports = {
  webpackFinal: async (config) => {
    const rules = config.module?.rules || [];
    rules.push(
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: require('path').join(__dirname, '..', 'src'),
        exclude: [
          /\.(e2e|spec|stories)\.ts$/,
          /node_modules/,
          /polyfills\.ts/,
          /preview\.js/,
          /(ngfactory|ngstyle)\.js/,
        ],
      });

    config.module = config.module || {};
    config.module.rules = rules;

    return config;
  }
}
```

## Generating coverage

You will need to have the `@storybook/test-runner` installed. After that, just run the following command:

```sh
yarn test-storybook --coverage
```

![](coverage-cli.png)