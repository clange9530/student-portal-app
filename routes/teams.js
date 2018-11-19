var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/teams', function(req, res, next) {
  res.send('Team Page');
});

module.exports = router;
