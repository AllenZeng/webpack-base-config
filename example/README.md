## the demo files structure:

```js
-- src   // the Source Code
  - App.js // the react component
  - index_template.html // the html template file
  - index.js  // the project entry file
-- server.js  // start file

```

in this demo files structure, so that the server.js code like this:

### server.js

```js
const { webpackConfig, webpackDevServer } = require('webpack-base-config');

const baseConfig = {
  entry: './src/index.js',  // entry file
  htmlTemplate: './src/index_template.html',  // the html template file
};

webpackDevServer(webpackConfig(baseConfig));

```
