# webpack-base-config
使用webpack、webpack-dev-server快速搭建react开发环境

## 安装

```bash
npm install webpack-base-config --save-dev
```

## 使用

在你的项目根目录新建一个js文件（比如：`server.js`），其内容如下所示：

```js
const { webpackConfig, webpackDevServer } = require('webpack-base-config');

webpackDevServer(webpackConfig(Options));
```

为使用最新的一些es6特性，使用了babel编译，所以需要再新建一个`.babelrc`，内容如下：

```json
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["transform-runtime"],
}

```

## Options配置

```js
const Options = {
  entry: './src/index.js',  // 项目的主入口文件
  htmlTemplate: './src/index_template.html', // 你的html文件模版（使用了webpack的一个自动生成html插件，这个可以配置你的html模版）
};
```

在项目开发时，使用`node server.js`启动开发环境，浏览器访问`localhost:3000`

## Demo

[产看demo](https://github.com/AllenZeng/webpack-base-config/blob/master/example/README-zh_CN.md)
