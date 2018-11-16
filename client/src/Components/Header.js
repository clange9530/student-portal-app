import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header class="header">
    <nav>
      <ul>
        <li class="navBar"><Link to='/'   >Home</Link></li>
        <li class="navBar"><Link to='/users'>Individual Profiles</Link></li>
        <li class="navBar"><Link to='/teams'>Teams</Link></li>
        <li class="navBar"><Link to='/sendMail/566372f4d11de3498e2941c9'>Send Mail</Link></li>
        <li class="navBar"><Link to="/listmail/566372f4d11de3498e2941c9">View emails</Link></li>    {/* TODO: Make project id dynamic */}
        <li class="navBar"><Link to="/studentsurvey/566372f4d11de3498e2941c9">Submit survey</Link></li>    {/* TODO: Make project id dynamic */}
      </ul>
    </nav>
  </header>
)
  
export default Header;