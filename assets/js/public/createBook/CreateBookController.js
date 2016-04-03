angular.module('CreateBookModule').controller('CreateBookController', function ($scope, $http, Restangular) {
  "use strict";

  $scope.createForm = {

  };

  $scope.submitCreateBook = function () {

    $http.post('/book', {
      title: $scope.createForm.title,
      author: $scope.createForm.author,
      year: $scope.createForm.year,
      genre: $scope.createForm.genre,
      description: $scope.createForm.description,
      picture: $scope.createForm.picture.base64, // use option base64 of file object
      pictureType: $scope.createForm.picture.filetype // use option base64 of file object
    })
      .then(function onSuccess(){
        window.location = '/book'
      })
      .catch(function onError(sailsResponse) {
        console.log(sailsResponse)
      })
      .finally(function eitherWay(){
        $scope.createForm.location = false;
      })
  }
});
