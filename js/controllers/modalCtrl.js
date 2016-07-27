angular.module('karSync')
.controller('modalCtrl', ['$scope', 'close', 'vehicleService', 'user', function($scope, close, vehicleService, user) {

  //adds account_id from logged in partner to hidden field on customer form
//$scope.vehicle.account_id = user.account_id ;
  $scope.user = user;

  $scope.vehicle = {};
  $scope.vehicle.account_id = user.account_id;

  //console.log(user.account_id)

      $scope.processCarForm = function(vehicle){
        vehicleService.postCar(vehicle)
        .then (function(res) {
          //clears form data after sending
            $scope.vehicle.vin = null;
            $scope.vehicle.make = null;
            $scope.vehicle.year = null;
            $scope.vehicle.model = null;
          // console.log(res)
        })
      }

  $scope.savedAlert2 = function(){
      alert('Car Saved!')
    }
  $scope.close = close;
}]);
