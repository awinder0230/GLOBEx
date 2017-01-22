/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import api from './src/api/';
import config from './webpack.config';
import dbConfigFile from './config/config';

// const dbConfig = dbConfigFile[process.env.NODE_ENV];
const dbConfig = dbConfigFile.test;


//////////////////////////////////////////////////////////////////////

import passport from 'passport';
import { Strategy } from 'passport-facebook';

// Configure the Facebook strategy for use by Passport.
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use( new Strategy ({
    clientID: 1033831626722864,
    clientSecret: a4bbd79d471065c86546699ce376be63,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes.
app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.listen(3000);

////////////////////////////////////////////////////////////////////




mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
  (err) => { if(err) console.error(err);
             console.log('  Successfully connect to MongoDB !'); });

const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
