
/* Dependencies */
var StudentSurvey = require('../models/studentsurvey.server.model'),
    StudentSurveyResponse = require('../models/studentsurveyresponse.server.model')

// Save a student's survey responses
exports.submit = function(req, res) {

    /* Instantiate a Student Survey Response */
    var studentSurveyResponse = new StudentSurveyResponse(req.body);

    /* And save it to the database */
    studentSurveyResponse.save(function(err) {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(studentSurveyResponse);
        }
    });
}

// Get the student survey questions for a project
exports.getByProjectId = function(req, res) {
    StudentSurvey.find({ project_id: req.params.projectId }, function(err, survey) {
        // Set response status to 404
        if (err) {
            res.status(404).send(err);
        } else {
            res.json(survey[0]);
        }
    });
}