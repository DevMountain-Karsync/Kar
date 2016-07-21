
exports.queryDTCbyCode = function(req, res){
      req.getConnection(function(err,connection){
        connection.query('select * from dtc where code = ?', req.params.code, function(err, result) {
          console.log(err);
          console.log(result);
          res.send(result)
        })
  })

}
