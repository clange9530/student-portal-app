/* Dependencies */
var projectDocumentation = require('../controllers/projectdocumentation.server.controller'),
    express = require('express'),
    router = express.Router();

router.route('/:projectId')
    .get(projectDocumentation.list)
    .post(projectDocumentation.submit);

router.route('/:projectId/:documentId')
    .get(projectDocumentation.read)
    .delete(projectDocumentation.delete);

module.exports = router;