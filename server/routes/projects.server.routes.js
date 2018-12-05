//Dependencies.
var express = require('express');
    router = express.Router();
    project= require('../controllers/project.server.controller.js');

//create project
router.route('/create/:title/:descr/:creator')
  .all(project.create)

router.route('/members/:projectId')
    .get(project.list_members)

module.exports = router;
