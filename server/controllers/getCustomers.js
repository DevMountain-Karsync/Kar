exports.queryCutomers = function(req, res){
      req.getConnection(function(err,connection){
        connection.query('select * from user where partner_id = ?', req.params.id, function(err, result) {
          // console.log(err);
          // console.log(result);
          res.send(result)
        })
  })
}
