angular.module('karSync')
.filter('searchFor', function(){



    return function(arr, searchString){
//make

        if(!searchString){

            return arr;
        };
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.name.toLowerCase().indexOf(searchString) !== -1){
            // console.log(item)
            result.push(item);
        }
        });
        return result;
    };
//model
    return function(arr, searchString1){
      // searchString = 'test';
      if(!searchString1){
        return arr;
      };
    var result = [];
    searchString1 = searchString1.toLowerCase();
    angular.forEach(arr, function(item){
        if(item.name.toLowerCase().indexOf(searchString1) !== -1){
        result.push(item);
      }
    });
    return result;
  };



//diagnostics
  return function(arr, search3){
  
    if(!search3){

      return arr;
    };
    var result = [];
    search3 = search3.toLowerCase();
    angular.forEach(arr, function(code){
      if(code.name.toLowerCase().indexOf(search3) !== -1){

        result.push(code);
      }
    });
    return result;
  };
});
