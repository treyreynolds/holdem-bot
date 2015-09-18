(function() {
  'use strict';

  angular
    .module('app')
    .factory('api', apiFactory);

  apiFactory.$inject = ['$http'];

  function apiFactory($http) {
    return {
      getGames: getGames,
      getPlayerDetails: getPlayerDetails
    };

    function getGames() {
      return $http.get('/games/api/load')
        .then(function(response) {
          return response.data;
        });
    }

    function getPlayerDetails(restId) {
      return $http.get('/games/api/player-details/' + restId)
        .then(function(response) {
          return response.data;
        });
    }
  }
}());