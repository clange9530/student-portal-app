
/* Dependencies */
var Project = require('../models/project.server.model');

exports.read = function(req, res) {
    var projectId = req.params.projectId;

    Project.findById(projectId).exec(function(err, project) {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        } else {
            res.json(project);
        }
    });
}