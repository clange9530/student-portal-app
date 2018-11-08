
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

    /* Then save the email */
    email.save(function(err) {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            // TODO: Should we return the sent email or a simple status message?
            res.send("Message sent");
            res.json(email);
        }
    });
};

exports.list = function(req, res) {

    /* Your code here */
    Email.find({}, function(err, emails) {
        // Set response status to 404
        if (err) {
            res.status(404).send(err);
        } else {
            res.json(emails);
        }
    });
};