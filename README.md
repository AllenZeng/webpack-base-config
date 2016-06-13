# webpack-base-config
the webpack base config of react develop environment

## Install

```bash
npm install webpack-base-config --save-dev
```

## Usage

in root directory of your project create new js file and write following code:

```js
const { webpackConfig, webpackDevServer } = require('webpack-base-config');

webpackDevServer(webpackConfig(Options));
```

In order to ensure the Babel compilation, you need to create .babelrc file in your root directory

```json
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["transform-runtime"],
}

```

## Options
the options is a object, and the value like this:

```js
const Options = {
  entry: './src/index.js',  // your project entry file
  htmlTemplate: './src/index_template.html', // your html template file
};
```

## Demo

[see the usage demo](https://github.com/AllenZeng/webpack-base-config/blob/master/example/README.md)
