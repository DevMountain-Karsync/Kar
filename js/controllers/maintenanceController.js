angular.module('karSync')
.controller('maintCtrl', function($scope, edmundService){
  edmundService.getMake().then(function(res){
    $scope.makes = res.data.makes;
  });
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
  $scope.yearOption = function(modelSelect) {
    console.log('yearOption')
    $scope.modelSelect = modelSelect;
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
  }
}
});
