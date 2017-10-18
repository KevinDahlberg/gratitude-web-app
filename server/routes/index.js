//Base Modules
var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

// Add Authentication handling here
router.post('/',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/'
  })
);

//Index File
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
