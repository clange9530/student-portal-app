
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create the schema */
var emailSchema = new Schema({
    status: String,
    date_sent: Date,
    sender: String,
    recipient: String,
    subject: String,
    body: String
  });

  /* Use your schema to instantiate a Mongoose model */
var Email = mongoose.model('Email', emailSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Email;
