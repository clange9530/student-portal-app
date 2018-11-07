import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'   >Home</Link></li>
        <li><Link to='/user'>Individual Profiles</Link></li>
        <li><Link to='/teams'>Teams</Link></li>
      </ul>
    </nav>
  </header>
)
  
export default Header;