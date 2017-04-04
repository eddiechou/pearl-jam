var express = require("express");

var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
})

app.listen(process.env.PORT || 3000, function() {
	console.log('server is listening');
})