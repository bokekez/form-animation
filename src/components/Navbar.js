import React from 'react';
import { NavLink } from 'react-router-dom';
import '../componentStyles/NavBar.css';

const Navbar = () => {
  const NavStyle = `nav-link (navData) => (navData.isActive ? "active" : 'none'`
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink
          to="/animation"
          className={NavStyle}
        >
          Animation
        </NavLink>
        <NavLink
          to="/graph"
          className={NavStyle}
        >
          Graph
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
