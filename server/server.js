var express = require("express");
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


var box = new DB({
    host     : config.host,
    user     : config.user,
    password : config.password,
});

var port = 3000;

app.listen(port, function(){
console.log('Beginning your downfall on ' + port + "...");
});
