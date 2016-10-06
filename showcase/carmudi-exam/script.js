var app = angular
  .module('MyApp', [
  ])
.controller('QuestionCtrl', ['$scope', '$http', function ($scope, $http) { 
  $scope.questions = [];
  $http
    .get("data.json")
    .then(function(response){
      $scope.questions = response.data.questions;
    });
}]) 