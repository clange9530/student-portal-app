//Dependencies.
var User = require('../models/userModel.js'),
    mongoose = require('mongoose');

module.exports.userByID = function(req, res, next, _id) {
    User.findById(_id, function(err, user) {
        if(err) {
        console.log(err);
        res.status(400).send(err);
        } else {
        req.user = user;
        next();
        }
    });
};

module.exports.create = function(req, res) {
    /* Instantiate a user */
    var user = new User(req.body);
    /* Then save the user */
    user.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(user);
      }
    });
  };
  
  /* Show the current user */
  module.exports.read = function(req, res) {
    res.json(req.user);
    /* send back the user as json from the request */
  };
  
  /* Update a user */
  module.exports.update = function(req, res) {
    var user = req.user;
    user = {
      
    };
    var id = new mongoose.Types.ObjectId(user.userID);
    User.findByIdAndUpdate({_id: id}, user, function(err) {
      if(err) {
        console.log(err);
        res.status(404).send(err);
      } else {
        res.send('User updated');
      }
    });
  };
  
  /* Delete a user */
  module.exports.delete = function(req, res) {
    var id = new mongoose.Types.ObjectId(req.params.userID);
    User.findByIdAndRemove(id, function(err){
      if(err){
        console.log(err);
        res.status(404).send(err);
      } else {
        res.send('User deleted');
    }});
  };
  
  /* Retreive users, sorted alphabetically by user code */
  module.exports.list = function(req, res) {
    /* Your code here */
    console.log('Finding users');
    User.find({}, function(err, user){
      if(err){
        console.log(err);
        res.status(404).send(err);
      } else {
        res.json(user);
    }});
  };