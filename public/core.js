var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $http){
  $http({
  method: 'GET',
  url: 'https://api.github.com/orgs/squirrelscript/members?access_token=33cc696bdfa485a200552abaa2af393a164215fe'
}).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(response) {
    console.log(response)
  });

});
