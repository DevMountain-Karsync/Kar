angular.module('karSync')
.service('vehicleService', function($http){

this.getCar = function(id){
  return $http({
    method: 'GET',
    url: 'https://karsync-1133.appspot.com/api/vehicle/all?account_id='+id
  })
  .then(function(response){
    // console.log(response.data[1]);
    // console.log(response.data[1].first_name);
    return response.data;
  })
 }
});