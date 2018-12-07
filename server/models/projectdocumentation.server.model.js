
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

    /* Create the schema */
var projectDocumentationSchema = new Schema({
    project_id: { type: String, required: true },
    date_uploaded: Date,
    filename: { type: String, required: true, unique: true },
    s3path: String
}, {
    collection: 'projectdocumentation'
});

/* Use the schema to instantiate a Mongoose model */
var ProjectDocumentation = mongoose.model('ProjectDocumentation', projectDocumentationSchema);

/* Export the model to make it avaiable to other parts of the Node application */
module.exports = ProjectDocumentation;