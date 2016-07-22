angular.module('karSync')
.filter('searchFor', function(){
  return function(arr, searchS3){
    if(!searchS3){
      return arr;
    };
    var result = [];
    searchS3 = searchS3.toLowerCase();
    angular.forEach(arr, function(code){
      if(code.name.toLowerCase().indexOf(searchS3) !== -1){
        console.log(code)
        result.push(code);
      }
    });
    return result;
  };
});
