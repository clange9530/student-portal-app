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


class Users extends Component {
    constructor(props){
        super(props);
        var { match: { params } } = this.props;
        this.userID = params.userID;
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
       
    componentDidMount(){
        fetch('/api/users/' + this.userID)
        .then(response => response.json())
        .then(UserData => {
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
                            <Typography variant="title" color="inherit">
                            {this.state.UserID}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="row">
                    <div className="column">
                        <Grid container direction="column">
                            <Grid item md>
                                <img src={this.state.ProfilePicURL} alt="profile pic"></img>
                                <Typography>Profile pic goes here</Typography>
                            </Grid>
                            <Grid item md>
                                <label className="display-label">Bio</label>
                                <p>{this.state.Bio}</p>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="column">
                        <Grid container direction="column">
                            <Grid item md>
                                <label className="display-label">{this.state.UserID}'s Personal Info</label>
                                <Table>
                                    <TableBody>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>{this.state.First} {this.state.Last}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{this.state.Email}</TableCell>
                                                <TableCell>{this.state.Github}</TableCell>
                                                <TableCell>{this.state.Phone}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{this.state.Address}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{this.state.City}</TableCell>
                                                <TableCell>{this.state.State}</TableCell>
                                                <TableCell>{this.state.Zipcode}</TableCell>
                                            </TableRow>
                                        </TableHead>  
                                    </TableBody>   
                                </Table> 
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
                                            <ListItemText>{item}</ListItemText>    
                                        </ListItem>
                                    )} 
                                </List>
                            </Grid>
                            <Grid item md>
                                <List>
                                    <label className="display-label">Past Projects</label>
                                    {this.state.Projects.map((item,i) => 
                                        <ListItem id="lists" key={i}>
                                            <ListItemText>{item}</ListItemText>    
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