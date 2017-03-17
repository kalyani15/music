var myApp = angular.module("myApp", ['ngRoute']);

myApp.config('$routeProvider', function($routeProvider){
  $routeProvider
  .when('/artist', {
    templateUrl: 'views/artist.html'
  });
});

myApp.controller('myMainController', ['$scope', '$http', function($scope, $http){
  $http.get('data/data.json').then(function(response){
    $scope.musicPlay = response.data;
  });

}]);
