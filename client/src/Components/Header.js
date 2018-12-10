import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

class Header extends Component{
  state = {
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const style = {
      marginLeft: 15,
      marginRight: 15
    }
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">UF Team And Project Management</Typography>
            <Button
              style={style}
              variant="contained" 
              size="medium" 
              component={Link}
              color="grey"
              to={'/'}    
            >
              <Typography variant="h8" color="inherit">Home</Typography>
            </Button>
            <Button
              style={style}
              variant="contained" 
              size="medium" 
              component={Link}
              color="grey"
              to={'/teamskills'}    
            >
              <Typography variant="h8" color="inherit">Team Skills</Typography>
            </Button>
            <IconButton 
              aria-owns={open ? 'profile-appbar': undefined}
              aria-haspopup = "true"
              onClick={this.handleMenu}
              color="inherit" 
              aria-label="Menu">
              <AccountCircle style={style} />
            </IconButton>
            <Menu
              id="profile-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem 
                onClick={this.handleClose}
                component={Link} 
                to={{pathname:'/myProfile'}}>
                My Profile
              </MenuItem>
              <MenuItem
                onClick={this.handleClose}
                component={Link}
                to={{pathname: '/editProfile'}}
              >
                Edit My Profile
              </MenuItem>
              <MenuItem
                onClick={this.handleClose}
                component={Link}
                to={{pathname: '/createProfile'}}
              >
                Create New Profile
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    )
  }



}
  
  {/*
  <header className="header">
    <nav>
      <ul>
        <li className="navBar"></li>
        <li className="navBar"><Link to='/users'>Individual Profiles</Link></li>
        <li className="navBar"><Link to='/teamskills'>Team skills</Link></li>
        <li className="navBar"><Link to='/teams'>Teams</Link></li>
        <li className="navBar"></li>
        <li className="navBar"><Link to='/create_project'>Create Project</Link></li>
        <li className="navBar"><Link to="/project/566372f4d11de3498e2941c9">View project</Link></li>    
        <li className="navBar"><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  </header>
  */}

  
export default Header;
