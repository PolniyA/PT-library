"use strict";

var app = angular.module('LibraryModule', ['toastr', 'restangular', 'ngRoute', 'naif.base64']);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/book', {
        controller: 'BooksListController',
        templateUrl: 'book/index'
      })
      .when('/book/new', {
        controller: 'CreateBookController',
        templateUrl: 'book/new'
      })
      .when('/book/show/:id', {
        controller: 'AddCommentaryController',
        templateUrl: 'book/show'
      })
      .otherwise({redirectTo: '/book'});
  }])
  .directive('script', function () {
    return {
      restrict: 'E',
      scope: false,
      link: function (scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  });
