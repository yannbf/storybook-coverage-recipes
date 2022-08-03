# Vue3 + Webpack

- [Open in stackblitz](https://stackblitz.com/github/yannbf/storybook-coverage-recipes/tree/main/vue3?preset=node)

## Setting up coverage

Install the `@storybook/addon-coverage` addon and register it.

```js
// .storybook/main.js
module.exports = {
  addons: ["@storybook/addon-coverage"]
}
```

Once you've done that, you should check whether the instrumentation is happening correctly. To do so:

1. Open your Storybook
2. Open developer tools
3. Select the `storybook-preview-iframe` as a target
4. Type `__coverage__` and see if it evaluates to an object containing information about your components. If it does, then you're good to go!

![](coverage-object.png)

### Setup nycrc.json

Because vue uses a different file extension, you need to setup a `.nycrc.json` file to tell nyc to consider vue files:

```json
{
  "extension": [".vue"]
}
```

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
