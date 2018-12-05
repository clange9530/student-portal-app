'use strict';

/*
 * 
 * Use this file to insert test data into the Mongo database.  This should be
 * done for any data which is created in another part of the application
 * but which we need to read in the student portal.  Examples of this type
 * of data are the student and client surveys.
 * 
 */

var fs = require('fs'),
    mongoose = require('mongoose'), 
    config = require('../server/config'),
    StudentSurvey = require('../server/models/studentsurvey.server.model'),
    ClientSurvey = require('../server/models/clientsurveyresponse.server.model'),
    Project = require('../server/models/project.server.model'),
    StudentSurveyResponse = require('../server/models/studentsurveyresponse.server.model');

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
processData('./studentsurvey.json', StudentSurvey);

// Save client surveys
processData('./clientsurvey.json', ClientSurvey);

// Save projects
processData('./project.json', Project);

// Save student survey responses
processData('./studentsurveyresponses.json', StudentSurveyResponse);
