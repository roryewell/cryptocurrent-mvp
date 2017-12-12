module.exports = {
  entry: __dirname + '/client/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /server/],
        loader: 'babel-loader'
      }

    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};
