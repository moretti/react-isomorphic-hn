var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('open');
var config = require('../webpack.config');

var port = 3000;
var host = 'localhost';

new WebpackDevServer(webpack(config.dev), {
  contentBase: 'src',
  hot: true,
  noInfo: false,
  publicPath: '',
  stats: {
    colors: true
  }
}).listen(port, host, function (err) {
  if(err) {
    throw err;
  }
  var uri = 'http://' + host + ':' + port;
  console.log('Listening on', uri);
  open(uri);
});
