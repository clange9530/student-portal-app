//Dependencies.
var express = require('express');
    router = express.Router();
    login = require('../controllers/login.server.controller.js');

//Login
router.route('/:name/:pswrd')
  .all(login.login)

module.exports = router;
