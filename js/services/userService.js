angular.module('karSync')
.service('userServ', function($http){

this.getUser = function(){
  return $http({
    method: 'GET',
    url: 'https://karsync-1133.appspot.com/api/user?id=de39d4ab-4d22-11e6-9e98-0680f03a8445'
  })
  .then(function(response){
    // console.log(response);
    return response.data;
  })
 }
})
