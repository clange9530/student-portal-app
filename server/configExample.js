//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://web:florida8@ds249123.mlab.com:49123/project'  //place the URI of your mongo database here.
  },

  aws: {
       bucketName: 'cen-3031-student-portal-app', //This will be the unique bucket name created for the project
       accessKey: 'AKIAI4NNVRLX4A5GGIIQ',  //This is the Access Key ID provided by AWS
       secretKey: '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',  //This is the Secret Access Key provided by AWS
       region: 'us-east-1'  //This is the region to which the s3 bucket is configured
 },

 smtp: {
   server: 'smtp.ethereal.email',
   port: 587,
   username: 'h7nfi5alh34v36jy@ethereal.email',
   password: 'wAjgJazX1U3PtHB8HN',
   useSSL: 0
},

  port: 8080
};
