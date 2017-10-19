var express = require('express');
var router = express.Router();
var pg = require('pg');
var pool = require('../modules/db');

router.post('/registerUser', function(req, res) {
  var email = req.body.email
  var password = req.body.password
  addUserDBQuery(email, password)
})

function addUserDBQuery (email, password) {
  pool.connect(function(error, db, done) {
    if (error) {
      console.log('database connection failes');
      res.sendStatus(500)
    } else {
      db.query('INSERT INTO "users" ("email", "password") VALUES ($1, $2);',
      [email, password],
      function(queryError, result) {
        done();
        if (queryError) {
          console.log('error adding to db ', queryError);
          queryError.sendStatus(500);
        } else {
          console.log('success adding to db');
          result.sendStatus(201)
        }
      })
    }
  })
}

module.exports = router;
