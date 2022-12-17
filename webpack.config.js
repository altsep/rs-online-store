const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].[id].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2017',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2017',
        css: true,
      }),
    ],
  },
  devServer: {
    open: false,
    port: 3000,
    historyApiFallback: true,
    watchFiles: path.join(__dirname, 'src'),
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  watchOptions: {
    ignored: '**/node_modules',
  },
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const filename = (ext) => (isProduction ? `[name].[fullhash].${ext}` : `[name].${ext}`);

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({ filename: filename('css') }));
  } else {
    config.plugins.push(new ESLintPlugin());
    config.devtool = 'eval';
  }

  config.output.filename = filename('js');

  const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
  });

  return config;
};
