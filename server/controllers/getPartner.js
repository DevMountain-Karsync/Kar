exports.queryPartner = function(req, res, next) {
  console.log(req)
  request.getConnection(function(err,connection){
          connection.query('select * from partner where profile_id = ?', profile_id, function(err, result) {
             console.log(err);
             console.log(result);
            res.send(result)
          })
    })
  }
