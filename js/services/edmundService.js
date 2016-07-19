angular.module('karSync')
.service('edmundService', function ($http){

//sending year I.D. to receive maintanence report. sets description of frequency field.
this.byYear = function(yId) {
      return $http.get('https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid='+yId+'&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
        then(function(data) {

          for (var i = 0; i < data.data.actionHolder.length; i++) {
          var freq =  data.data.actionHolder[i].frequency;

          if(freq === 1){
            data.data.actionHolder[i].frequency = '1 = A-service schedule. This is the basic 1-year maintenance service that most cars get.'
          }
          if(freq === 2) {
            data.data.actionHolder[i].frequency = '2 - B-service schedule. This is the extended maintenance service that comes after #1.'
          }
          if(freq === 3) {
            data.data.actionHolder[i].frequency = '3 - This maintenance service takes place once at the exact value of the Interval Mileage or Interval Month, whichever comes first.'
          }
          if(freq === 4) {
            data.data.actionHolder[i].frequency = '4 - This maintenance service takes place every Interval Mileage or Interval Month value, whichever comes first.'
          }
          if(freq === 5) {
            data.data.actionHolder[i].frequency = '5 - This maintenance service takes place more frequently.'
          }
          if(freq === 6) {
            data.data.actionHolder[i].frequency = '6 - This maintenance service takes place when the warning light indicates.'
          }
          if(freq === 7) {
            data.data.actionHolder[i].frequency = '7 - Inspection I as recommended by the vehicle manufacturer.'
          }
          if(freq === 8) {
            data.data.actionHolder[i].frequency = '8 - Inspection II as recommended by the vehicle manufacturer.'
          }
          if(freq === 9) {
            data.data.actionHolder[i].frequency = '9 - Second Inspection II.'
          }

          }
          return data;
        });

}
//select make of vehicle to send it to the getModel function/api call
this.getMake = function(){
  return $http.get('https://api.edmunds.com/api/vehicle/v2/makes?view=basic&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
  success(function(data){
    return data;

  });
}
//select model to send the year ID to the maintanence report (byYear) function/api call
this.getModel = function(make) {
  return $http.get('https://api.edmunds.com/api/vehicle/v2/'+make+'/models?view=basic&fmt=json&api_key=ph7zhymwvhhr28wfeqvdpcws').
  success(function(data){
    return data;

  });
}
})
