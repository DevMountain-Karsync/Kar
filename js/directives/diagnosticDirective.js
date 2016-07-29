angular.module('karSync')
.filter('startFrom', function(){
  return function (input, start, pageSize) {
        start = +start;
        pageSize = +pageSize;
        while (start > input.length) {
          
            start -= pageSize;
        }
        if (start < 0) {
            start = 0;
        }
        return input.slice(start);
    };


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
