var config = {};

config.mongoUri = 'mongodb://localhost:27017/holdem'
config.cookieMaxAge = 30 * 24 * 3600 * 1000;

config.numberOfPlayers = 8;
config.numberOfHands = 1;
config.playerName = 'Trey Reynolds';
config.playerBuyIn = 40;
config.computerBuyIn = 40;
config.distribution = {
  winners: {},
  hands: {}
};

module.exports = config;