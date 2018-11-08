
/* Dependencies */
var emailHelper = require("../helpers/email.helper.js");

/* Send an email */
exports.send = function(req, res) {

    if (req.body.subject) {
        console.log("Subject: " + req.body.subject);
    }

    if (emailHelper.send(req.body)) {
        res.send("Message sent");
    } else {
        res.status(500).send("Error");
    }
};

/* TODO: Implement this later */
exports.list = function(req, res) {
    res.send("Placeholder for list of messages");
};