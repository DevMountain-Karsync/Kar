angular.module('karSync')
.controller('dashDisplayCtrl', ['$scope', 'ModalService', function($scope, ModalService) {

    $scope.customResult = null;
    $scope.showCustom = function() {

      ModalService.showModal({
        templateUrl: "../views/createCarModal.html",
        controller: "modalCtrl"
      }).then(function(modal) {
        modal.close.then(function(result) {
          $scope.customResult = "All good!";
        });
      });
    };
  }]);
