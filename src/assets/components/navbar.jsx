import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/path-to-logo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li> <Link to="/"> Home </Link></li>
        <li><Link to="about">AboutUs</Link></li>
        <li className="dropdown">
          <a href="#services">Services</a>
          <div className="dropdown-content">
            <a href="#">Service 1</a>
            <a href="#service2">Service 2</a>
            <a href="#service3">Service 3</a>
          </div>
        </li>
        <li><Link to="/sample">Samples</Link></li>
      </ul>

      {/* Signup Button and User Profile Icon */}
      <div className="navbar-actions">
        <button className="signup-button">Sign Up</button>
        <FontAwesomeIcon icon={faUser} className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
