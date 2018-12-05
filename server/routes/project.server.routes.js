/* Dependencies */
var project = require('../controllers/project.server.controller'),
    express = require('express'),
    router = express.Router();

router.route('/:projectId')
    .get(project.read)

module.exports = router;
