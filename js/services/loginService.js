angular.module('karSync')
.service('loginServ', function($http){

this.getLogin = function(id){
  return $http({
    method: 'GET',
    url: '/me'
  })
  .then(function(response){
    return response.data;
  })
 }

});
