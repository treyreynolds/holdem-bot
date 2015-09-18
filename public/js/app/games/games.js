(function(){
  'use strict';

  angular
    .module('app')
    .controller('GamesController', GamesController);

  GamesController.$inject = ['api'];

  function GamesController(api){

    var vm = this;

    api.getGames()
      .then(function(data){
        vm.players = data.players;
        vm.flopCards = data.flopCards;
        vm.turnCard = data.turnCard;
        vm.riverCard = data.riverCard;
      });
  }


}());