angular.module('karSync')
.controller('dashCtrl', function($scope, userServ){

  userServ.getUser().then(function(user){
    console.log(user)
    $scope.user = user;
  })
});
