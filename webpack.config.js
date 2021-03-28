const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', //punto de entrada. El archivo principal
  output: {
    // donde se va a enviar luego de compilarlo
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // solo el unico
    publicPath: '/', // raiz del proyecto
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // son elementos que nos van a ayudad por medio de loaders como trabajar con ellos, saber que archivos html, js, etc...
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // de esta forma lee toda la configuracion necesario del proyecto
        },
      },
      {
        // para html
        test: /\.html$/, // leemos los archivos html
        use: [
          {
            loader: 'html-loader',
          },
        ],
      }, // ahora css
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader', // si usamos preprocesador sass less, etc usamos su loader
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html', // nombre el que irá a producciion
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 5000,
  },
};
