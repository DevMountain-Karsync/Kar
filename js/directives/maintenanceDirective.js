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


//users
//   return function(arr, searchString2){
//   if(!searchString2){
//       return arr;
//   };
//   var result = [];
//   searchString2 = searchString2.toLowerCase();
//   angular.forEach(arr, function(item){
//     console.log(item)
//       if(item.name.toLowerCase().indexOf(searchString2) !== -1){
//       result.push(item);
//   }
// });
//   return result;
// };
});
