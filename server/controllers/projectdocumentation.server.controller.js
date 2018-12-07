
/* Dependencies */
var ProjectDocumentation = require('../models/projectdocumentation.server.model'),
    s3helper = require('../helpers/s3upload.helper');

// Get the data for one project document
exports.read = function(req,res) {
    var documentId = req.params.documentId;
    var projectId = req.params.projectId;

    ProjectDocumentation.findById(documentId).exec(function(err, projectDocumentation) {
        if(err) {
            console.log(err);
            res.status(404).send(err);
          } else {
            if (!projectDocumentation || projectDocumentation.project_id !== projectId) {
                res.status(404).send();
            } else {
                res.json(projectDocumentation);
            }
        }
    });
}

// Store the data for one project document
exports.submit = function(req,res) {

    var projectId = req.params.projectId;
    var fileName = req.body.filename;

    s3helper.upload(projectId, fileName, function(success, objectKey) {
        if (success) {
            // Instantiate a new object
            var projectDocumentation = new ProjectDocumentation(req.body);

            projectDocumentation.project_id = projectId;
            projectDocumentation.date_uploaded = Date();
            projectDocumentation.s3path = objectKey;
    
            /* And save it to the database */
            projectDocumentation.save(function(err) {
                if(err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.json(projectDocumentation);
                }
            });
        } else {
            res.status(500).send("Error uploading to S3");
        }
    });
}

// Get a list of all documents that have been uploaded for a project
exports.list = function(req, res) {
    ProjectDocumentation.find({ project_id: req.params.projectId }, function(err, projectDocumentation) {
        // Set response status to 404
        if (err) {
            res.status(404).send(err);
        } else {
            res.json(projectDocumentation);
        }
    });
}

// Delete a document that has been uploaded for a project
exports.delete = function(req,res) {
    var projectId = req.params.projectId;
    var documentId = req.params.documentId;

    var conditions = {
        project_id: projectId, 
        _id: documentId
    };

    ProjectDocumentation.findOneAndRemove(conditions, function(err, document) {
        if (err) res.status(500).send(err)
        else if (!document) res.status(404).send()
        else {
            s3helper.delete(projectId, document.filename, function(success, objectKey) {
                if (success)
                    res.json(document);
                else 
                    res.status(500).send();
            })
        }
    })
}