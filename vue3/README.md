# Vue3

- [Open in stackblitz](https://stackblitz.com/github/yannbf/storybook-coverage-recipes/tree/main/vue3?preset=node)

## Setting up coverage

Install the `@storybook/addon-coverage` addon and register it.

```js
// .storybook/main.js
module.exports = {
  addons: ["@storybook/addon-coverage"]
}
```

### Setup nycrc.json

Because vue uses a different file extension, you need to setup a `nycrc.json` file to tell nyc to consider vue files:

```json
{
  "extension": [".vue"]
}
```

## Generating coverage

You will need to have the `@storybook/test-runner` installed. After that, just run the following command:

```sh
yarn test-storybook --coverage
```



![](coverage-cli.png)
