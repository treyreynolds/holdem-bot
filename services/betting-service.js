exports.getPlayerStyle = function() {
  return playerStyle;
}

exports.getBettingStyle = function(style) {
  return bettingStyles[0];
}

var stakes = {
  'smallBlind': 0.25,
  'bigBlind': 0.5
};

var playerStyle = {
  earlyPositionMultiplier: 0.9,
  latePositionMultiplier: 1.2,
  'preFlop':{
    minOdds: 0.15,
    smallBetOdds: 0.15,
    bigBetOdds: 0.20,
    maxCall: 10 * stakes['bigBlind'],
    largeBet: 3 * stakes['bigBlind'],
    smallBet: 2 * stakes['bigBlind']
  },
  'flop':{
    minHandValue: 0.10,
    smallBetOdds: 0.15,
    bigBetOdds: 0.20,
    maxCall: 10 * stakes['bigBlind'],
    largeBet: 3 * stakes['bigBlind'],
    smallBet: 2 * stakes['bigBlind']
  }
};

var bettingStyles = [
  {
    name: 'loose',
    earlyPositionMultiplier: 0.9,
    latePositionMultiplier: 1.2,
    preFlop:{
      callOdds: 0.10,
      smallBetOdds: 0.15,
      bigBetOdds: 0.20,
      maxCall: 10 * stakes['bigBlind'],
      largeBet: 3 * stakes['bigBlind'],
      smallBet: 2 * stakes['bigBlind']
    },
    flop:{
      callValue: 2000,
      smallBetValue: 2500,
      bigBetValue: 3000,
      maxCall: 10 * stakes['bigBlind'],
      largeBet: 3 * stakes['bigBlind'],
      smallBet: 2 * stakes['bigBlind']
    }
  }
];