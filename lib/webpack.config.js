const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const domain = 'localhost';
const port = '3000';

module.exports = (config) => {
  return {
    entry: [
      `webpack-dev-server/client?http://${domain}:${port}`,
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      config.entry,
    ],
    output: {
      path: '/',
      publicPath: '/',
      filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: config.htmlTemplate,
        hash: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }
      }),
    ],
    module: {
      loaders: [
        { test: /\.(ttf|eot|svg|woff)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {
          test: /\.jsx?$/,
          loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015&presets[]=react'],
          include: path.resolve(__dirname, '../../../', path.parse(config.entry).dir),
          exclude: path.resolve(__dirname, '../../'),
        },
        { test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=1024&name=img/[name].[ext]' },
      ],
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src'],
      extensions: ['', '.js', 'jsx'],
      alias: {},
    },
  };
}
