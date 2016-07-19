angular.module('karSync')
.controller('dashCtrl', function($scope, userServ, $state){
  $state.go('dashboardDisplay')
  userServ.getUser().then(function(user){
    $scope.userList = user;
  })
});
