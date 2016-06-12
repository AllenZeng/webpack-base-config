const { webpackConfig, webpackDevServer } = require('../index.js');

const baseConfig = {
  entry: './src/index.js',
  htmlTemplate: './src/index_template.html',
};

webpackDevServer(webpackConfig(baseConfig));
