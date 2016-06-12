const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const defaultDomain = {
  domain: 'localhost',
  port: 3000,
};

module.exports = (webpackConfig = webpackConfig, domain = defaultDomain) => {
  return new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(domain.port, domain.domain, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Listening at ${domain.domain}:${domain.port} in mode: ${process.env.NODE_ENV}`);
  });
}
