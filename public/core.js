var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $http){
  $http({
  method: 'GET',
  url: 'https://api.github.com/orgs/squirrelscript/members?access_token='
}).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(err) {
    console.log(err)
  });

});
