
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create the schema */
var projectSchema = new Schema({
    name: String,
    client_name: String
});

/* Use the schema to instantiate a Mongoose model */
var Project = mongoose.model('Project', projectSchema);

/* Export the model to make it avaiable to other parts of the Node application */
module.exports = Project;
