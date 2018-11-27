
/* Dependencies */
var nodemailer = require("nodemailer"),
    config = require('../config');

// Function used to abstract the calling code away from the implementation
// of whatever API (or SMTP functionality) we are using
module.exports.send = function(message, callback) {

    console.log(message);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: config.smtp.server,
        port: config.smtp.port,
        secure: (config.smtp.useSSL === 1), // true for 465, false for other ports
        auth: {
            user: config.smtp.username,
            pass: config.smtp.password
        }
    });
    
    // setup email data with unicode symbols
    let mailOptions = {
        from: message.sender,
        to: message.recipient,
        subject: message.subject,
        text: message.body,
        html: message.body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending message:');
            console.log(error);
            callback(false);
        } else {
            console.log('Message sent:');
            console.log(info);

            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            callback(true);    
        }
    });
};