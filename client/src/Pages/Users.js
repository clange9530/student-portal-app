import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Input } from '@material-ui/core';
import S3FileUpload from 'react-s3';


//This will set up the environment variables for AWS S3 Bucket
const awsConfig = require('../awsConfig');

//console.log(awsConfig);

//Middleware for aws upload.  Run npm install --save react-s3

//This is the setup for AWS bucket
const config = {
    bucketName: awsConfig.aws.AWS_BUCKET_NAME,
    region: awsConfig.aws.AWS_REGION,
    accessKeyId: awsConfig.aws.AWS_ACCESS_KEY,
    secretAccessKey: awsConfig.aws.AWS_SECRET_KEY
}
console.log(config);

class Users extends Component {
    constructor(props){
        super(props);
        var { match: { params } } = this.props;
        this.path = '/api/users/' + params.userID;
        this.state = {
            UserID: '',
            Skills: [],
            Projects: [],
            First: '',
            Last: '',
            Address: '',
            City: '',
            State: '',
            Zipcode: '',
            Phone: '',
            Email: '',
            Github: '',
            Team: '',
            Bio: '',
            ProfilePicURL: ''
        };
    }
    
    //AWS Functionality to upload image to bucket
    upload = (e) => {
        console.log(e.target.files);
        S3FileUpload.uploadFile(e.target.files[0], config)
         .then(data => {
              console.log(data);
              const location = JSON.stringify(data.location);
              const locationURL = encodeURIComponent(location.substring(1, location.length-1));
              console.log(location);
              console.log(this);
              console.log(this.state);
              var user = this.state;
              user.ProfilePicURL = locationURL;
              console.log(user)
              this.forceUpdate();
              fetch('/api/users/' + this.state.UserID, {
                  method: 'PUT',
                  body: JSON.stringify(user),
                  headers: {"content-type": "application/json"}
              })
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(err => console.log(err))

         })
         .catch( (err) => {
              alert(err);
         })

   }


    //Fetches user's data from API.
    componentDidMount(){
        fetch(this.path)
        .then(response => response.json())
        .then(UserData => {
            //Data response was an array of a single JSON object, thus the following line. 
            //Wasn't able to figure out how to send it as JUST a JSON object.
            var User = UserData[0];
            this.setState({ 
                Skills: User.Skills,
                Projects: User.Projects,
                UserID: User.UserID,
                First: User.First,
                Last: User.Last,
                Address: User.Address,
                City: User.City,
                State: User.State,
                Zipcode: User.Zipcode,
                Phone: User.Phone,
                Email: User.Email,
                Github: User.Github,
                Team: User.Team,
                Bio: User.Bio,
                ProfilePicURL: User.ProfilePicURL
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <div className="row">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="title" color="inherit">{this.state.First} {this.state.Last}</Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="row">
                    <div className="column">
                        <Grid container direction="column">
                        <Grid item md>
                                <img src={decodeURIComponent(this.state.ProfilePicURL)} alt="profile pic" style={{width:300}}></img>
                            </Grid>
                            <Grid item md>
                                <input id ="awsUpload"
                                    type="file"
                                    ref={(ref) => this.upload = ref} 
                                    onChange={(e) => this.upload.click(e.target.files)}
                                    style={{visibility: "hidden",
                                    height:1}}
                                />
                                <Button
                                    variant="contained"
                                    size="medium"
                                    onClick={() => this.upload.click()}
                                >Upload A Profile Picture</Button>
                            </Grid>
                            <Grid item md>
                                <Table style={{'margin-top': '100', 'width': 'auto'}}>
                                    <TableBody>
                                        <TableHead color="inherit">
                                            <Typography variant="h8">Contact Info</Typography>
                                        </TableHead>  
                                        <TableRow>
                                            <TableCell>Username: {this.state.userID}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Email: {this.state.Email}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>GitHub UserName: <Link to={{pathname: "http.github.com/" + this.state.Github}}></Link></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Phone: {this.state.Phone}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Address: {this.state.Address}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>City: {this.state.City}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>State: {this.state.State}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Zip: {this.state.Zipcode}</TableCell>
                                        </TableRow>
                                    </TableBody>   
                                </Table> 
                            </Grid>
                        </Grid>
                    </div>
                    <div className="column">
                        <Grid container direction="column">
                            <Grid item md>
                                <label className="display-label">Bio</label>
                                <p>{this.state.Bio}</p>
                            </Grid>
                            <Grid item sm>
                                <Button 
                                    variant="contained" 
                                    size="medium" 
                                    component={Link} 
                                    to={{pathname: '/editProfile', state: {data: this.state}}}
                                >
                                    Edit Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="column">
                        <Grid container direction="column">
                            <Grid item md>
                                <List>
                                    <label className="display-label">Technical Skills</label>
                                    {this.state.Skills.map((item,i) => 
                                        <ListItem id="lists" key={i}>
                                            <ListItemText>{item.name}</ListItemText>    
                                        </ListItem>
                                    )} 
                                </List>
                            </Grid>
                            <Grid item md>
                                <List>
                                    <label className="display-label">Past Projects</label>
                                    {this.state.Projects.map((item,i) => 
                                        <ListItem id="lists" key={i}>
                                            <ListItemText>{item.name}</ListItemText>    
                                        </ListItem>
                                    )} 
                                </List>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                
            </div> 
        )
    }
}
export default Users;