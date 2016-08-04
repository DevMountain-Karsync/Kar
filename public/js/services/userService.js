angular.module('karSync')
.service('userServ', function($http){

this.getUser = function(partner_id){
  return $http({
    method: 'GET',
    url: 'http://karsync.ninja/api/customers/' + partner_id
  })
  .then(function(response){
    // console.log(response.data[1]);
    // console.log(response.data[1].first_name);
    return response.data;
  })
 }

 this.postUser = function(user){
   console.log(JSON.stringify(user))
   return $http({
     method: 'POST',
     url: 'https://karsync-1133.appspot.com/api/user',
     data: JSON.stringify(user)
   })
   .then(function(response){
     // console.log(response.data[1]);
     // console.log(response.data[1].first_name);
     return response.data;
   })
  }
});
