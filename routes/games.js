var express = require('express');
var _ = require('underscore');
var fs = require('fs');
var csv = require("fast-csv");
var texas = require('texas');
var oddsService = require('../services/8-player-odds-service');
var bettingService = require('../services/betting-service');

var router = express.Router();


/* GET index page for game. */
router.get('/', function(req, res, next) {

  var vm = {
    title: 'Game',
    playerName: req.session.personName,
    name: req.user ? req.user.name : 'test'
  }
  res.render('games/index', vm);
});

router.get('/api/load', function(req, res, next) {

  var players = [];
  var playerAssignment = Math.floor(Math.random() * 8);

  for(var p=0; p<8; p++){
    players[p] = {
      'name': (playerAssignment == p) ? 'My Man': 'Computer '+ (p+1),
      'hand': {},
      'wins': 0,
      'stack': 10000,
      'bettingStyle': (playerAssignment == p) ? 'Custom' : 'Loose',
      'betting': (playerAssignment == p) ? bettingService.getPlayerStyle() : bettingService.getBettingStyle('loose'),
      'currentPosition': p
    };
  }

  for(var i = 0; i < 1; i++){
    var deck = texas.deck();

    var flopCards = _.first(deck, 3);
    var turnCard = deck[3];
    var riverCard = deck[4];
    var winners = {value: 0, players: []};

    for(var p=0; p<players.length; p++){

      var cards = [deck[(p*2)+5],deck[(p*2)+6]];

      players[p].hand = {
        cards: _.map(cards, texas.abbr),
        flopRank: texas.evaluate(flopCards.concat(cards)),
        turnRank: texas.evaluate(flopCards.concat(turnCard, cards)),
        riverRank: texas.evaluate(flopCards.concat(turnCard, riverCard, cards)),
        preFlopFolded: false,
        flopFolded: false,
        turnFolded: false,
        riverFolded: false,
        odds: oddsService.getOdds(_.map(cards, texas.abbr))
      };

    }

    // Flop Betting Calculation
    players.forEach(function(p,index){
      if(players[index].hand.odds.winProbability < p.betting.preFlop.minOdds){
        players[index].hand.preFlopFolded = true;
        players[index].hand.flopFolded = true;
        players[index].hand.turnFolded = true;
        players[index].hand.riverFolded = true;
      }
    });

    // Winner Calculation
    players.forEach(function(p,index){
      if(!p.hand.riverFolded && p.hand.riverRank.value > winners.value){
        winners.value = p.hand.riverRank.value;
        winners.players = [index];
      } else if (!p.hand.riverFolded && p.hand.riverRank.value == winners.value) {
        winners.value = p.hand.riverRank.value;
        winners.players.push(index);
      }
    });

  }

  winners.players.forEach(function(winner){
    players[winner].hand.winner = true;
  });

  var vm = {
    flopCards: _.map(flopCards, texas.abbr),
    turnCard: texas.abbr(turnCard),
    riverCard: texas.abbr(riverCard),
    players: players
  }

  return res.json(vm);
});

module.exports = router;
