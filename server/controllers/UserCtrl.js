module.exports = {

  register: function(req, res, next) {

    //SQL CODE TO CREATE USER IN DATABASE
    //include res.send in the callback

  },

  read: function(req, res, next) {

    //SQL CODE TO FIND USER IN DATABASE
    //include res.send in the callback

  },

  me: function(req, res, next) {
    console.log(req.user) //req.user is what is returned in the done(err, user) function. see passport.js file
    if (!req.user) return res.status(401).send('current user not defined');
    req.user.password = null;
    return res.status(200).json(req.user);
  },

  update: function(req, res, next) {

    //SQL CODE TO UPDATE USER IN DATABASE
    //include res.send in the callback

  }
};
