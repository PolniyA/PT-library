angular.module('BooksListModule').controller('BooksListController', function ($scope) {
  "use strict";

  $scope.books = window.globalBooks; // this variable gets from request in the ejs for angular

  $scope.filter = "";
});
