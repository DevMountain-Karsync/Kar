angular.module('karSync')
.service('userServ', function($http){

this.getUser = function(){
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/api/customers/1'
  })
  .then(function(response){
    console.log(response.data[1]);
    console.log(response.data[1].first_name);
    return response.data;
  })
 }
});
