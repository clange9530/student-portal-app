var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
<<<<<<< HEAD
    urlencoded_body_parser = bodyParser.urlencoded({
      extended: true
    }),
    config = require('./config');
    emailRouter = require('./routes/email.server.routes');
    userRouter = require('./routes/user.server.routes');
    // getCoordinates = require('../controllers/coordinates.server.controller.js');
=======
    config = require('./config'),
    apiRouter = require('./routes/api.server.routes');

>>>>>>> master
const basicAuth = require('express-basic-auth');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());
  app.use(urlencoded_body_parser);

/*Server connection to Amazon S3

  /* serve static files */

<<<<<<< HEAD
  /* use the email router for requests to the api */
  /* TODO: Should we have a single API router for all of the API calls? */
  app.use('/api/email', emailRouter);
  app.use('/api/users', userRouter);
  app.use('/api/users/userID', userRouter.param);
=======
  /* use the api router for requests to the api */
  /* This router handles all requests for any api controller */
  app.use('/api', apiRouter);
>>>>>>> master

/*Auth*/
/* Uncomment for auth - probably a mongo query here Steven will take that.
app.use(basicAuth({users: { 'admin': 'supersecret' }}))
*/

  /* go to homepage for all routes not specified */
  app.get('*', function(req, res){
    res.redirect('/');
  });

  return app;
};
