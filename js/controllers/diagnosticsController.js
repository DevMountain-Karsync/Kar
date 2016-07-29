angular.module('karSync')
.controller('diagCtrl', function($scope, edmundService, diagnosticService, userServ, partner){
  $scope.configScroll1 = {
      autoHideScrollbar: false,
      scrollbarPosition: "inside",
      axis: "y",
      theme: 'custom-design',
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

  edmundService.getMake().then(function(res){

    $scope.makes = res.data.makes;
    // console.log(res.data.makes)
  })

  edmundService.getModel().then(function(res){
    $scope.models = res.data.models;
  })


    $scope.select = function(itemMake) {
      $scope.selected = itemMake;

    }
    $scope.isActive = function(itemMake) {

      return $scope.selected === itemMake;
    }

    $scope.selectModel = function(itemModel) {
      $scope.selectedModel = itemModel;
    }
    $scope.isActiveModel = function(itemModel) {
      return $scope.selectedModel === itemModel;
    }

    $scope.selectYear = function(itemMake) {
      $scope.selectedYear = itemMake;
    }
    $scope.isActiveYear = function(itemMake) {
      return $scope.selectedYear === itemMake;
    }

 $scope.makeList = function(make){
  edmundService.getModel(make).then(function(res){
    $scope.models = res.data.models;
  })
  }
$scope.yearOption = function(model) {

  $scope.years = model.years;

  }
$scope.yearsModel = function() {

  diagnosticService.fromYear().then(function(resp){
    $scope.test = resp;
    // console.log(resp)
  })


  }

  $scope.currentPage = 0;
  $scope.pageSize = 40;
//   $scope.numberOfPages = function () {
//     return Math.ceil($scope.items.length / $scope.pageSize);
// }
$scope.selectedData = {};
   $scope.getSelected = function () {
       var list = [];
       for (var val in $scope.selectedData) {
           list.push(val);
       }
       return list.join(", ");
   };


});
