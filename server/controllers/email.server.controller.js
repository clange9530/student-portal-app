
/* Dependencies */
var sendpulse = require("sendpulse-api");

var API_USER_ID = "6bc554a734f9f558f5133da13a5dd7d2";
var API_SECRET = "1d0cfba986fc6e050ca354e40854ec55";
var TOKEN_STORAGE = "/tmp/";

/* Create a listing */
exports.send = function(req, res) {
    console.log(req.body);

    if (req.body.subject) {
        console.log("Subject: " + req.body.subject);
    }

    var answerGetter = function(data) {
        console.log(data);
    }

    sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE);

    var email = {
        "html" : "<h1>Example text</h1>",
        "text" : "Example text",
        "subject" : "Example subject",
        "from" : {
            "name" : "Alex",
            "email" : "some@domain.com"
        },
        "to" : [
            {
                "name" : "Piter",
                "email" : "8bxjcmuphk@liamekaens.com"
            },
        ],
        "bcc" : [
            {
                "name" : "John",
                "email" : "some@domain.info"
            },
        ]
    };

    sendpulse.smtpSendMail(answerGetter,email);


    res.status(200).send("Message sent");
};

/* TODO: Implement this later */
exports.list = function(req, res) {
    res.send("Placeholder for list of messages");
};