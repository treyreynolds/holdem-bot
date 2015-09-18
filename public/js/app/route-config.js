(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/games', {
        templateUrl: '/js/app/games/games.html',
        controller: 'GamesController',
        controllerAs: 'vm'
      });
  }
  
}());