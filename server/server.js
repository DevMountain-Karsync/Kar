var express = require("express");
var bodyParser = require('body-parser');


var db = require('node-mysql');
var DB = db.DB;
var BaseRow = db.Row;
var BaseTable = db.Table;

var config = require('./config.js')


var box = new DB({
    host     : config.host,
    user     : config.user,
    password : config.password,
});
