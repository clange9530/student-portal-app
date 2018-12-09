import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class Header extends Component{
  state = {
    anchorEl: null,
    anchorDos: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePMenu = event => {
    this.setState({ anchorDos: event.currentTarget });
  }

  handlePClose = () => {
    this.setState({ anchorDos: null })
  }


  render(){
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const style = {
      marginLeft: 10,
      marginRight: 10
    }
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              aria-owns={open ? 'menu-appbar': undefined}
              aria-haspopup = "true"
              onClick={this.handleMenu}
              color="inherit" 
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <IconButton
              aria-owns={open ? 'profile-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handlePMenu}
              color="inherit"
            >
              <AccountCircle style={style} />
            </IconButton>
            <Typography variant="h6" color="inherit">UF Team And Project Management</Typography>
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
              onClose={this.handlePClose}
            >
              <MenuItem 
                onClick={this.handlePClose}
                component={Link} 
                to={{pathname:'/'}}>
                Home
              </MenuItem>
              <MenuItem
                onClick={this.handlePClose}
                component={Link}
                to={{pathname: '/createProfile'}}
              >
                Create New Profile
              </MenuItem>
            </Menu>
            <Menu 
              id="menu-appbar"
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
                component={Link}
                to={{pathname: '/'}}
                onClick={this.handleClose}
              >
                Home
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
