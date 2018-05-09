const webpack = require('webpack');

const src_path = `${__dirname}/src/js`;

const config = {
  entry: `${src_path}/index.jsx`,
  output: {
    path: `${__dirname}/build/js/`,
    filename: '[name].js',
  },
  devServer: {
    inline: true,
    port: 8080,
  },
  watch: true,
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: `${__dirname}/src/js`,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ['transform-es2015-classes', {
              'loose': true
            }],
            ['transform-proto-to-assign']
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  }
}

module.exports = config;
