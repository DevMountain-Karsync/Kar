angular.module('karSync')
.service('diagnosticService', function ($http){

this.fromYear = function(){
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/api/dtc/'
  })
  .then(function(resp){
    return resp.data;
  })


  }


  this.getDTCbyCode = function(code){
          // console.log("alert",code);
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/dtc/'+code,
    }).then(function(response){
      return response.data[0]
    })
  }
})
