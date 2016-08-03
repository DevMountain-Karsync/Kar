angular.module('karSync')
.controller('addSchedCtrl', function($scope, userServ,$state, vehicleService, partner, edmundService){
  $scope.partner = partner[0].partner_id;

  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })

  $scope.business = partner[0].business_name;
// console.log($scope.user);
});
