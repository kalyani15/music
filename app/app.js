var myApp = angular.module("myApp", []);

myApp.controller('myMainController', ['$scope', '$http'] function($scope, $http){
  $http.get('data/data.json').success(function(response){
    $scope.musicPlay = response.data;

  )};
});

myApp.config(){

};
