const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('../config');

aws.config.update({
     secretAccessKey: config.aws.secretKey,
     accessKeyId: config.aws.accessKey,
     region: config.aws.region
})

const s3 = new aws.S3()

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.aws.bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
},
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

module.exports = upload;