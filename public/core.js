var app = angular.module('myApp', ['ui.bootstrap','ui.router']);

app.controller('MainCtrl', function($scope, $http){
  $http({
  method: 'GET',
  
}).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(err) {
    console.log(err)
  });

});
