angular.module('karSync')
.controller('navController', function($scope, $state, loginServ){



  $scope.logout = function(){
    console.log('Running')
    loginServ.getLogout().then(function(resp){
      console.log(resp);
      $state.go('home');
    })
  }

})
