angular.module('karSync')
.controller('addCtrl', function($scope, $http, userServ, partner){
  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })

  $scope.business = partner[0].business_name;
  $scope.user = {};

  $scope.processForm = function(user){
    userServ.postUser(user)
    .then (function(res) {
      console.log(res)
    })
  }


});
