//© 2018 kaboom18 
//All rights reserved.

/* Dependencies */
var mongoose = require('mongoose'), 
    Users= require('../models/userModel.js');
    Teams= require('../models/teamModel.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* login */
exports.login = function(req, res) {
console.log("login attempt");
console.log(req.params.name);
Users.find({ UserID: req.params.name },function (err, entry) {
    if (err) {console.error(err); res.status(404).send(err);}
    else {
	try{
		if (entry[0].Password === req.params.pswrd)
		{
		res.status(200).send({res:'logged in ',id:entry[0]._id,teamid:''});}
		else
		{res.status(200).send({res:'log in failed',id:'',teamid:''});}
	}
	catch{res.status(200).send({res:'log in failed',id:'',teamid:''});}
    }
  });


};


