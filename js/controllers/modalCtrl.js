angular.module('karSync')
.controller('modalCtrl', ['$scope', 'close', function($scope, close) {

  $scope.savedAlert = function(){
    //alert customer that customer saved successfully
    alert('Car Saved!')
  }
  $scope.close = close;

}]);
