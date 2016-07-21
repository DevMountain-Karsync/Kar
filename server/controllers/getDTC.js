

exports.queryDTC= function(req, res){
      req.getConnection(function(err,connection){
        connection.query('select * from dtc', function(err, result) {
          // console.log(err);
          // console.log(result);
          res.send(result)
        })
  })

}
