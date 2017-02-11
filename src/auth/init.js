var passport = require('passport');
var { User } = require('../models/');

module.exports = function() {
  passport.serializeUser(function(user, done) {
    console.log('user :', user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('D id is: ', id);
    User.findById(id, function (err, user) {
    console.log('D user :', user);
      done(err, user);
    });
  });
};
