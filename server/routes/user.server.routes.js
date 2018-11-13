//Dependencies.
var express = require('express');
    router = express.Router();
    user = require('../controllers/user.server.controller.js');



//Get all users.
router.route('/')
  .get(user.list)
  .post(user.create);

//Get/set/delete individual users by user ID.
router.route('/:userID')
  .get(user.read)
  .put(user.update)
  .delete(user.delete);

router.param('userID', user.userByID);

module.exports = router;
