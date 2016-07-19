angular.module('karSync')
.filter('searchUserList', function(){
  return function(arr, searchUser){
    if(!searchUser){
      return arr;
    }
    var result = [];
    searchUser = searchUser.toLowerCase();
    angular.forEach(arr, function(item){
      if(item.name.toLowerCase().indexOf(searchUser) !== -1){
        result.push(item);
    }
    });
    return result;
}
});
