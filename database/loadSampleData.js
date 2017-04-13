const users = require('./sampleData.js').Users
const bets = require('./sampleData.js').Bets
const games = require('./sampleData.js').Games

var Bet = require('./models/Bet.js')
var Game = require('./models/Game.js')
var User = require('./models/User.js')

module.exports = function () {
  users.forEach(function (user) {
    var user = new User(user)
    user.save(function (err, user) {
      if (err) {
        return console.error(err)
      }
      console.log('user: ', user + ' saved correctly')
    })
  })

  bets.forEach(function (bet) {
    var bet = new Bet(bet)
    bet.save(function (err, bet) {
      if (err) {
        return console.error(err)
      }
      console.log('bet: ', bet + ' saved correctly')
    })
  })

  games.forEach(function (game) {
    var game = new Game(game)
    game.save(function (err, game) {
      if (err) {
        return console.error(err)
      }
      console.log('game: ', game + ' saved correctly')
    })
  })
}
