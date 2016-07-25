angular.module('karSync')
.controller('newCustCtrl', function($scope, userServ, $state, vehicleService, partner){
  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })

  $scope.business = partner[0].business_name;

    $scope.select = function(item) {
      $scope.selected = item;
    }

    $scope.isActive = function(item) {
      return $scope.selected === item;
    }
});
