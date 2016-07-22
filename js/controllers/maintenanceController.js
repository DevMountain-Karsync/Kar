angular.module('karSync')
.controller('maintCtrl', function($scope, edmundService){
  edmundService.getMake().then(function(res){
    $scope.makes = res.data.makes;

  });



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
    console.log(make);
    for (var i = 0; i < $scope.makes.length; i++) {
      if($scope.makes[i].name === make){
        $scope.models = $scope.makes[i].models
      }
    }
  //   edmundService.getModel(make).then(function(res){
  //     $scope.models = res.data.models;
  // })
}


$scope.yearOption = function(model) {
  console.log("clicked ",model);
  $scope.years = model.years

  $scope.yearOption = function(modelSelect) {

    $scope.modelSelect = modelSelect;
    $scope.years = modelSelect.years
  }
  }
$scope.yearsModel = function(year) {

  for (var i = 0; i < $scope.years.length; i++) {

    if($scope.years[i].year === year){
      edmundService.byYear($scope.years[i].id).then(function(res){
        $scope.showAlert = false;
        $scope.maintArr = res.data.actionHolder;
          if(res.data.actionHolder.length === 0) {
            $scope.alert ='no maintanence schedule available';
            $scope.showAlert = true;
          }
      })
    }
  }
  $scope.yearsModel = function(yearSelect) {
    $scope.yearSelect = yearSelect;
    // console.log(yearSelect);
    for (var i = 0; i < $scope.years.length; i++) {

      if($scope.years[i].year === yearSelect){
        edmundService.byYear($scope.years[i].id).then(function(res){
          $scope.showAlert = false;
          $scope.maintArr = res.data.actionHolder;
            if(res.data.actionHolder.length === 0) {
              $scope.alert ='no maintanence schedule available';
              $scope.showAlert = true;
            }
        })
      }
    }
  }
}
});
