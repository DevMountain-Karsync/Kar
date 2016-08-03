angular.module('karSync')
.controller('newCustCtrl', function($scope, userServ, $state, vehicleService, partner){
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

  $scope.partner = partner[0].partner_id;
  userServ.getUser($scope.partner).then(function(user){
    $scope.userList = user;
  })

  //adds business_name to the scope based on partner authentication object
  $scope.business = partner[0].business_name;

  $scope.user = {};
  //adds partner_id from logged in partner to hidden field on customer form
  $scope.user.partner_id = partner[0].partner_id;

  $scope.customerClicked = function(user){
    $scope.user.first_name = user.first_name;
    $scope.user.phone = user.phone;
    $scope.user.email = user.email;
    $scope.user.address = user.address;
    $scope.user.city = user.city;
    $scope.user.postal_code = user.postal_code;
}

  $scope.processForm = function(user){
    userServ.postUser(user)
    .then (function(res) {
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
  $scope.user.service_plan = "5";

  //saved customer alert
  $scope.savedAlert = function(){
    //alert customer that customer saved successfully
    alert('Customer Saved!')
  }
});
