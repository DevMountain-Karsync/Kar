angular.module('karSync')
.controller('dashCtrl', function($scope, userServ){

  userServ.getUser().then(function(user){
    $scope.userList = user;
  })
});
