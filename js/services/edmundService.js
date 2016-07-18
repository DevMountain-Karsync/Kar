angular.module('karSync')
.service('edmundService', function ($http){

this.receiveArr = function(make, model) {
  return $http.get('https://api.edmunds.com/api/vehicle/v2/'+make+'/'+model+'/years?state=new&category=&view=full&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
  success(function(data) {
    return data.years;
  });
}

this.byYear = function(mock) {
      return $http.get('https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid='+mock+'&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
        then(function(data) {
          return data;
        });

}


})
