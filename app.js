/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/node_modules', '../node_modules');

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express server listening at http://%s:%s', host, port);
});