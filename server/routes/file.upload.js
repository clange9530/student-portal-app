const express = require('express');
const router = express.Router();

const upload = require('../helpers/file.upload');

const singleImageUpload = upload.single('image');

router.post('/', function(req, res) {

     singleImageUpload(req, res, function(err){
          if(err){
               return res.send('There is a problem');
          }

	   return res.send('Successfully uploaded files!');
     })
});

module.exports = router;
