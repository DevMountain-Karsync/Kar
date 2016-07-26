angular.module('karSync')
.service('reportService', function( $http){
  this.reportFromId = function(){
    return $http({
      method: 'GET',
      url: 'https://karsync-1133.appspot.com/api/report?id='+id
    })
    .then(function(resp){
      return resp.data;
    })
  }
})
