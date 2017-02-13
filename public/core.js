var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $http){
  $http({
  method: 'GET',
  url: 'https://api.github.com/orgs/squirrelscript/members?access_token=b219db6504fc8709f4957de4dfd7cba056c58d70'
}).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(err) {
    console.log(err)
  });

});
