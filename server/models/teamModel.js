//Create schema for team profiles
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var teamSchema = new Schema({
     _id: mongoose.Schema.Types.ObjectId,
     teamName: {type: String, unique: true, required: true},  //This is the team name
     members: {type: Array, required: true},  //array for team members
     projects: Array,  //array for projects assigned
     skills: Array,  //array for skills of team members
     prod_mgr: {type: String, required: true},  //This is for the product manager
     scrum_mstr: {type: String, required: true},  //This is for the name of the scrum master
     primary_cont:  {type: String, required: true},  //This is for the primary contact name
     gitHub_repo: String //This is the link for the github repo
});

var Team = mongoose.model('Team', teamSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Team;
