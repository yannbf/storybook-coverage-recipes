# Svelte + Vite

- [Open in stackblitz](https://stackblitz.com/github/yannbf/storybook-coverage-recipes/tree/main/svelte_vite?preset=node)

### Bug

Because of this line of code in nyc: https://github.com/istanbuljs/nyc/blob/ab7c53b2f340b458789a746dff2abd3e2e4790c3/index.js#L433
The report is removing .svelte files. If that line of code is commented out, then it works correctly. My feeling is that sourcemaps are not working properly in Svelte + Storybook. 


## Setting up coverage

Install `vite-plugin-istanbul` and register it in your `.storybook/main.js` file.
Optionally, use defaults from `@storybook/addon-coverage/dist/cjs/constants` so you can exclude files.

```js
// .storybook/main.js
const istanbul = require('vite-plugin-istanbul');
// get default config from addon-coverage – no need to register it
const constants = require('@storybook/addon-coverage/dist/cjs/constants');

module.exports = {
  // ...
  async viteFinal(config) {
    // enable sourcemaps for istanbul
    config.build ||= {};
    config.build.sourcemap = true;
    config.plugins.push(istanbul({
      exclude: constants.defaultExclude,
      extension: constants.defaultExtensions
    }));
    // customize the Vite config here
    return config;
  },
}
```

Alternative syntax using `mergeConfig` from vite:

```js
// .storybook/main.js
const { mergeConfig } = require('vite');
const istanbul = require('vite-plugin-istanbul');
// get default config from addon-coverage – no need to register it
const constants = require('@storybook/addon-coverage/dist/cjs/constants');

module.exports = {
  // ...
  async viteFinal(config) {
    return mergeConfig(config, {
      // customize the Vite config here
      build: {
        sourcemap: true
      },
      plugins: [
        istanbul({
          exclude: constants.defaultExclude,
          extension: constants.defaultExtensions
        })
      ]
    });
  },
}
```

### Setup nycrc.json

Because svelte uses a different file extension, you need to setup a `nycrc.json` file to tell nyc to consider svelte files:

```json
{
  "extension": [".svelte"]
}
```

## Generating coverage

You will need to have the `@storybook/test-runner` installed. After that, just run the following command:

```sh
yarn test-storybook --coverage
```

![](coverage-cli.png)

### Caveat

If there's an error reported in the CLI, there is a lot of noise in the output:

![](instrumented-error.png)