/* Dependencies */
var email = require('../controllers/email.server.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(email.list)
  .post(email.send);




// TODO: This is for when we need to display a previously-sent email

/*
  The 'router.param' method allows us to specify middleware we would like to use to handle 
  requests with a parameter.

  Say we make an example request to '/listings/566372f4d11de3498e2941c9'

  The request handler will first find the specific listing using this 'listingsById' 
  middleware function by doing a lookup to ID '566372f4d11de3498e2941c9' in the Mongo database, 
  and bind this listing to the request object.

  It will then pass control to the routing function specified above, where it will either 
  get, update, or delete that specific listing (depending on the HTTP verb specified)
 */
// TODO: This is for when we need to display a previously-sent email
// router.param('emailId', listings.listingByID);

module.exports = router;