angular.module('karSync')
.controller('addCtrl', function($scope, $http, userServ, partner, vehicleService){

  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })

  //adds business_name to the scope based on partner authentication object
  $scope.business = partner[0].business_name;

  $scope.user = {};
  //adds partner_id from logged in partner to hidden field on customer form
  $scope.user.partner_id = partner[0].partner_id;

  $scope.processForm = function(user){
    userServ.postUser(user)
    .then (function(res) {
      console.log(res)
      swal({
        title: "Customer Added!",
        text: "Good Job!",
        type: "success",
        closeOnConfirm: true
        })

      //clears form data after sending
        $scope.user.first_name = null;
        $scope.user.phone = null;
        $scope.user.first_name = null;
        $scope.user.email = null;
        $scope.user.address = null;
        $scope.user.city = null;
        $scope.user.postal_code = null;
      // console.log(res)
    })
  }

  //plan selection options in dropdown on add customer view
  $scope.selectables = [
    {label: 'Bronze', value: 1 },
    {label: 'Silver', value: 2},
    {label: 'Gold', value: 3},
    {label: 'Platinum', value: 4}
  ];

  //default plan selection
  $scope.user.service_plan = "3";

  //saved customer alert
  $scope.savedAlert = function(){
    //alert customer that customer saved successfully
    alert('Customer Saved!')
  }

// $scope.testAlert = function () {
//   swal("Good job!", "You clicked the button!", "success");
//
// }
    $scope.customerClicked = function(user){
      // console.log("this is the user" + user.first_name)
      $scope.user.first_name = user.first_name;
  }
});
