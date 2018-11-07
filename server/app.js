var config = require('./config'),
    mongoose = require('mongoose'),
    express = require('./express');

module.exports.start = function() {
  console.log("Starting app...");
  
  var app = express.init();
  app.listen(config.port, function() {
    console.log('App listening on port', config.port);
  });
};
