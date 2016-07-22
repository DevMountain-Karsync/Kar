// EXTERNAL MODULES //
var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');

var options = {
  origin: ''
}
var app = express();
app.use(express.static('../'));
app.use(bodyParser.json());
var db = require('node-mysql');
var DB = db.DB;
var BaseRow = db.Row;
var BaseTable = db.Table;

app.use(cors(options));

// SERVICES //
var passport = require("./services/passport");

var config = require('./config.js');
var mysql = require('mysql');
var connection  = require('express-myconnection');

// MYSQL CONNECTION //
app.use(

    connection(mysql,{

        host     : config.host,
        user     : config.user,
        password : config.password,
        port     : 3306,
        database : config.database,
    },'request')
);


app.use(session({
  secret: config.session_secret,
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());


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


// CONTROLLERS //
var selectUser = require("./controllers/selectUser")
var getCustomers = require("./controllers/getCustomers")
var UserCtrl = require("./controllers/UserCtrl");
var getDTC = require('./controllers/getDTC')
var getDTCbyCode = require('./controllers/getDTCbyCode')
var addCustomers= require('./controllers/addCustomers')
var getPartner = require('./controllers/getPartner')

// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};


// ENDPOINTS //
app.get('/api/user/:id', selectUser.queryUser)
app.get('/api/customers/:id', getCustomers.queryCutomers)
app.get('api/partner/:profile_id', getPartner.queryPartner)

app.get('/login', UserCtrl.read);
app.get('/me', isAuthed, UserCtrl.me);

// GOOGLE AUTH ENDPOINTS //
app.get('/auth/google',
  passport.authenticate('google', { scope:
    ['email', 'profile', 'https://www.googleapis.com/auth/calendar']
  }));

app.get( '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/#/dashboard/',
    failureRedirect: '/'
  }));

app.get('/api/dtc/', getDTC.queryDTC)

app.get('/api/dtc/:code', getDTCbyCode.queryDTCbyCode)

var port = 3000;

app.listen(port, function(){
console.log('Beginning your downfall on ' + port + "...");
});
