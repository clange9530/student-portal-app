
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create the schema */
var studentSurveyResponseSchema = new Schema({
    project_id: { type: String, required: true },
    student_id: { type: String, required: true },
    student_name: String,
    date_submitted: Date,
    questions: [{
        question_number: Number,
        question_prompt: String,
        question_response: String
    }]
});

/* Use the schema to instantiate a Mongoose model */
var StudentSurveyResponse = mongoose.model('StudentSurveyResponse', studentSurveyResponseSchema);

/* Export the model to make it avaiable to other parts of the application */
module.exports = StudentSurveyResponse;
