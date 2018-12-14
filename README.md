
## Credits

**React.js**: The entire front-end of this application was built using React.js (https://reactjs.org/).

**Material-ui**: Additional front-end components and styling are from Material-ui (https://material-ui.com/).

**Node.js**: The back-end of this application was built using and runs in Node.js (https://nodejs.org/).

**Express.js**: Express.js was used to provide routing and simplify development of the back-end of the application (https://expressjs.com/).

**Mongoose**: Mongoose was used to simplify interaction with the applications MongoDB database (https://mongoosejs.com/).

**MongoDB:** Data for the application is stored in a MongoDB no-SQL database (https://www.mongodb.com/).

**MLab**: Hosting for the application's MongoDB database was provided by MLab (https://mlab.com/home).

**Nodemailer**: SMTP functionality is supplied by Nodemailer (https://nodemailer.com/about/).

**Test Data Creation**: The utility used to insert test data into the MongoDB database (JSONToMongo.js) was adapted from the file JSONToMongo.js used in Bootcamp Assignment #3 (https://github.com/cgardnermccune/UF-Directory-App-Assignment-Assignment3_v2018).

## Features Implemented

##### Team Profile Management
- View a list of members in a team
- Display the team's scrum master and product manager
- Search for teams by team member skills
- Add and delete team members
- Drill down to individual profile from team member list

##### Individual Profile Management
- Allow a user to edit their data
- Allow other users to view an individual's data

##### View & Select teams and skills from a list of teams
- Saving a new team
- Reviewing existing teams
- Removing individuals from team
- Deleting a team
- Adding individuals to team

##### Project Management
- View and send email
- View assigned client
- Project documentation file upload
- Complete student feedback surveys
- View summary of client feedback surveys


## Running Locally

Follow the steps below to run the application locally.

1. Create a config.js file as described below in **Configuring Database and Server Connections**.
1. If the application database has not previously been populated, follow the steps listed below under **Creating Test Data**. 
1. Open a Node.js command prompt and navigate to root directory of the application.
1. Execute the command **node server/server.js**.
1. Open a second Node.js command prompt and navigate to the **client** subdirectory off of the root of the application.
1. Execute the command **npm start**.
1. In a web browser, navigate to http://localhost:3000/.

## Using the Application

If you are using the test database described in the client documentation:

1. Click the user icon and select **Login** from the drop-down menu.  Log in using the username "test" and the password "test".
1. Click **View Project** to view project information including details, project emails, student and client surveys, and uploaded documentation files.
1. Click the user icon and select **Create New Profile** to create a new user profile.
1. Navigate to http://localhost:3000/users/lange3 to view or edit the user profile for the user lange3.
1. Navigate to http://localhost:3000/teams/Team%201 to see the team profile page.


## Creating Test Data

1. Open a Node.js command prompt and navigate to the **testdata** subdirectory off of the root directory of the application.
1. Execute the command **node JSONToMongo.js**.

## Configuring Database and Server Connections

Create a file named **config.js** in the **server** subdirectory off of the root directory of the application.  Populate this file with JSON configuration settings as described below and as illustrated in the file **configExample.js** located in the same directory.

##### Database

Set the value of the **uri** property to the MongoDB URI from MLab as illustrated below.  Be sure to use the correct username, password, hostname, and database name for your MongoDB as seen in MLab.

    db: {
      uri: 'mongodb://<dbuser>:<dbpassword>@ds155243.mlab.com:55243/student-portal-app',
    }


##### SMTP Server

Set the values of the SMTP settings to the correct values for your SMTP server.  These values should be provided by your SMTP/email administrator.  If you do not have an account that can be used with an SMTP server you may choose to use Ethereal (https://ethereal.email/) instead.  Ethereal provides a simulated SMTP service that is well-suited to the testing and development of email functionality in an application.  The file **configExample.js** contains sample Ethereal credentials which may be used as-is.  Alternately, you may choose to create a new account at Ethereal and use that instead.  The example below illustrates SMTP configuration.

    smtp: {
      server: '<insert name of your SMTP server here>',
      port: <insert SMTP port number here, typically 25, 465, or 587>,
      username: '<insert username used to log in to your SMTP server>',
      password: '<insert password used to log in to your SMTP server>',
      useSSL: <insert 1 to use SSL; otherwise insert 0>
    }

##### AWS S3 Settings

Set the values of the AWS settings to the correct values for your AWS account.  The example below illustrates AWS configuration.

    aws: {
      accessKey: '<insert your access key provided by AWS>',
      secretKey: '<insert your secret key provided by AWS>',
      bucketName: '<insert the name of the AWS S3 bucket where you would like to store uploaded files>',
      region: '<insert the name of the AWS region where you would like to store files>'
    }

## Workflow for CEN Group C

- For each user story, the team member working on the user story will create a feature branch with a name that describes what they are working on.
  - If a member of the team is working on a large user story, or multiple members of the team are working on the same user story, branches may be created for each task within the user story.
- All changes for a user story or task will be committed to the branch that was created for that user story or task.
- Before creating a pull request, each team member will ensure that their branch contains all of the latest commits from the **master** branch in GitHub.  
  - Ideally, this should be done prior to each push of the branch to GitHub.
- When a feature is complete, all code has been committed, and all commits have been pushed to GitHub, the team member who made the changes will create a pull request to merge the commits into the **master** branch.
- At least one other member of the team will review the changes in the pull request and merge it to the **master** branch if there are no problems with the changes.  If anything needs to be modified before merging, the pull request will be closed without merging.

