/*
 *  Use this file to make models available to other parts of the application in a common
 *  way without having to explicitly import/require individual models.
 * 
 * Usage:
 * 
 * var Models = require('../models/models');
 * 
 * Models.Project.findById(...);
 * 
 */

exports.ClientSurvey = require('./clientsurveyresponse.server.model');
exports.Project = require('./project.server.model');
exports.ProjectDocumentation = require('./projectdocumentation.server.model');
exports.StudentSurvey = require('./studentsurvey.server.model');
exports.StudentSurveyResponse = require('./studentsurveyresponse.server.model');
exports.Team = require('./teamModel');
exports.User = require('./userModel');
