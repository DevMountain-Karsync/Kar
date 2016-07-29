angular.module('karSync')
.controller('modalCtrl', ['$scope', 'close', 'vehicleService', "edmundService", 'user', function($scope, close, vehicleService, edmundService, user) {

  //adds account_id from logged in partner to hidden field on customer form
//$scope.vehicle.account_id = user.account_id ;
  $scope.user = user;

  $scope.vehicle = {};
  $scope.vehicle.account_id = user.account_id;

  //console.log(user.account_id)

      $scope.processCarForm = function(vehicle){
        edmundService.getYearID(vehicle.make.toLowerCase(), vehicle.model.toLowerCase(), vehicle.year)
        .then(function(res){
          // console.log(res);
          console.log(res.data.id);
          vehicle.edmonds_model_year_id = res.data.id
          vehicleService.postCar(vehicle)
          .then (function(res) {
            console.log(res)
              swal({
                title: "Your A Pro!",
                text: "Brandon Salutes You!",
                type: "success",
                closeOnConfirm: true
                })
                close();

            //clears form data after sending
              $scope.vehicle.vin = null;
              $scope.vehicle.make = null;
              $scope.vehicle.year = null;
              $scope.vehicle.model = null;
            // console.log(res)
          })
        })
      }
  $scope.close = close;
}]);
