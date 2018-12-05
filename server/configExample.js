//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: '', //place the URI of your mongo database here.
      },
      port: 8080,
  smtp: {
    server: 'smtp.ethereal.email',
    port: 587,
    username: 'h7nfi5alh34v36jy@ethereal.email',
    password: 'wAjgJazX1U3PtHB8HN',
    useSSL: 0
  },
  s3: {
    bucketName: "student-portal-app"
  }
};