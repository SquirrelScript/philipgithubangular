var app = angular.module('myApp', ['ui.bootstrap','ui.router']);

app.controller('MainCtrl', function($scope, $http, myService){
  var token = "";
  myService.fetchToken().success(function(response){
      console.log(response)
    token=response
  });
    $http({
    method: 'GET',
    url: 'https://api.github.com/orgs/squirrelscript/members?access_token=' + token
  }).then(function successCallback(response) {
    $scope.data=response.data;
  }, function errorCallback(err) {
    console.log(err)
  });
});

app.factory('myService', function($http) {
  var obj = {};

      obj.fetchToken = function(){
          return $http.get('/thing');
      }

   return obj;
});
