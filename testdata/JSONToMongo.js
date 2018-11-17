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
    Schema = mongoose.Schema, 
    config = require('../server/config'),
    StudentSurvey = require('../server/models/studentsurvey.server.model');


/* Connect to the MongoDB */
mongoose.connect(config.db.uri);

// Save student surveys
var surveys = JSON.parse(fs.readFileSync('./studentsurvey.json', 'utf8'));

for (var i = 0, len = surveys.entries.length; i < len; i++) {
  var l = new StudentSurvey(surveys.entries[i]);

      l.save(function(err) {
    if (err) throw err;
    console.log('Survey saved successfully.');
  });
}