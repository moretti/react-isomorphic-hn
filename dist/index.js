require('babel/register');
var path = require('path');
var express = require('express');
var Table = require('cli-table');
var Server = require('http').Server;

var app = express();
var port = process.env.PORT || 5000;
var server = new Server(app);

console.log('Running server http://localhost:' + port);
server.listen(port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5000);

app.use(require('marty-express')({
  marty: require('marty'),
  routes: require('../src/routes'),
  rendered: function (result) {
    console.log('Rendered ' + result.req.url);

    var table = new Table({
      colWidths: [30, 30, 30, 30, 40],
      head: ['Store Id', 'Fetch Id', 'Status', 'Time', 'Result']
    });

    result.diagnostics.forEach(function (diagnostic) {
      table.push([
        diagnostic.storeId,
        diagnostic.fetchId,
        diagnostic.status,
        diagnostic.time,
        JSON.stringify(diagnostic.result || diagnostic.error, null, 2)
      ]);
    });

    console.log(table.toString());
  }
}));

app.use('/', express.static(path.join(__dirname, 'static')));
