var fs = require('fs-extra');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config');

var distPath = path.join(__dirname, '../dist');
var srcPath = path.join(__dirname, '../src');

fs.copySync(path.join(srcPath, 'assets'), path.join(distPath, 'static/assets'));

webpack(config.prod, function(err, stats) {
  if(err) {
    throw err;
  }
  console.log(stats.toString({
    colors: true
  }));
});
