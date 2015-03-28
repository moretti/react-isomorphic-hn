var webpack = require('webpack');
var path = require('path');

var sourceReg = /node_modules\/marty|src\//i;
function matchSources(sourcePath) {
  return sourceReg.test(path.relative(__dirname, sourcePath));
}

var dev = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], include: matchSources }
    ]
  }
};

var prod = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], include: matchSources }
    ]
  }
};

module.exports = {
  dev: dev,
  prod: prod
};
