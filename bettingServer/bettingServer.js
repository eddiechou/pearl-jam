var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var db = require('../database/config.js')

var app = express()

app.use(bodyParser.json())

var eloCalc = require('./elo')

// TODO (Eddie): Connect to database (need to connect to Games, Users, and Bets)
// Can store all of these in one database or separate them out

app.get('/', function (req, res) {
  res.send('Hello from the bettingServer')
})

// Create route to submit a bet to the betting server
// Request will contain: gameID, predictedWinner, amount, bettorID
app.post('/bet', function (req, res) {
  // Grab vars from req
  var gameID = req.gameID
  var predictedWinner = req.predictedWinner
  var amount = req.amount
  var bettorID = req.bettorID

  // Query Games table for players in the game

  // Query Users table for ratings of each of the players
  var eloPredictedWinner = FIX_ME_QUERY
  var eloPredictedLoser = FIX_ME_QUERY

  // Calculate odds of winning
  var oddsOfPredictedWinner = eloCalc.getOddsOfWin(eloPredictedWinner, eloPredictedLoser)

  // Put bet into database

  res.sendStatus(201)
})

// Receive request from main server, which resolves the bets for a particular gameID
// mainServer will send the gameID and the winner
app.post('/resolve/:gameID', function (req, res) {

})

app.listen(process.env.PORT || 3500, function () {
  console.log(`bettingServer is listening on PORT ${process.env.port || 3500}`)
})
