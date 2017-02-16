var app = angular.module('myApp', ['ui.bootstrap','ui.router']);

app.controller('MainCtrl', function($scope, $http, token){
  var secret = token;
  console.log(token);
    $http({
    method: 'GET',
    url: 'https://api.github.com/orgs/squirrelscript/members?access_token=33cc696bdfa485a200552abaa2af393a164215fe'
  }).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(err) {
    console.log(err)
  });
});

app.service('token', function($http){
  var stuff=""
  $http({
  method: 'GET',
  url: '/thing'
}).then(function successCallback(response) {
stuff = response.data
  console.log(stuff)
}, function errorCallback(err) {
  console.log(err)
});
return stuff
});
