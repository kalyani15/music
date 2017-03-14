var myApp = angular.module("myApp", []);

myApp.controller('myMainController', ['$scope', '$http', function($scope, $http){
  $http.get('data/data.json').then(function(response){
    $scope.musicPlay = response.data;
  })
    $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/abstract/1/cc/'
    },
  
  ];
}]);
