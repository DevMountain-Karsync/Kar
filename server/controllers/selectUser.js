
exports.queryUser = function(req, res){
      req.getConnection(function(err,connection){
        connection.query('select * from user where id = ?', req.params.id, function(err, result) {
          // console.log(err);
          // console.log(result);
          res.send(result)
        })
  })

}
