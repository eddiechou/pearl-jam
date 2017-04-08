var express = require('express');
var path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

var socketManager = require('./socket.js')(io);

app.use('/sockets', express.static(__dirname + '/client/sockets'));
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/assets', express.static(path.join(__dirname + '/client/assets')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

server.listen(process.env.PORT || 3005, function() {
  console.log(`gameServer is listening on PORT ${process.env.port || 3005}`);
});