
/* Dependencies */
var ClientSurveyResponse = require('../models/clientsurveyresponse.server.model');

// Get the client survey responses for a project
exports.getResponseByProjectId = function(req, res) {
    ClientSurveyResponse.find({ project_id: req.params.projectId }, function(err, survey) {
        // Set response status to 404
        if (err) {
            res.status(404).send(err);
        } else {
            res.json(survey[0]);
        }
    });
}