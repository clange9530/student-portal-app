/* Dependencies */
var surveys = require('../controllers/studentsurvey.controller'),
    express = require('express'),
    router = express.Router();

router.route('/questions/:projectId')
    .get(surveys.getByProjectId);

router.route('/:projectId')
    .get(surveys.list)
    .post(surveys.submit);

router.route("/:projectId/:surveyId")
    .get(surveys.read);

module.exports = router;
