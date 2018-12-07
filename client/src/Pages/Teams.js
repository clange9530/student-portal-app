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


class Teams extends Component {
     constructor(props){
          super(props);
          var { match: { params } } = this.props;
          this.team = params.teamName;
          this.state = {
               _id: "",
               teamName: "",
               members: [{name: '', UserID: ''}],
               projects: [],
               skills: [],
               prod_mgr: "",
               scrum_mstr: "",
               primary_cont: "",
               gitHub_repo: ""
          };
     }


     componentDidMount() {
          this.getTeamInfo();
                    console.log(this.state.teamName);
     }

getTeamInfo = () => {
     fetch('/api/teams/' + this.team)
          .then(response => {
               console.log(response);
               return response.json()
          })
          .then(Team => this.setState( {
               _id: Team._id,
               teamName: Team.teamName,
               members: Team.members,
               projects: Team.projects,
               skills: Team.skills,
               prod_mgr: Team.prod_mgr,
               scrum_mstr: Team.scrum_mstr,
               primary_cont: Team.primary_cont,
               gitHub_repo: Team.gitHub_repo
          }));
}


render() {
     return (
     <div>
          <div className="row">
               <AppBar position="static">
                    <Toolbar variant="dense">
                         <Typography variant="title" color="inherit">
                              {this.state.teamName}
                         </Typography>
                    </Toolbar>
               </AppBar>
          </div>
          <div className="row">
               <div className="column">
                    <Grid container direction="column" spacing={16} className="email-grid">
                         <Grid item md={12}>
                              <img src="" alt="team"/>
                         </Grid>
                         <Grid item md={12}>
                              <Button variant="contained" size="medium">
                                   Add a picture
                              </Button>
                         </Grid>
                    </Grid>
               </div>
               <div className="column">
                    <Grid container direction="column" spacing={16} className="email-grid">
                         <Grid item md>
                              <label className="display-label">{this.state.teamName} Detailed Info</label>
                              <Table>
                                   <TableBody>
                                        <TableHead>
                                             <TableRow>
                                                  <label className="display-label">Product Manager</label>
                                                  <TableCell>{this.state.prod_mgr}</TableCell>
                                             </TableRow>
                                             <TableRow>
                                                  <label className="display-label">Scrum Master</label>
                                                  <TableCell>{this.state.scrum_mstr}</TableCell>
                                             </TableRow>
                                             <TableRow>
                                                  <label className="display-label">Primary Contact</label>
                                                  <TableCell>{this.state.primary_cont}</TableCell>
                                             </TableRow>
                                             <TableRow>
                                                  <label className="display-label">GitHub Repository</label>
                                                  <TableCell>{this.state.gitHub_repo}</TableCell>
                                             </TableRow>
                                        </TableHead>  
                                   </TableBody>   
                              </Table> 
                         </Grid>
                         <Grid item md>
                              <List>
                                   <label className="display-label">Team Members</label>
                                   {this.state.members.map((user,i) => 
                                        <ListItem id="lists" key={i}>
                                             <Button
                                                  variant="text"
                                                  size="medium"
                                                  component={Link}
                                                  to={{pathname: '/users/' + user.UserID}}
                                             >
                                                  {user.name}
                                             </Button>    
                                        </ListItem>
                                   )} 
                              </List>
                         </Grid>
                    </Grid>
               </div>
               <div className="column">
                    <Grid container direction="column">
                         <Grid item md>
                              <List>
                                   <label className="display-label">Team's Technical Skills</label>
                                   {this.state.skills.map((item,i) => 
                                        <ListItem id="lists" key={i}>
                                             <ListItemText>{item}</ListItemText>    
                                        </ListItem>
                                   )} 
                              </List>
                         </Grid>
                         <Grid item md>
                              <List>
                                   <label className="display-label">Past Projects</label>
                                   {this.state.projects.map((item,i) => 
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
)}}


export default Teams;
