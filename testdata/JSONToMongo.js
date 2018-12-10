'use strict';

/*
 * 
 * Use this file to insert test data into the Mongo database.  This should be
 * done for any data which is created in another part of the application
 * but which we need to read in the student portal.  Examples of this type
 * of data are the student and client surveys.
 * 
 * To add a new type of data to this file, follow these steps:
 * 1. Create a Mongoose model
 * 2. Add the new model to ../server/models/models.js
 * 3. Create a JSON file in this directory with the sample/test data using a schema that matches the new model
 * 3. Add a line of code below that looks like this:
 *      processData('./newdata.json', Models.NewModel);
 */

var fs = require('fs'),
    mongoose = require('mongoose'), 
    config = require('../server/config'),
    Models = require('../server/models/models');

const commonCallback = function(message, err) {
  if (err) throw err;
  console.log(message);
}
    
const deleteCallback = function(err) {
  commonCallback("Deleted all documents.", err);
};

const saveCallback = function(err) {
  commonCallback("Object saved successfully.", err);
}

const handleSave = function(json, model) {
  for (var i = 0, len = json.entries.length; i < len; i++) {
    var l = new model(json.entries[i]);
  
    l.save(saveCallback);
  }
}

const processData = function(filepath, model) {
  var json = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  // If the JSON we read in has "overwrite" set to "1", delete all existing data for the model before saving the new data
  if (json.overwrite == "1") {
    model.remove({}, function(err) {
      deleteCallback(err);
      handleSave(json, model);
    });
  } else {
    handleSave(json, model);
  }

}

/* Connect to the MongoDB */
mongoose.connect(config.db.uri);

// Save student surveys
processData('./studentsurvey.json', Models.StudentSurvey);

// Save student survey responses
processData('./studentsurveyresponses.json', Models.StudentSurveyResponse);

// Save client surveys
processData('./clientsurvey.json', Models.ClientSurvey);

// Save projects
processData('./project.json', Models.Project);

// Save project documentation
processData('./projectdocumentation.json', Models.ProjectDocumentation);

processData('./team.json', Models.Team);