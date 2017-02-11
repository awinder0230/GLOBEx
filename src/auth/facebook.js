import passport from 'passport';
import { Strategy } from 'passport-facebook';

import { User } from '../models/';
import config from '../../config/config';
import init from './init';

console.log('config: ', config);

passport.use(new Strategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  enableProof: true
  },
  function(accessToken, refreshToken, profile, done) {

    console.log('Get user profile: ', profile);

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      facebookid: profile.id
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates/*, options*/, function(err, user) {
      if(err) {
        console.log('Get err when find update');
        return done(err);
      } else {
        console.log('Get user from DB: ', user);
        if( user === null ) {
          let newUser = new User({
  name: profile.displayName,
//  account: String,
  facebookid: profile.id,
          });
          newUser.save();
          return done(null, newUser);
        }
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();

module.exports = passport;
