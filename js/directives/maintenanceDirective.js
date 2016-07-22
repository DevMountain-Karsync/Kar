angular.module('karSync')
.filter('searchFor', function(){
    return function(arr, searchString){
//make
        if(!searchString){
            return arr;
        }
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
return function(arr, searchString3){
  if(!searchString3){
    return arr;
  };
var result = [];
searchString3 = searchString3.toLowerCase();
angular.forEach(arr, function(item){
    if(item.name.toLowerCase().indexOf(searchString3) !== -1){
    result.push(item);
  }
});
return result;
};
});
