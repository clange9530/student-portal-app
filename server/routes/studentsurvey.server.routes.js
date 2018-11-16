/* Dependencies */
var surveys = require('../controllers/studentsurvey.controller'),
    express = require('express'),
    router = express.Router();

router.route('/:projectId')
    .get(surveys.getByProjectId)
    .post(surveys.submit);

module.exports = router;
