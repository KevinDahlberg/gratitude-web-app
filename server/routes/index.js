//Base Modules
var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

//Index File
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
