const webpackConfig = require('../src/webpack.config');
const webpackDevServer = require('../src/webpack.dev.server');

const baseConfig = {
  entry: './src/index.js',
  htmlTemplate: './src/index_template.html',
};

const config = webpackConfig(baseConfig);

webpackDevServer(config);
