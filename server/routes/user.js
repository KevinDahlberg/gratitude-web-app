var express = require('express');
var router = express.Router();
var pg = require('pg');
var pool = require('../modules/db');

router.post('/registerUser', function(req, res) {
  var username = req.body.username
  var password = req.body.password

  pool.connect(function(error, db, done) {
    if (error) {
      console.log('database connection failes');
      res.sendStatus(500)
    } else {
      addUserDBQUery(username, password, done)
    }
  })
})

function addUserDBQuery (username, password, done) {
  db.query('INSERT INTO "users" ("username", "password") VALUES ($1, $2);',
  username, password,
  function(queryError, result) {
    done();
    if (queryError) {
      result.sendStatus(500);
    } else {
      result.sendStatus(201)
    }
  })
}

module.exports = router;
