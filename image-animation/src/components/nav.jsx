import React from "react";
import { Link } from "react-router-dom";

function NavBar(name) {
  return (
    <nav className="nav">
      <h2 className="title">Framer Motion</h2>
      <ul className="navlist">
        <Link to="/">
          <li className="navItems">Home</li>
        </Link>
        <Link to="/toggle">
          <li className="navItems">OnClik Toggle</li>
        </Link>
        <Link to="/ToggleParent">
          <li className="navItems">Toggle Parent/Children</li>
        </Link>
        <Link to="/collapseCard">
          <li className="navItems">Colapse Card</li>
        </Link>
        <Link to="/buttonChange">
          <li className="navItems">Button Background</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
