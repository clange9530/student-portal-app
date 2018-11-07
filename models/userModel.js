/*schemas*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* 
UserSchema
	UserId is a primary key
	mongodb has 16mb limit so profile pic should be addressed before hand when a user clicks create
  */
var UserSchema = new Schema({
  /* Your code here */ 
  UserID: { type: String, unique: true },
  Password: String,
  First: String,
  Last: String,
  Address: String,
  City:String,
  State:String,
  Zipcode:String,
  Phone:String,
  Email:String,
  Github:String,
  Team:String,
  Bio:String
});


var User = mongoose.model('User', UserSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = User;
