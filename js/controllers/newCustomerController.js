angular.module('karSync')
.controller('newCustCtrl', function($scope, userServ, $state, vehicleService, partner){
  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })


  $scope.business = partner[0].business_name;

  userServ.getUser().then(function(user){
    $scope.userList = user;
  })

    $scope.select = function(item) {
      $scope.selected = item;

    }

    $scope.isActive = function(item) {

      return $scope.selected === item;

    }
  $scope.customerClicked = function(user){
    // console.log(user);
    console.log('clicked '+ user.first_name);
  vehicleService.getCar(user.account_id).then(function(res){



    // console.log(res);
    var array = res;

    for (var i = 0; i < array.length; i++) {
      if (array[i].vin === user.primary_vehicle) {
        array.unshift(array[i])
        array.splice(i,1)
      }
    }


    $scope.data = {
      vehicles: array,
      selectedCar: 0,
    }

  })

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

  }


});
