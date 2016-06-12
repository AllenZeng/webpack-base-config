const { webpackConfig, webpackDevServer } = require('webpack-base-config');

const baseConfig = {
  entry: './src/index.js',
  htmlTemplate: './src/index_template.html',
};

webpackDevServer(webpackConfig(baseConfig));
