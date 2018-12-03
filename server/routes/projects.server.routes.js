//Dependencies.
var express = require('express');
    router = express.Router();
    project= require('../controllers/project.server.controller.js');

//create project
router.route('/create/:title/:descr/:creator')
  .all(project.create)

module.exports = router;
