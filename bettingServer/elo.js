const KFACTORS = {
  HIGHEST: 32,
  MIDDLE: 24,
  LOWEST: 16
};

const RESULTS = {
  WIN: 1,
  TIE: 0.5,
  LOSS: 0
};

const PERF_FACTOR = 400;
const MIN = 0;
const MAX = 10000;

var eloCalc = function() {
  
  /* Returns the odds of a player winning vs. the opponent */
  this.getOddsOfWin = function(rating, opponentRating) {
    var difference = opponentRating - rating;
    return 1 / ( 1 + Math.pow(10, difference / PERF_FACTOR));
  };

  /* Returns ELO rating after winning */
  this.getRatingIfWin = function(rating, opponentRating) {
    var odds = this.getOdds(rating, opponentRating);
    return this._getNewRating(odds, RESULTS.WIN, rating);
  };

  /* Returns ELO rating after losing */
  this.getRatingIfLose = function(rating, opponentRating) {
    var odds = this.getOdds(rating, opponentRating);
    return this._getNewRating(odds, RESULTS.LOSS, rating);
  };

  /* Return ELO rating after tie */
  this.getRatingIfTie = function(rating, opponentRating) {
    var odds = this.getOdds(rating, opponentRating);
    return this._getNewRating(odds, RESULTS.TIE, rating);
  };

  /* Gets the K Factor for someone based on their previous rating */
  this._getKFactor = function(rating) {
    if (rating <= 2100) {
      return KFACTORS.HIGHEST;
    } else if (2100 < rating && rating <= 2400) {
      return KFACTORS.MIDDLE;
    } else if (2400 < rating ) {
      return KFACTORS.LOWEST;
    }
  };

  /* Returns new rating based on win/loss/tie */
  this._getNewRating = function(odds, result, prevRating) {
    var difference = result - odds;
    var newRating = Math.round(prevRating + this._getKFactor(prevRating) * difference);

    if (newRating < MIN) {
      return MIN;
    } else if (newRating > MAX) {
      return MAX;
    }
    return newRating;
  };
};

module.exports = new eloCalc();