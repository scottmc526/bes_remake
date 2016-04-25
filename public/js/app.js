var app = angular.module('bes', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      // controller: 'mainController'
    })
})
