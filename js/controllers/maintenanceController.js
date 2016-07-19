angular.module('karSync')
.controller('maintCtrl', function($scope, edmundService){
  edmundService.receiveArr("ford", "mustang").then(function(res){
    var mock = res.data.years[0].id;
  edmundService.byYear(mock).then(function(res){
    $scope.maintarr = res.data.actionHolder;

  })
  });

});
