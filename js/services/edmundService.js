angular.module('karSync')
.service('edmundService', function ($http){


this.byYear = function(yId) {
      return $http.get('https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid='+yId+'&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
        then(function(data) {
          return data;
        });

}

this.getMake = function(){
  return $http.get('https://api.edmunds.com/api/vehicle/v2/makes?view=basic&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
  success(function(data){
    return data;

  });
}

this.getModel = function(make) {
  return $http.get('https://api.edmunds.com/api/vehicle/v2/'+make+'/models?view=basic&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
  success(function(data){
    return data;

  });
}
})
