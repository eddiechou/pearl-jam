var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  userName: String,
  password: String,
  rating: Number,
  wins: Number,
  losses: Number,
  pearls: Number
});

var User = mongoose.model('User', UsersSchema);

module.exports = User;