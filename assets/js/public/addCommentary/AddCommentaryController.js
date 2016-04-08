app.controller('AddCommentaryController', function ($scope, $http, Restangular) {
  "use strict";

  $scope.addCommentaryForm = {
    showForm: false
  };

  $scope.showCommentaryForm = function (id) {
    $scope.addCommentaryForm.showForm = !$scope.addCommentaryForm.showForm;
    $scope.currentBook = id;
  };

  $scope.submitAddCommentary= function () {

    $http.post('/book/show', {
      rating: $scope.addCommentaryForm.rating,
      comments: $scope.addCommentaryForm.commentary,
      currentBook: $scope.currentBook
    })
      .then(function onSuccess(){
        window.location = '/book/show/' + $scope.currentBook
      })
      .catch(function onError(sailsResponse) {
        console.log(sailsResponse)
      })
      .finally(function eitherWay(){
        $scope.createForm.location = false;
      })
  }
});
