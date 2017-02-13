var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $http){
  $http({
  method: 'GET',
  url: 'https://api.github.com/orgs/squirrelscript/members?access_token=379f35fb116fb6c584be33db6736debea3740657'
}).then(function successCallback(response) {
    $scope.data=response.data;
    console.log($scope.data)
  }, function errorCallback(err) {
    console.log(err)
  });

});
