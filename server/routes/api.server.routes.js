/* Dependencies */
var express = require('express'),
    router = express.Router();

var emailRouter = require('./email.server.routes'),
    studentSurveyRouter = require('./studentsurvey.server.routes'),
    clientSurveyRouter = require('./clientsurvey.server.routes');

router.use('/email', emailRouter);
router.use('/studentsurvey', studentSurveyRouter);
router.use('/clientsurvey', clientSurveyRouter);

module.exports = router;