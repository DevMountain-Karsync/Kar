angular.module('karSync')
.service('loginServ', function($http){
this.getLogin = function(id){
  return $http({
    method: 'GET',
    url: 'logalhost:3000/auth/google/'
  })
  .then(function(response){
    return response.data;
  })
 }
});
