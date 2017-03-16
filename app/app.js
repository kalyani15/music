var myApp = angular.module("myApp", []);

myApp.controller('myMainController', ['$scope', '$http', function($scope, $http){
  $http.get('data/data.json').then(function(response){
    $scope.musicPlay = response.data;
  })

}]);
