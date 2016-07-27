angular.module('karSync')
.controller('dashDisplayCtrl', ['$scope', 'ModalService', function($scope, ModalService, vehicleService) {


    $scope.showCustom = function() {
      ModalService.showModal({
        templateUrl: "../views/createCarModal.html",
        controller: "modalCtrl",
        inputs: {
          user: $scope.user,
        }
      }).then(function(modal) {
        modal.close.then(function(result) {
          $scope.customResult = "All good!";
        });
      });
    };


    // $scope.savedAlert2 = function(){
    //   console.log('hey')
    //
    //     alert('Car Saved!')
    //   }
      //alert customer that customer saved successfully


  }]);
