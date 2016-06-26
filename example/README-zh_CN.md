## demo的文件结构:

```js
-- src   // 源文件架
  - App.js // react组件
  - index_template.html // html文件模版
  - index.js  // 入口文件
-- server.js  // 启动文件

```

`server.js` 文件的内容

### server.js

```js
const { webpackConfig, webpackDevServer } = require('webpack-base-config');

const Options = {
  entry: './src/index.js',  // 入口文件
  htmlTemplate: './src/index_template.html',  // html模版
};

webpackDevServer(webpackConfig(Options));

```

使用 `node server.js` 启动开发环境
