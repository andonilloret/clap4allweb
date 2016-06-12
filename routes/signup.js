var express = require('express');
var signup = express.Router();

signup.get('/', function(req, res, next) {
  res.render('signup', { title: 'Register'});
});

module.exports = signup;
