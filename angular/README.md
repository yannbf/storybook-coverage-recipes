# Angular

## Setting up coverage

Install `@jsdevtools/coverage-istanbul-loader` and register it as part of Storybook's webpack config:

```js
// .storybook/main.js
module.exports = {
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
```

Once you've done that, you should check whether the instrumentation is happening correctly. To do so:

1. Open your Storybook
2. Open developer tools
3. Select the `storybook-preview-iframe` as a target
4. Type `__coverage__` and see if it evaluates to an object containing information about your components. If it does, then you're good to go!

![](coverage-object.png)

## Generating coverage

You will need to have the `@storybook/test-runner` installed. The test runner visits a running Storybook, so you will have to run Storybook and after that, execute the test runner with the `--coverage` flag enabled:

```sh
yarn storybook
```
then

```sh
yarn test-storybook --coverage
```

As a result, you should see the report in the CLI:

![](coverage-cli.png)