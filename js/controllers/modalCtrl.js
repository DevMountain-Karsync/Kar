angular.module('karSync')
.controller('modalCtrl', ['$scope', 'close', 'vehicleService', "edmundService",'user',"$rootScope", function($scope, close, vehicleService, edmundService, user,$rootScope) {

  //adds account_id from logged in partner to hidden field on customer form
//$scope.vehicle.account_id = user.account_id ;
  $scope.user = user;

  $scope.vehicle = {};
  $scope.vehicle.account_id = user.account_id;

  //console.log(user.account_id)

      $scope.processCarForm = function(vehicle){
        edmundService.getYearID(vehicle.make.toLowerCase(), vehicle.model.toLowerCase(), vehicle.year)
        .then(function(res){

          // console.log(res.data.id);
          vehicle.edmonds_model_year_id = res.data.id
          // console.log($scope.maintenance);
          vehicleService.postCar(vehicle)
          .then (function(res) {
            var nuevoVehicle = res;
            $rootScope.$broadcast('vehicle-added',{vehicle: nuevoVehicle})
            //clears form data after sending
              // $scope.vehicle.vin = null;
              // $scope.vehicle.make = null;
              // $scope.vehicle.year = null;
              // $scope.vehicle.model = null;
            // console.log(res)
          })
        })

      }

  $scope.savedAlert2 = function(){
      alert('Car Saved!')
    }
  $scope.close = close;
}]);
