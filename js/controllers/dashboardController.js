angular.module('karSync')
.controller('dashCtrl', function($scope, userServ,$state){
  userServ.getUser().then(function(user){
    $scope.userList = user;

  })

  $scope.customerClicked = function(user){
    // this will need changes once db more flushed out
      user.primaryAccount = true
      $scope.user = user;
      $scope.user.primary_phone = "(801)-999-8888"
      $scope.user.secondary_phone = "(801)-915-1515"
      $scope.user.streetAddress = "12345 South State"
      $scope.user.cityAndState = "Salt Lake City, UT 84020"

      if (user.primaryAccount === true) {
        $scope.primaryUser = user;
      }

      $scope.user.userPlan = "Gold"
      $scope.user.userPlanPrice = "15.00"

      $scope.customerClicked = function(userId) {
        $scope.userId = userId;
        console.log(userId);

      }
  }


});
