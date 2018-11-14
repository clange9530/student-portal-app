import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header class="header">
    <nav>
      <ul>
        <li class="navBar"><Link to='/'   >Home</Link></li>
        <li class="navBar"><Link to='/users'>Individual Profiles</Link></li>
        <li class="navBar"><Link to='/teams'>Teams</Link></li>
        <li class="navBar"><Link to='/sendMail'>Send Mail</Link></li>
        <li class="navBar"><Link to="/createProfile">Create New Profile</Link></li>
      </ul>
    </nav>
  </header>
)
  
export default Header;