angular.module('karSync')
.filter('searchUserList', function(){
 return function(arr, searchString2){
if(!searchString2){
    return arr;
};
var result = [];
searchString2 = searchString2.toLowerCase();
angular.forEach(arr, function(item){
  console.log(item)
    if(item.first_name.toLowerCase().indexOf(searchString2) !== -1){
    result.push(item);
}
    if(item.last_name.toLowerCase().indexOf(searchString2) !== -1) {
      result.push(item);
    }
});
return result;
};
});
