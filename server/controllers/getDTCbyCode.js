
exports.queryDTCbyCode = function(req, res){
      req.getConnection(function(err,connection){
        connection.query('select * from dtc where code = ?', req.params.code, function(err, result) {
          if (err) {
            res.send(err)
          }
          // console.log(err);

          // console.log(result);
          res.send(result)
        })
  })

}
