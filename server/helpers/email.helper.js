
/* Dependencies */
// var sendpulse = require("sendpulse-api");
    // config = require('./config');

// var TOKEN_STORAGE = "/tmp/";

// Function used to abstract the calling code away from the implementation
// of whatever API (or SMTP functionality) we are using
module.exports.send = function(message) {

    // TODO: Need to wire up the actual API we will be using
    // var answerGetter = function(data) {
    //     console.log(data);
    // }

    // sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE);

    // var email = {
    //     "html" : "<h1>Example text</h1>",
    //     "text" : "Example text",
    //     "subject" : "Example subject",
    //     "from" : {
    //         "name" : "Alex",
    //         "email" : "some@domain.com"
    //     },
    //     "to" : [
    //         {
    //             "name" : "Piter",
    //             "email" : "8bxjcmuphk@liamekaens.com"
    //         },
    //     ],
    //     "bcc" : [
    //         {
    //             "name" : "John",
    //             "email" : "some@domain.info"
    //         },
    //     ]
    // };

    // sendpulse.smtpSendMail(answerGetter,email);

    console.log(message);
    return true;
};