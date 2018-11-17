/* Dependencies */
var surveys = require('../controllers/clientsurvey.controller'),
    express = require('express'),
    router = express.Router();

router.route('/response/:projectId')
    .get(surveys.getResponseByProjectId)

module.exports = router;