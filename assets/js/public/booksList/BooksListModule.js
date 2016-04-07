angular.module('BooksListModule', ['restangular', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/book', {
      templateUrl: '/book',
      controller: 'BooksListController'
    });
  }]);
