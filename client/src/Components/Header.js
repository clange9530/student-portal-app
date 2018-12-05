import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li className="navBar"><Link to='/'>Home</Link></li>
        <li className="navBar"><Link to='/users'>Individual Profiles</Link></li>
        <li className="navBar"><Link to='/teamskills'>Team skills</Link></li>
        <li className="navBar"><Link to='/teams'>Teams</Link></li>
        <li className="navBar"><Link to="/createProfile">Create New Profile</Link></li>
        <li className="navBar"><Link to='/create_project'>Create Project</Link></li>
        <li className="navBar"><Link to="/project/566372f4d11de3498e2941c9">View project</Link></li>    {/* TODO: Make project id dynamic */}
        <li className="navBar"><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  </header>
)
  
export default Header;
