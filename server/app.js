//Base Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Authentication Routes
var session = require('express-session')
var passport = require('./modules/user_sql')

//Route Modules
var index = require('./routes/index');
var user = require('./routes/user');

//App Config
app.set('port', (process.env.PORT || 5000));

//Middleware Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// Login Session Config //
app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: {maxage: 60000, secure: false}
}));

//start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/index', index);
app.use('/user', user);
app.use('/*', index);

// listen
app.listen(app.get('port'), function(){
  console.log('Listening on port ', app.get('port'));
});

module.exports = app;
