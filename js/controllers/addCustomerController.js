angular.module('karSync')
.controller('addCtrl', function($scope, $http, userServ, partner){
  $scope.user = {};
  //adds partner_id from logged in partner to hidden field on customer form
  $scope.user.partner_id = partner[0].partner_id;

  $scope.processForm = function(user){
    userServ.postUser(user)
    .then (function(res) {
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
    //clears from data after saving
    $scope.user.first_name = null;
    $scope.user.phone = null;
    $scope.user.first_name = null;
    $scope.user.email = null;
    $scope.user.address = null;
    $scope.user.city = null;
    $scope.user.postal_code = null;
    //alert customer that customer saved successfully
    alert('Customer Saved!')
  }

});
