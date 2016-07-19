
var mysql = require('mysql');

var config = require('./config.js')

var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
});
connection.connect();


// website.com/articles?id=1
// website.com/articles?id=1; drop table articles;

var id = '1';

var query = connection.query('select * from articles where id = ?',id, function(err, result) {
  console.log(query.sql);
  console.log(result);
});
