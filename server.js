/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';

import api from './src/api/';
import auth from './src/auth/';
import config from './webpack.config';
import dbConfigFile from './config/config';


// const dbConfig = dbConfigFile[process.env.NODE_ENV];
const dbConfig = dbConfigFile.test;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
  (err) => { if(err) console.error(err);
             console.log('  Successfully connect to MongoDB !'); });

const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', auth);

app.use('/api', api);

app.use('/static', express.static(__dirname + '/public'));

app.get('*', (req, res) => {
console.log('Get user');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
