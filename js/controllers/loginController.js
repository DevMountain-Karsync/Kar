angular.module('karSync')
.controller('loginCtrl', function($scope, $state, $location){
  $scope.isState = function(states){
    console.log(states)
      return $state.includes(states);
    };
});
