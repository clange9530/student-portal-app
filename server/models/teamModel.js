//Create schema for team profiles
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var teamSchema = new Schema({
     members: Array,  //array for team members
     projects: Array,  //array for projects assigned
     skills: Array,  //array for skills of team members
     prod_mgr: String,  //This is for the product manager
     scrum_mstr: String,  //This is for the name of the scrum master
     primary_cont:  String  //This is for the primary contact name

});

var Team = mongoose.model('Team', teamSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Team;
