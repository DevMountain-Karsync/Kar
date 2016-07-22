angular.module('karSync')
.controller('diagCtrl', function($scope, edmundService, diagnosticService){
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




});
