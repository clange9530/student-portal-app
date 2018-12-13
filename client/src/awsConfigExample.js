/* This file stores the environmental variables for AWS S3
connectivity.  The new dev team will need to create a new
AWS bucket, and rename all fields below to match the
account's security key, bucket name, and region (if not
US east).

Please refer to the AWS Documentation on how to create
a bucket at:

     https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html
     https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html

This program uses react-s3 middleware to upload images and
files to the s3 bucket.  Documentation can be found at:

     https://www.npmjs.com/package/react-s3

In addition, the new developer will need to update the CORS
configuration under the 'Permissions' tab in the bucket to
reflect the following code:

     <?xml version="1.0" encoding="UTF-8"?>
     <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
     <CORSRule>
         <AllowedOrigin>*</AllowedOrigin>
         <AllowedMethod>HEAD</AllowedMethod>
         <AllowedMethod>GET</AllowedMethod>
         <AllowedMethod>PUT</AllowedMethod>
         <AllowedMethod>POST</AllowedMethod>
         <AllowedMethod>DELETE</AllowedMethod>
         <ExposeHeader>ETag</ExposeHeader>
         <AllowedHeader>*</AllowedHeader>
     </CORSRule>
     </CORSConfiguration>

Finally, the region code is easiest to find through the URL for the bucket.
As an example, the URL will look like this:

     https://s3.console.aws.amazon.com/s3/buckets/YOUR-BUCKET-NAME/?region=us-east-1&tab=overview
                                                                    THIS IS THE REGION

****Be sure to save the example file as 'awsConfig.js' in the src file***
*/


module.exports = {
     aws:{
          AWS_BUCKET_NAME: '',  // This is the variable for the unique bucket name
          AWS_ACCESS_KEY: '',  // This is the variable for the 'Access Key ID' identified in the slides
          AWS_SECRET_KEY: '',  // This is the variable for the 'Secret Access Key' identified in the slides
          AWS_REGION: ''  // This is the variable for the region, as shown above in the bucket URL
     }
}
