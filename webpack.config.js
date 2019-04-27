const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const copyWebpackPluginConfig = new CopyPlugin([{
  from: './public',
  to: './'
}, ]);

module.exports = (env, options) => {
  console.log(`--- Webpack is running in ${options.mode} mode ---`);
  const selectedModeIsProd = options.mode === 'production' ? true : false;
  return {
    devServer: {
      host: 'localhost',
      port: '3000',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
    },
    entry: [path.join(__dirname, '/src/index.tsx')],
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.join(__dirname, '/build'),
    },
    module: {
      rules: [{
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          loaders: ['awesome-typescript-loader'],
        },
        {
          test: /\.scss$|\.css$/,
          loader: 'style-loader!css-loader!sass-loader',
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: selectedModeIsProd ? [new CleanWebpackPlugin(), HTMLWebpackPluginConfig, copyWebpackPluginConfig] : [HTMLWebpackPluginConfig],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};