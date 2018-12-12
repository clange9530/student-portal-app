var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* 
Skills/Projects save as arrays of objects, ex:
{'name' : 'skill1'} or {'name': 'project1'}
UserID & Password are values used to log in
*/
var UserSchema = new Schema({
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
  Bio:String,
  Skills:Array, 
  Projects: Array, 
  ProfilePicURL: String
},{collection: 'users'});


var User = mongoose.model('User', UserSchema);

module.exports = User;