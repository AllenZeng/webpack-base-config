const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModulesPath = path.join(__dirname, 'node_modules');

const domin = 'localhost';
const port = '3000';

const webpackConfig = {
  env: process.env.NODE_ENV,
  path: {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    public: path.resolve(__dirname, 'public'),
  },
};

exports.webpackConfig = () => {
  return {
    entry: [
      `webpack-dev-server/client?http://${domain}:${port}`,
      'webpack/hot/only-dev-server',
      './src/index',
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
        template: './index_template.html',
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
          test: /\.js$/,
          loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015&presets[]=react'],
          include: [webpackConfig.path.src, path.join(nodeModulesPath, 'react-tappable')],
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
