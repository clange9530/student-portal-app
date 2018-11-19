var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    urlencoded_body_parser = bodyParser.urlencoded({
      extended: true
    }),
    config = require('./config'),
    apiRouter = require('./routes/api.server.routes');
    userRouter = require('./routes/user.server.routes');

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

  /* use the api router for requests to the api */
  /* This router handles all requests for any api controller */
  app.use('/api', apiRouter);
  app.use('/api/users', userRouter);
  app.use('/api/users/userID', userRouter.param);

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
