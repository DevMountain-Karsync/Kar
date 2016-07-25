angular.module('karSync')
.controller('scheduleCtrl', function($scope, userServ, partner){
  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })


  $scope.business = partner[0].business_name;
});
