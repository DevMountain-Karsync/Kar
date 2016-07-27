angular.module('karSync')
.controller('modalCtrl', ['$scope', 'close', 'vehicleService', function($scope, close, vehicleService) {


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
