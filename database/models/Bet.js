var mongoose = require('mongoose')

var BetsSchema = mongoose.Schema({
  gameID: Number,
  bettorID: Number,
  predictedWinner: String,
  amount: Number,
  odds: Number
})

var Bet = mongoose.model('Bet', BetsSchema)

module.exports = Bet
