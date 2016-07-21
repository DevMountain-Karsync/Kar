var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var config = require('../config');

passport.use(new GoogleStrategy({
    clientID:     config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  },

  function(request, accessToken, refreshToken, profile, done) {

    //***SQL CODE HERE***//
    //SQL CODE TO EITHER FIND OR CREATE USER/CLIENT WITH GOOGLE ID ATTACHED
    //http://stackoverflow.com/questions/639854/check-if-a-row-exists-otherwise-insert

    //you now have access to profile.id (see console.log below)
    //you can match profile.id to the google_auth property in your user database
    //in the SQL callback, make sure you include the following line:
    //   return done(err, user)
    //where user is the user found in the SQL database


    console.log(profile.id)

    process.nextTick(function() {
      return done(null, profile);
    })
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
