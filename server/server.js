var express = require("express");
var google = require("googleapis")
var bodyParser = require('body-parser');
var cors = require('cors');
var options = {
  origin: ''
}
var app = express();
app.use(express.static('../'));
var db = require('node-mysql');
var DB = db.DB;
var BaseRow = db.Row;
var BaseTable = db.Table;

app.use(cors(options));

var config = require('./config.js');

var mysql = require('mysql');

var connection  = require('express-myconnection');
//
app.use(

    connection(mysql,{

        host     : config.host,
        user     : config.user,
        password : config.password,
        port     : 3306,
        database : config.database,
    },'request')
);

// var connection = mysql.createConnection({
//   host     : config.host,
//   user     : config.user,
//   password : config.password,
//   database: config.database,
// });
//
// connection.connect(function(err){
//   if (err) {
//     console.log(err);
//   }
//   console.log("success");
// });

var selectUser = require("./controllers/selectUser")
var getCustomers = require("./controllers/getCustomers")
var getDTC = require('./controllers/getDTC')
var getDTCbyCode = require('./controllers/getDTCbyCode')

app.get('/api/user/:id', selectUser.queryUser)

app.get('/api/customers/:id', getCustomers.queryCutomers)

app.get('/api/dtc/', getDTC.queryDTC)

app.get('/api/dtc/:code', getDTCbyCode.queryDTCbyCode)
var port = 3000;

app.listen(port, function(){
console.log('Beginning your downfall on ' + port + "...");
});
