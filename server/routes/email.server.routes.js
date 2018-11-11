/* Dependencies */
var email = require('../controllers/email.server.controller.js'), 
    express = require('express'), 
    router = express.Router();

router.route('/:projectId')
  .get(email.list)
  .post(email.send);

router.route("/:projectId/:emailId")
    .get(email.read);

module.exports = router;