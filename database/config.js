var mongoose = require('mongoose');
var Bet = require('./models/Bet.js');
var Game = require('./models/Game.js');
var User = require('./models/User.js');

var dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/pearljam';

// Load sample data into the mongoose database
var loadSampleData = require('./loadSampleData');
loadSampleData();

mongoose.connect(dbUrl);

var db = mongoose.connection;

db.on('error', function(error) {
  console.log('There was an error with the database: ', error);
});

db.once('open', function(status) {
  console.log('The connection to mongodb was successful', dbUrl);
});

module.exports = db;