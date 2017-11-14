let path = require('path')
let LiveReloadPlugin = require('webpack-livereload-plugin')
module.exports = {
  entry: './front/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'front/dist')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
}
