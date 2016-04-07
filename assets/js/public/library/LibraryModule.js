angular.module('LibraryModule', ['toastr', 'restangular', 'ngRoute', 'BooksListModule', 'CreateBookModule'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/book'});
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
