var users = [
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
];

var bets = [
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
  },
  {
    gameID: 4,
    bettorName: 'eddie',
    predictedWinner: 'mike',
    amount: 500,
    odds: 0.4259
  }
];

var games = [
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
    players: ['eddie'],
    winner: null
  },
  {
    gameID: 4,
    roomName: 'A',
    status: 'in-progress',
    players: ['mike', 'jeff'],
    winner: null
  },
  {
    gameID: 5,
    roomName: 'B',
    status: 'in-progress',
    players: ['mycah', 'jeff'],
    winner: null
  }
];

module.exports.sampleData = {
  users: users,
  bets: bets,
  games: games
};