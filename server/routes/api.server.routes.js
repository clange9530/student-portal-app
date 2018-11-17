/* Dependencies */
var express = require('express'),
    router = express.Router();

var emailRouter = require('./email.server.routes'),
    studentSurveyRouter = require('./studentsurvey.server.routes');

router.use('/email', emailRouter);
router.use('/studentsurvey', studentSurveyRouter);

module.exports = router;