
/* Dependencies */
var Email = require('../models/email.server.model.js'),
    emailHelper = require("../helpers/email.helper.js");

/* Send an email */
exports.send = function(req, res) {

    /* Instantiate an Email */
    var email = new Email(req.body);

    /* Send the email and update status appropriately */
    if (emailHelper.send(req.body)) {
        email.status = "Sent";
        email.date_sent = new Date();
    } else {
        email.status = "Error";
    }

    email.project_id = req.params.projectId;

    /* Then save the email */
    email.save(function(err) {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json(email);
        }
    });
};

exports.list = function(req, res) {
    Email.find({ project_id: req.params.projectId }, function(err, emails) {
        // Set response status to 404
        if (err) {
            res.status(404).send(err);
        } else {
            res.json(emails);
        }
    });
};

exports.read = function(req, res) {

    var emailId = req.params.emailId;
    var projectId = req.params.projectId;

    Email.findById(emailId).exec(function(err, email) {
        if(err) {
            console.log(err);
            res.status(404).send(err);
          } else {
            if (email.project_id === projectId) {
                res.json(email);
            } else {
                res.status(404).send();
            }

        }
    });
}
