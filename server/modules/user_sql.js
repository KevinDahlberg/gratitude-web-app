var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var encryptLib = require('./encryption');
var pg = require('pg');
var pool = require('./db');

var connectCount = 0;


var acquireCount = 0;
pool.on('acquire', function (client) {
  acquireCount++;
});


pool.on('connect', function () {
  connectCount++;
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  pool.connect(function (err, client, release) {
    if(err) {
      release();
      done(err);
    }

    var user = {};

    client.query("SELECT * FROM users WHERE id = $1", [id], function(err, result) {

      // Handle Errors
      if(err) {
        done(err);
        release();
      }

      user = result.rows[0];
      release();

      if(!user) {
          // user not found
          return done(null, false, {message: 'Incorrect credentials.'});
      } else {
        // user found
        done(null, user);
      }

    });
  });
});

// Does actual work of logging in
passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'email'
    }, function(req, email, password, done) {
	    pool.connect(function (err, client, release) {

        // assumes the email will be unique, thus returning 1 or 0 results
        client.query("SELECT * FROM users WHERE email = $1", [email],
          function(err, result) {
            var user = {};

            // Handle Errors
            if (err) {
              done(null, user);
            }

            release();

            if(result.rows[0] != undefined) {
              user = result.rows[0];
              // Hash and compare
              if(encryptLib.comparePassword(password, user.password)) {
                console.log('password compare ', password, ' ', user.password);
                // all good!
                done(null, user);
              } else {
                done(null, false, {message: 'Incorrect credentials.'});
              }
            } else {
              done(null, false);
            }

          });
	    });
    }
));

module.exports = passport;
