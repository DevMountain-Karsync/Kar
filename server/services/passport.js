var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var localStrategy = require('passport-local');
var config = require('../config');
var getPartner = require('../controllers/getPartner')
// var express = require("express");
// // var mysql = require('mysql');
// //
// var app = express();
// var connection = mysql.createConnection({
//   host     : config.host,
//   user     : config.user,
//   password : config.password,
//   database: config.database,
// });
// connection.connect(function(err){
//   if (err) {
//     console.log(err);
//   }
//   console.log("success");
// });


// var connection  = require('express-myconnection');

// MYSQL CONNECTION //
// app.use(
//
//     connection(mysql,{
//
//         host     : config.host,
//         user     : config.user,
//         password : config.password,
//         port     : 3306,
//         database : config.database,
//     },'request')
// );

passport.use(new GoogleStrategy({
    clientID:     config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "http://karsync.ninja/auth/google/callback",
    passReqToCallback: true
  },

  function(request, accessToken, refreshToken, profile, done, email, calendar) {

    //***SQL CODE HERE***//
    //SQL CODE TO EITHER FIND OR CREATE USER/CLIENT WITH GOOGLE ID ATTACHED
    //http://stackoverflow.com/questions/639854/check-if-a-row-exists-otherwise-insert

    //you now have access to profile.id (see console.log below)

    //you can match profile.id to the google_auth property in your user database
    //in the SQL callback, make sure you include the following line:
    //   return done(err, user)
    //where user is the user found in the SQL database

    // var query =connection.query('select * from partner where profile_id = ?', profile.id, function(err, result){
    //    console.log('our result is ' + result[0].partner_id);
    request.getConnection(function(err,connection){

            connection.query('select * from partner where profile_id = ?', profile.id, function(err, result) {


              //  console.log(result[0].partner_id);
              //  app.locals.partner = result[0].partner_id;
              // console.log(profile.id)


              //  console.log(result[0].business_name);
              //  console.log(profile);

              if (result.length === 0) {
                console.log("im right");
                result = [{
                  id: 2,
                  email: null,
                  pass_word: null,
                  business_name: 'Nick\'s Auto Shop',
                  username: null,
                  google_auth: null,
                  partner_id: 2,
                  profile_id: '104570063791919965644' } ]
              }

              return done(null, result)
            })
      })



    // process.nextTick(function() {
    //   return done(null, profile);
    // })
  // }
}
));

// CREATE SESSIONS //
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;
