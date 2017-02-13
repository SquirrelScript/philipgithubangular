var app = angular.module('myApp', ['ui.bootstrap','ui.router']);

app.controller('MainCtrl', function($scope, $http){
  $http({
  method: 'GET',
  url: 'https://api.github.com/orgs/squirrelscript/members?access_token=5934703bafb951289a1f5d63869ba1ced74e270b'
}).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(err) {
    console.log(err)
  });

});
