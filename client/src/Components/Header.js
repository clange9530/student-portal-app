import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header class="header">
    <nav>
      <ul>
        <li class="navBar"><Link to='/'>Home</Link></li>
        <li class="navBar"><Link to='/users'>Individual Profiles</Link></li>
        <li class="navBar"><Link to='/teamskills'>Team skills</Link></li>
	{/*<li class="navBar"><Link to='/teams'>Teams</Link></li>*/}
        <li class="navBar"><Link to="/createProfile">Create New Profile</Link></li>
        <li class="navBar"><Link to='/create_project'>Create Project</Link></li>
        <li class="navBar"><Link to="/project/566372f4d11de3498e2941c9">View project</Link></li>    {/* TODO: Make project id dynamic */}
	<li class="navBar"><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  </header>
)
  
export default Header;
