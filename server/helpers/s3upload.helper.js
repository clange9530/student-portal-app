
/* Dependencies */
var config = require('../config');

getObjectKey = function(projectId, filename) {
    // get bucket name from config
    var bucket = config.s3.bucketName;

    // url-encode filename
    var encodedFilename = encodeURI(filename);

    // construct object key using "s3://bucketname/projectid/url_encoded_filename"
    var objectKey = `s3://${bucket}/${projectId}/${encodedFilename}`

    return objectKey;
}

// Upload the specified file to S3
// TODO: Will need to get the file contents here when we wire this up to S3
module.exports.upload = function(projectId, filename, callback) {

    var objectKey = getObjectKey(projectId, filename);

    // TODO: Actually store the object in S3
    console.log("Uploading object", objectKey);

    // call callback function with success or failure
    callback(true, objectKey);
}

// TODO: Add download method

// Delete the specified file from S3
module.exports.delete = function(projectId, filename, callback) {

    var objectKey = getObjectKey(projectId, filename);

    // TODO: Actually delete the object from S3
    console.log("Deleting object", objectKey);

    // call callback function with success or failure
    callback(true, objectKey);
}