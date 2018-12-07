var express = require('express');
     router = express.Router();
     team_controller = require('../controllers/teams.server.controller.js');


//Request all Teams
router.route('/')
     .get(team_controller.all_teams)
     .post(team_controller.create_new_team);

router.route('/:teamName')
     .get(team_controller.find_team)
     .put(team_controller.update_team)
     .delete(team_controller.delete_team)


//The following handles an error if a team is not in the database
router.use((req, res, next) => {
     const error = new Error('Team not found');
     error.status = 404;
     next(error);
});

router.use((error, req, res, next) => {
     res.status(error.status || 500);
     res.json({
          error: {
               message: error.message
          }
     });
});

router.param('teamName', team_controller.teamByName);

module.exports = router;
