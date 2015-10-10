var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //{ 
      //  test: require.resolve("react"), 
      //  loader: "expose?React" 
      //},
      { 
        test: require.resolve("../src/app/store"), 
        loaders: ["expose?store","babel-loader" ]
      }
      // ,
      // { 
      //   test: require.resolve("../src/app/data/store"), 
      //   loaders: ["expose?store","babel-loader" ]
      // }
    ]
  }
};
