var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/artist',{
    templateUrl: 'views/artist.html'
  })

  $routeProvider.when('/albums',{
    templateUrl: 'views/albums.html'
  })

}]);


myApp.controller('myMainController', ['$scope', '$http', function($scope, $http){
  $http.get('data/data.json').then(function(response){
    $scope.musicArtist = response.data;
    console.log(response.data);
      //  $scope.musicAlbums = [];
        //Assign JSON obj to results to repeat through and display data
        //angular.forEach(response.data, function(value, key){
          //musicAlbums = value.albums;
          //console.log(musicAlbums);
      //  });

  });

}]);
