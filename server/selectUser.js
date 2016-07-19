
// var mysql = require('mysql');
//
// var config = require('./config.js')
//
// var connection = mysql.createConnection({
//   host     : config.host,
//   user     : config.user,
//   password : config.password,
//   database: config.database,
// });
// connection.connect();


// website.com/articles?id=1
// website.com/articles?id=1; drop table articles;

// var id = 'de39d4ab-4d22-11e6-9e98-0680f03a8445';

exports.queryUser = function(req, res){
      req.getConnection(function(err,connection){
        connection.query('select * from user where id = ?', req.params.id, function(err, result) {
          // console.log(err);
          // console.log(result);
          res.send(result)
        })
  })

}
