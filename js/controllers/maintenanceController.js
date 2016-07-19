angular.module('karSync')
.controller('maintCtrl', function($scope, edmundService){
  edmundService.getMake().then(function(res){
    $scope.makes = res.data.makes;
  })

  edmundService.getModel().then(function(res){
    $scope.models = res.data.models;
  })

 $scope.makeList = function(make){
  edmundService.getModel(make).then(function(res){
    $scope.models = res.data.models;
  })
  }
$scope.yearOption = function(model) {

  $scope.years = model.years;

  }
$scope.yearsModel = function(year) {

  for (var i = 0; i < $scope.years.length; i++) {
    if($scope.years[i].year === year){

      edmundService.byYear($scope.years[i].id).then(function(res){
        console.log(res);
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

});
