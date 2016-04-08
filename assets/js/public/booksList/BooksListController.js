"use strict";

app.controller('BooksListController', function ($scope, $route) {

  $scope.booksList = window.globalBooks; // variable takes from request in the ejs for angular

  $scope.filter = ""; // variable from input filter of book's list
  $scope.filteredBooksList = $scope.filteredBooksList || $scope.booksList; //booksList instead empty filteredBooksList

  // function for filter book's list
  $scope.booksFilter = function (text) {
    $scope.filteredBooksList = $scope.booksList.filter(function (item) {
      var itemTitle = item.title.toUpperCase();

      return itemTitle.indexOf(text.toUpperCase()) != -1;
    })
  };

  $scope.showBook = function (id) {
    window.location = '/#/book/show/' + id;
  };
});
