angular.module('karSync')
.controller('modalCtrl', ['$scope', 'close', 'vehicleService', function($scope, close, vehicleService) {

  //adds account_id from logged in partner to hidden field on customer form
  // $scope.vehicle.account_id = "4c61d5ab-0cef-11e6-b677-0680f03a8445";

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
