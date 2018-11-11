
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create the schema */
var emailSchema = new Schema({
    project_id: { type: String, required: true },
    status: String,
    date_sent: Date,
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true }
  });

  /* Use your schema to instantiate a Mongoose model */
var Email = mongoose.model('Email', emailSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Email;
