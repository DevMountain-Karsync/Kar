angular.module('karSync')
.controller('addCtrl', function($scope, $http, userServ){
  $scope.user = {};

  $scope.processForm = function(user){
    userServ.postUser(user)
    .then (function(res) {
      console.log(res)
    })
  }


});
