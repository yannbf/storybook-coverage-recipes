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

Once you've done that, you should check whether the instrumentation is happening correctly. When you run `start-storybook`, you should see a log in the terminal saying "Adding istanbul plugin to babel config".

### Setup nycrc.json

Because vue uses a different file extension, you need to setup a `.nycrc.json` file to tell nyc to consider vue files, alongside other extensions you want to be included:

```json
{
  "extension": [".vue", ".js", "jsx", ".ts", "tsx"]
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
