var express = require("express");
var google = require("googleapis");


var app = express();

app.use(express.static('static'));


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2("310600689678-ficp4o5b2o2jo1q5s7c468a58k4qvfhn.apps.googleusercontent.com", "0MmV6gvihJ1MLqKuxeNIN4em", "http://karsync.ninja/oauthcallback");

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/gmail.modify'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes // If you only need one scope you can pass it as string
});

app.get("/url", function(req, res) {
  res.send(url);
});

app.get("/tokens", function(req, res) {

  var code = req.query.code;

  console.log(code);

  oauth2Client.getToken(code, function(err, tokens) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }

    console.log("allright!!!!");

    console.log(err);
    console.log(tokens);
    oauth2Client.setCredentials(tokens);

    res.send(tokens);
  });
});
