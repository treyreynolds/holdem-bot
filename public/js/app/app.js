'use strict';

angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/games'})
  }]);