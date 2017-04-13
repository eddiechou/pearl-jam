module.exports.Users = [
  {
    userName: 'eddie',
    password: 'eddie',
    rating: 1450,
    wins: 15,
    losses: 3,
    pearls: 1000
  },
  {
    userName: 'jeff',
    password: 'jeff',
    rating: 1500,
    wins: 14,
    losses: 3,
    pearls: 2388
  },
  {
    userName: 'mike',
    password: 'mike',
    rating: 1400,
    wins: 14,
    losses: 5,
    pearls: 500
  },
  {
    userName: 'mycah',
    password: 'mycah',
    rating: 1500,
    wins: 30,
    losses: 3,
    pearls: 5848
  }
]

module.exports.Bets = [
  {
    gameID: 1,
    bettorName: 'mycah',
    predictedWinner: 'jeff',
    amount: 1000,
    odds: 0.5742
  },
  {
    gameID: 2,
    bettorName: 'eddie',
    predictedWinner: 'jeff',
    amount: 500,
    odds: 0.5742
  }
]

module.exports.Games = [
  {
    gameID: 1,
    roomName: 'Pearl',
    status: 'finished',
    players: ['mike', 'jeff'],
    winner: 'jeff'
  },
  {
    gameID: 2,
    roomName: 'Pearl',
    status: 'in-progress',
    players: ['mike', 'jeff'],
    winner: null
  },
  {
    gameID: 3,
    roomName: 'Jam',
    status: 'lobby',
    players: ['eddie', 'mycah'],
    winner: null
  }
]
