import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 pl-2 pr-2">
        <a href="/" className="brand-logo">React + TypeScript</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/" exact>Todolist</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
