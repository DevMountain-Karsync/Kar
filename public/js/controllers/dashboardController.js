angular.module('karSync')

.controller('dashCtrl', function($scope, userServ,$state, vehicleService, partner, edmundService,$rootScope,diagnosticService){
  $scope.alertShow=false;
  $scope.alertShow = true;
  $scope.alertData = [];
  $scope.maintenance =[];

  $scope.configScroll1 = {
      autoHideScrollbar: false,
      scrollbarPosition: "inside",
      axis: "y",
      theme: 'custom-red',
      advanced:{
          updateOnContentResize: true
      },
          scrollInertia: 0
      }

  $scope.configScroll2 = {
      autoHideScrollbar: false,
      scrollbarPosition: "inside",
      axis: "y",
      theme: 'custom-grey',
      alwaysShowScrollbar: 1,
      advanced:{
          updateOnContentResize: true
      },
          scrollInertia: 0
      }




  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })

  $scope.business = partner[0].business_name;

    $scope.select = function(item) {
      $scope.selected = item;

    }

    $scope.isActive = function(item) {

      return $scope.selected === item;

    }


    var getMaintenance = function(yearID){
      edmundService.byYear(yearID)
      .then(function(res){

        $scope.maintenance = res.data.actionHolder
        // console.log(res.data.actionHolder);
      })

    }




    var getAlerts = function(vin){
      // console.log(vin);
      var test;
      vehicleService.getAlert(vin)
      .then(function(res){
        // console.log(res.data);
        if (res.data.length === 0) {
          $scope.goodNews = "No Alerts"
          $scope.news = true;
        }
        if (res.data.length > 0) {
          $scope.goodNews = undefined;
          $scope.news = false;
        }
        var alertArray = res.data;
        $scope.alerts = alertArray
        for (var i = 0; i < alertArray.length; i++) {
        diagnosticService.getDTCbyCode(alertArray[i].code)
          .then(function(response){
            // console.log(response);
            for (var i = 0; i < alertArray.length; i++) {
              if (response.code === alertArray[i].code) {
                alertArray[i].description = response.description
                $scope.alerts = alertArray
              }
            }
            // console.log($scope.alerts);
          })
        }
        // console.log(testArray);
        // $scope.alerts = alertArray


      })

    }


  $scope.customerClicked = function(user){
    // console.log(user);
    // console.log('clicked '+ user.first_name);
      // $scope.data = {}



  vehicleService.getCar(user.account_id).then(function(res){



    // console.log("response: ", res);
    var array = res;

    for (var i = 0; i < array.length; i++) {
      if (array[i].vin === user.primary_vehicle) {
        // console.log(array);
        array.unshift(array[i])
        array.splice(i+1,1)
      }
    }

    // console.log("after: ", array);

    $rootScope.data = {
      vehicles: array,
      selectedCar: 0,
    }

    getMaintenance($scope.data.vehicles[0].edmonds_model_year_id);
    getAlerts($scope.data.vehicles[0].vin)

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


      $scope.user.userPlanPrice = "15.00"

      // console.log($scope.data.vehicles);

  }

  // vehicleReport.reportFromId(report_id).then(function(res){
  //   $scope.report.data
  // })

  $scope.milesInput = 3500;
  $scope.oilInput = 30000;
  $scope.tireInput = 20000;

  $scope.business = partner[0].business_name;

  $scope.$watch("data.vehicles[data.selectedCar]",function(newValue, oldValue){
    if (newValue && oldValue) {
      getMaintenance(newValue.edmonds_model_year_id)
      getAlerts(newValue.vin)
    }

  })

  $scope.$on('vehicle-added', function(event, args) {
    console.log("howdy new car");
    vehicleService.getCar($scope.user.account_id).then(function(res){
     $rootScope.data.vehicles = res;
  })
});

 $scope.today = new Date();

 // console.log($scope.user);
 $scope.datePick = [
   {date: "Monday"},
   {date: "Tuesday"},
   {date: "Wednesday"},
   {date: "Thursday"},
   {date: "Friday"}
 ]

 $scope.timePick = [
   {time: "9 AM"},
   {time: "10 AM"},
   {time: "11 AM"},
   {time: "12 AM"},
   {time: "1 PM"},
   {time: "2 PM"},
   {time: "3 PM"},
   {time: "4 PM"},
   {time: "5 PM"}
 ]


});
