/* Dependencies */
var express = require('express'),
    router = express.Router();

var emailRouter = require('./email.server.routes'),
    studentSurveyRouter = require('./studentsurvey.server.routes'),
    clientSurveyRouter = require('./clientsurvey.server.routes'),
    userRouter = require('./user.server.routes');

 var teamRouter = require('./teams.server.routes');

router.use('/email', emailRouter);
router.use('/studentsurvey', studentSurveyRouter);
router.use('/clientsurvey', clientSurveyRouter);
router.use('/users', userRouter);
router.use('/users/userID', userRouter.param);
router.use('/teams', teamRouter);
router.use('/teams/:teamName', teamRouter.param);
module.exports = router;
