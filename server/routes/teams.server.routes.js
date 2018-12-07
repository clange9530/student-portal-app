const express = require('express');
const router = express.Router();
const team_controller = require('../controllers/teams.server.controller.js');

const Team = require('../models/teamModel');

router.route('/')
     //Request all Teams
     .get(team_controller.all_teams)
     //Create a new team
     .post(team_controller.create_new_team);

router.route('/:teamName')
     //Fetch team by team Name
     .get(team_controller.find_team)
     //Update team data
     .patch(team_controller.update_team)
     //Delete a team
     .delete(team_controller.delete_team);

router.param('_id', team_controller.team_by_id);

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
     //router.param('teamName', team_controller.teamByName);

     module.exports = router;
