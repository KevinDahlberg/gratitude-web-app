var express = require('express');
var router = express.Router();
var encryptLib = require('../modules/encryption');
var pg = require('pg');
var pool = require('../modules/db');
var path = require('path');
var passport = require('passport');

var aquireCount = 0;
pool.on('aquire', function (client) {
  aquireCount++;
})

var connectCount = 0;
pool.on('connect', function () {
  connectCount++;
})

/** Router Requests **/
router.post('/registerUser', function(req, res) {
  var email = req.body.email;
  var password = encryptLib.encryptPassword(req.body.password);
  addUserDBQuery(email, password, res);
})

/**
 * Logs the user in using the passport authenticate method
 * documentation can be found at passportjs.org/docs
 * local strategy can be found in user_sql.js
 */
router.post('/loginUser',
  passport.authenticate('local'),
  function(req, res) {
      res.sendStatus(200);
  }
);

/** DB QUERIES **/
function addUserDBQuery (email, password, res) {
  pool.connect(function(error, db, done) {
    if (error) {
      console.log('database connection failed');
      res.sendStatus(500)
    } else {
      db.query('INSERT INTO "users" ("email", "password") VALUES ($1, $2);',
      [email, password],
      function(queryError, result) {
        done();
        if (queryError) {
          console.log('error adding to db ', queryError);
          res.sendStatus(500);
        } else {
          console.log('success adding to db');
          res.sendStatus(201)
        }
      })
    }
  })
}

module.exports = router;
