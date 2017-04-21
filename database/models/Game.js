var mongoose = require('mongoose')

var GamesSchema = mongoose.Schema({
  gameID: Number,
  roomName: String,
  status: String,
  playerID: Number
})

var Game = mongoose.model('Game', GamesSchema)

module.exports = Game
