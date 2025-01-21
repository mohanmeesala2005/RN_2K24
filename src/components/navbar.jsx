import React, { useState } from 'react';
import { Link as LinkRoute } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <img className="navbar_logo" src="./src/assets/rnlogowhite.png" alt="logo" />
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <img className="toggler_menu" src="../src/assets/menu-line.png" alt="Menu Icon" />
        </button>
        <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <LinkRoute to="/" className="navbar-link" onClick={closeNavbar}>
              <p className="nav_item">HOME</p>
            </LinkRoute>
          </li>
          <li className="navbar-item">
            <LinkRoute to="/SliderComponent" className="navbar-link" onClick={closeNavbar}>
              <p className="nav_item">EVENTS</p>
            </LinkRoute>
          </li>
          <li className="navbar-item">
            <LinkRoute to="/ProfileCard" className="navbar-link" onClick={closeNavbar}>
              <p className="nav_item">TEAM RN</p>
            </LinkRoute>
          </li>
          <li className="navbar-item">
            <LinkRoute to="/Tabs" className="navbar-link" onClick={closeNavbar}>
              <p className="nav_item">ALUMNI</p>
            </LinkRoute>
          </li>
          <li className="navbar-item">
            <LinkRoute to="/sponsers" className="navbar-link" onClick={closeNavbar}>
              <p className="nav_item">SPONSORS</p>
            </LinkRoute>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
