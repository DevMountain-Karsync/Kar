angular.module('karSync')
.controller('navController', function($scope, loginServ, $state){
  $scope.logout = function(){
    console.log('Running')
    loginServ.getLogout().then(function(resp){
      console.log(resp);
      $state.go('home');
    })
  }

})
