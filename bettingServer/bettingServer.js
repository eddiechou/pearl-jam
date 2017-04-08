var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var eloCalc = require('./elo');

// TODO (Eddie): Connect to database
app.get('/', function(req, res) {
  res.send('Hello from the bettingServer');
});


// Create route to submit a bet to the betting server
// A bet needs:   gameID, projectedWinner, amount, bettorID
app.post('/bet', function(req, res) {
  // Make a bet
  // TODO (Eddie): Submit a bet to the database

  res.sendStatus(201);
});

// Get the odds for a particular gameID
app.get('/odds/:playerA/:playerB', function(req, res) {
  var gameID = req.params.gameId;
  
  // TODO (Eddie): request database for the odds of a gameID

  var eloPlayerA = 1600;
  var eloPlayerB = 1670;

  var expectedValue = eloCalc.getOddsOfWin(eloPlayerA, eloPlayerB);

  res.json(expectedValue);

});

app.listen(process.env.PORT || 3500, function() {
  console.log(`bettingServer is listening on PORT ${process.env.port || 3500}`);
});