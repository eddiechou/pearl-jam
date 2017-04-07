var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello from the gameServer');
});


app.listen(process.env.PORT || 3005, function() {
  console.log(`gameServer is listening on PORT ${process.env.port || 3005}`);
});